from flask import Flask, jsonify, request , Response
from flask_cors import CORS
import requests
import random , json

app = Flask(__name__)
CORS(app, 
     resources={r"/*": {
         "origins": ["http://localhost:3000" , "https://read-ranger-git-main-virajcommits-projects.vercel.app"],  # Explicitly allow your Next.js origin
         "methods": ["GET", "POST", "OPTIONS"],
         "allow_headers": ["Content-Type"],
     }})

@app.after_request
def after_request(response):
    # Allow CORS for both origins
    response.headers.add('Access-Control-Allow-Origin', ', '.join([
        "http://localhost:3000/"
    ]))
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

@app.route('/api/test', methods=['GET'])
def test_route():
    return jsonify({"message": "Backend is working!"})

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes"
GOOGLE_BOOKS_API_KEY = "AIzaSyBTFF5CiOFD7JfvxyxoQZC0bdAX7p2Omgg" 

@app.route("/api/recommend-books-stream", methods=["GET"])
def recommend_books_stream():
    """
    Streams book recommendations via SSE.
    Expects query params like:
      /api/recommend-books-stream?minutesPerDay=30&readingSpeed=200&months=1
    """
    try:
        # 1) Parse query parameters (SSE only supports GET)
        minutes_per_day = int(request.args.get("minutesPerDay", 0))
        reading_speed   = int(request.args.get("readingSpeed", 0))
        months          = int(request.args.get("months", 0))
    except ValueError:
        return jsonify({"error": "Invalid query parameters"}), 400

    # 2) Calculate total reading capacity
    total_minutes = minutes_per_day * 30 * months
    total_possible_words = total_minutes * reading_speed

    genres = ["fiction", "mystery", "science", "fantasy", "history"]

    def sse_recommend():
        # Optional: send an initial event with summary data
        init_data = {
            "total_minutes": total_minutes,
            "total_possible_words": total_possible_words,
            "reading_speed": reading_speed,
            "minutes_per_day": minutes_per_day,
            "months": months,
        }
        yield f"event: init\ndata: {json.dumps(init_data)}\n\n"

        # 3) For each genre, fetch books & yield them immediately
        for genre in genres:
            try:
                response = requests.get(
                    GOOGLE_BOOKS_API_BASE_URL,
                    params={
                        "q": f"subject:{genre}",
                        # random pages so user sees different results each time
                        "maxResults": random.randint(3, 20),
                        "printType": "books",
                        "langRestrict": "en",
                        "orderBy": "relevance",
                        "key": GOOGLE_BOOKS_API_KEY
                    },
                    timeout=10
                )
                if not response.ok:
                    continue

                books_data = response.json()
                items = books_data.get("items", [])
                
                # We can also limit the slice with random
                random_slice = random.randint(1, 20)
                items = items[:random_slice]

                recommended_books = []
                for item in items:
                    volume_info = item.get("volumeInfo", {})
                    
                    # Only include books that have all required fields
                    if all(k in volume_info for k in ["title", "authors", "pageCount"]):
                        page_count = volume_info["pageCount"]
                        word_count = page_count * 250  # ~250 words/page

                        # Check if it's within user's reading capacity
                        if word_count <= total_possible_words:
                            book_data = {
                                "title": f"{volume_info['title']} ({page_count} pages)",
                                "authors": volume_info["authors"],
                                "pageCount": page_count,
                                "estimatedWords": word_count,
                                "description": volume_info.get("description", "No description available"),
                                "imageLinks": volume_info.get("imageLinks", {}),
                                "genre": genre
                            }
                            recommended_books.append(book_data)

                # Sort books by page count
                recommended_books.sort(key=lambda x: x["pageCount"])

                # 4) Yield partial results for this genre
                chunk = {
                    "genre": genre,
                    "books": recommended_books
                }
                # SSE format => `event: someName\ndata: <JSON>\n\n`
                yield f"event: genre\ndata: {json.dumps(chunk)}\n\n"

            except requests.exceptions.RequestException:
                continue

        # 5) Finally, send a "done" event to signal completion
        done_msg = {"message": "All genres processed"}
        yield f"event: done\ndata: {json.dumps(done_msg)}\n\n"

    # Return the SSE generator as a streaming response
    return Response(sse_recommend(), mimetype="text/event-stream")

if __name__ == "__main__":
    app.run(debug=True)