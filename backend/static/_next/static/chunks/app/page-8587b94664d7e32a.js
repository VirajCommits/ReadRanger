(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974],
    {
      8860: (e, n, s) => {
        Promise.resolve().then(s.bind(s, 7181));
      },
      7181: (e, n, s) => {
        "use strict";
        s.d(n, { default: () => ReadingCalculator });
  
        const a = s(5155),
          l = s(2115),
          t = s(1110);
  
        function ReadingCalculator() {
          const [formData, setFormData] = (0, l.useState)({
              minutesPerDay: 60,
              readingSpeed: 300,
              months: 3,
            }),
            [eventSource, setEventSource] = (0, l.useState)(null),
            [books, setBooks] = (0, l.useState)([]),
            [visibleBooks, setVisibleBooks] = (0, l.useState)([]),
            [isLoading, setIsLoading] = (0, l.useState)(false),
            [isComplete, setIsComplete] = (0, l.useState)(false),
            [error, setError] = (0, l.useState)(null),
            [selectedBook, setSelectedBook] = (0, l.useState)(null);
  
          (0, l.useEffect)(() => {
            if (eventSource) eventSource.close();
            setBooks([]);
            setVisibleBooks([]);
            setIsComplete(false);
            setError(null);
            setIsLoading(true);
  
            const queryParams = new URLSearchParams({
              minutesPerDay: formData.minutesPerDay,
              readingSpeed: formData.readingSpeed,
              months: formData.months,
            }).toString();
  
            const apiURL = `https://read-ranger-2a90b350a47f.herokuapp.com/api/recommend-books-stream?${queryParams}`;
            console.log(apiURL);
  
            const source = new EventSource(apiURL);
  
            source.onopen = () => {
              console.log("SSE connection opened");
            };
  
            source.onerror = (e) => {
              console.error("SSE error:", e);
              setError("Something went wrong with the SSE connection.");
              setIsLoading(false);
              source.close();
            };
  
            source.addEventListener("genre", (e) => {
              try {
                const { books: newBooks } = JSON.parse(e.data);
                setBooks((prevBooks) => [...prevBooks, ...newBooks]);
              } catch (error) {
                console.error("Error parsing genre event:", error);
              }
            });
  
            source.addEventListener("done", (e) => {
              console.log("DONE EVENT =>", e.data);
              setIsComplete(true);
              setIsLoading(false);
              source.close();
            });
  
            setEventSource(source);
  
            return () => {
              source.close();
            };
          }, [formData]);
  
          (0, l.useEffect)(() => {
            let currentIndex = visibleBooks.length;
            const interval = setInterval(() => {
              if (currentIndex < books.length) {
                setVisibleBooks((prev) => [...prev, books[currentIndex]]);
                currentIndex++;
              } else {
                clearInterval(interval);
              }
            }, 300);
  
            return () => clearInterval(interval);
          }, [books]);
  
          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: Number(value) }));
          };
  
          const handleBookSelect = (book) => setSelectedBook(book);
          const handleCloseModal = () => setSelectedBook(null);
  
          return (
            <a.Fragment>
              <style>
                {`
                  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter&display=swap');
  
                  html, body {
                    margin: 0;
                    padding: 0;
                    background: #0e1111;
                    font-family: 'Inter', sans-serif;
                  }
  
                  @keyframes fadeInUp {
                    0% {
                      opacity: 0;
                      transform: translateY(15px);
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
  
                  .fadeInUp {
                    animation: fadeInUp 0.8s ease forwards;
                  }
  
                  h1, h2, h3, .font-heading {
                    font-family: 'Playfair Display', serif !important;
                  }
                `}
              </style>
              <div className="min-h-screen w-full bg-gray-900 text-gray-100 flex flex-col items-center p-8">
                <h1 className="mt-2 mb-6 text-4xl font-heading font-bold drop-shadow-lg">
                  Reading Time Calculator
                </h1>
                <div className="bg-gray-800 bg-opacity-90 rounded-xl p-6 w-full max-w-xl shadow-2xl border border-gray-700">
                  <form className="space-y-4">
                    <div>
                      <label className="block mb-2 font-heading font-semibold text-gray-100">
                        If I read
                      </label>
                      <select
                        name="minutesPerDay"
                        value={formData.minutesPerDay}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="15">☕️ 15 minutes/day</option>
                        <option value="30">🌅 30 minutes/day</option>
                        <option value="45">🎯 45 minutes/day</option>
                        <option value="60">⭐️ 1 hour/day</option>
                        <option value="90">🌟 1.5 hours/day</option>
                        <option value="120">🏆 2 hours/day</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-heading font-semibold text-gray-100">
                        at
                      </label>
                      <select
                        name="readingSpeed"
                        value={formData.readingSpeed}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="150">🐢 Slow (150 wpm)</option>
                        <option value="200">👣 Average (200 wpm)</option>
                        <option value="250">🏃 Fast (250 wpm)</option>
                        <option value="300">⚡ Very Fast (300 wpm)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-heading font-semibold text-gray-100">
                        speed for
                      </label>
                      <select
                        name="months"
                        value={formData.months}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="1">🌱 1 month</option>
                        <option value="2">🌿 2 months</option>
                        <option value="3">🌳 3 months</option>
                        <option value="6">🌴 6 months</option>
                        <option value="12">🎄 12 months</option>
                      </select>
                    </div>
                  </form>
                  {error && (
                    <div className="mt-4 text-red-400 text-sm font-bold">{error}</div>
                  )}
                </div>
                <div className="mt-8 w-full max-w-5xl text-center">
                  {isLoading && (
                    <p className="text-purple-400 mb-2 italic font-semibold">
                      Loading recommendations...
                    </p>
                  )}
                  {isComplete && (
                    <p className="text-green-400 mb-2 font-semibold">Recommendations complete!</p>
                  )}
                  <h2 className="text-2xl font-heading text-gray-100 mb-6 mt-2">
                    I have found {books.length} book(s) total
                  </h2>
                  <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-start justify-items-center transition-opacity duration-300 ${isLoading ? "opacity-90" : "opacity-100"}`}>
                    {visibleBooks.map((book, index) =>
                      book?.imageLinks?.thumbnail ? (
                        <div
                          key={index}
                          onClick={() => handleBookSelect(book)}
                          className="w-32 h-48 cursor-pointer hover:scale-105 transition-transform hover:z-10 relative fadeInUp bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600 flex items-center justify-center"
                        >
                          <img
                            src={book.imageLinks.thumbnail}
                            alt={book.title}
                            className="object-cover w-full h-full rounded-lg"
                          />
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
                {selectedBook && (
                  <t.lG
                    open={!!selectedBook}
                    onClose={handleCloseModal}
                    className="relative z-50"
                  >
                    <div className="fixed inset-0 bg-black/40" aria-hidden="true"></div>
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                      <t.lG.Panel className="mx-auto max-w-lg w-full bg-gray-800 text-gray-100 rounded-xl p-6 shadow-2xl relative border border-gray-700 overflow-hidden">
                        <t.lG.Title className="text-2xl font-heading mb-4 text-purple-300">
                          {selectedBook.title}
                        </t.lG.Title>
                        <p className="mb-2 text-sm text-gray-300 font-semibold">
                          By: {selectedBook.authors.join(", ")}
                        </p>
                        <div className="max-h-[60vh] overflow-y-auto pr-1">
                          {selectedBook.imageLinks?.thumbnail ? (
                            <img
                              src={selectedBook.imageLinks.thumbnail}
                              alt={selectedBook.title}
                              className="w-full h-auto mb-4 rounded-md shadow"
                            />
                          ) : (
                            <div className="w-full h-44 bg-gray-700 flex items-center justify-center mb-4">
                              No Image
                            </div>
                          )}
                          <p className="whitespace-pre-line text-gray-200 leading-relaxed">
                            {selectedBook.description || "No description available."}
                          </p>
                        </div>
                        <button
                          onClick={handleCloseModal}
                          className="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-transform transform hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </t.lG.Panel>
                    </div>
                  </t.lG>
                )}
              </div>
            </a.Fragment>
          );
        }
      },
      (e) => {
        const n = (n) => e(e.s = n);
        e.O(0, [110, 441, 517, 358], () => n(8860)), _N_E = e.O();
      },
    },
  ]);
  