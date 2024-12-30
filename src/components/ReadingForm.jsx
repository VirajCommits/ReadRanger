'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';

/*
  Inline CSS for fade/slide animation, fonts, and 
  removing default margins so there's no white outer area.
*/
const globalStyle = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter&display=swap');

/* Reset margins, etc. */
html, body {
  margin: 0;
  padding: 0;
  background: #0e1111; /* Full-page dark background */
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

/* Headings use "Playfair Display" for a distinctive style */
h1, h2, h3, .font-heading {
  font-family: 'Playfair Display', serif !important;
}
`;

export default function ReadingForm() {
  const [formData, setFormData] = useState({
    minutesPerDay: 60,
    readingSpeed: 300,
    months: 3,
  });

  // SSE States
  const [eventSource, setEventSource] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  // Modal States
  const [selectedBook, setSelectedBook] = useState(null);

  /* =====================
     SSE Setup
     ===================== */
  useEffect(() => {
    if (eventSource) {
      eventSource.close();
    }

    // Reset states
    setAllBooks([]);
    setDisplayedBooks([]);
    setDone(false);
    setError(null);
    setFetching(true);

    // Build query string
    const qs = new URLSearchParams({
      minutesPerDay: formData.minutesPerDay,
      readingSpeed: formData.readingSpeed,
      months: formData.months,
    }).toString();

    // api/recommend-books-stream?minutesPerDay=60&readingSpeed=300&months=3

    // const url = `http://127.0.0.1:5000/api/recommend-books-stream?${qs}`;
    const url = `https://read-ranger-6nax.vercel.app/api/recommend-books-stream?${qs}`;
    
    console.log(url)
    const es = new EventSource(url);

    es.onopen = () => {
      console.log('SSE connection opened');
    };

    es.onerror = (evt) => {
      console.error('SSE error:', evt);
      setError('Something went wrong with SSE connection.');
      setFetching(false);
      es.close();
    };

    // "genre" event -> accumulate all books
    es.addEventListener('genre', (evt) => {
      try {
        const { books } = JSON.parse(evt.data);
        setAllBooks((prev) => [...prev, ...books]);
      } catch (err) {
        console.error('Error parsing genre event:', err);
      }
    });

    // "done" event
    es.addEventListener('done', (evt) => {
      console.log('DONE EVENT =>', evt.data);
      setDone(true);
      setFetching(false);
      es.close();
    });

    setEventSource(es);

    return () => {
      es.close();
    };
  }, [formData]);

  /* =====================
     Staggered Reveal
     ===================== */
  useEffect(() => {
    let i = displayedBooks.length;
    const interval = setInterval(() => {
      if (i < allBooks.length) {
        setDisplayedBooks((prev) => [...prev, allBooks[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [allBooks]);

  /* ========== Handle Form Changes ========== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  /* ========== Modal ========== */
  const openBookModal = (book) => setSelectedBook(book);
  const closeBookModal = () => setSelectedBook(null);

  return (
    <>
      {/* Inject global styles & keyframes */}
      <style>{globalStyle}</style>

      {/* 
        Full-page container, also dark, 
        so there's no white bar on the edges 
      */}
      <div
        className="
          min-h-screen w-full
          bg-gray-900
          text-gray-100
          flex flex-col items-center
          p-8
        "
      >
        {/* Title */}
        <h1 className="mt-2 mb-6 text-4xl font-heading font-bold drop-shadow-lg">
          Reading Time Calculator
        </h1>

        {/* Dark Container for the Form */}
        <div
          className="
            bg-gray-800
            bg-opacity-90
            rounded-xl
            p-6
            w-full
            max-w-xl
            shadow-2xl
            border
            border-gray-700
          "
        >
          <form className="space-y-4">
            {/* Minutes per day */}
            <div>
              <label className="block mb-2 font-heading font-semibold text-gray-100">
                If I read
              </label>
              <select
                name="minutesPerDay"
                value={formData.minutesPerDay}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-lg
                  bg-gray-700
                  text-gray-100
                  border border-gray-600
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                "
              >
                <option value="15">☕️ 15 minutes/day</option>
                <option value="30">🌅 30 minutes/day</option>
                <option value="45">🎯 45 minutes/day</option>
                <option value="60">⭐️ 1 hour/day</option>
                <option value="90">🌟 1.5 hours/day</option>
                <option value="120">🏆 2 hours/day</option>
              </select>
            </div>

            {/* Reading speed */}
            <div>
              <label className="block mb-2 font-heading font-semibold text-gray-100">
                at
              </label>
              <select
                name="readingSpeed"
                value={formData.readingSpeed}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-lg
                  bg-gray-700
                  text-gray-100
                  border border-gray-600
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                "
              >
                <option value="150">🐌 Slow (150 wpm)</option>
                <option value="200">👣 Average (200 wpm)</option>
                <option value="250">🏃 Fast (250 wpm)</option>
                <option value="300">⚡ Very Fast (300 wpm)</option>
              </select>
            </div>

            {/* Months */}
            <div>
              <label className="block mb-2 font-heading font-semibold text-gray-100">
                speed for
              </label>
              <select
                name="months"
                value={formData.months}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-lg
                  bg-gray-700
                  text-gray-100
                  border border-gray-600
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                "
              >
                <option value="1">🌱 1 month</option>
                <option value="2">🌿 2 months</option>
                <option value="3">🌲 3 months</option>
                <option value="6">🌳 6 months</option>
                <option value="12">🎄 12 months</option>
              </select>
            </div>
          </form>

          {/* Error message */}
          {error && (
            <div className="mt-4 text-red-400 text-sm font-bold">
              {error}
            </div>
          )}
        </div>

        {/* SSE Status + Book Results */}
        <div className="mt-8 w-full max-w-5xl text-center">
          {fetching && (
            <p className="text-purple-400 mb-2 italic font-semibold">
            </p>
          )}
          {done && (
            <p className="text-green-400 mb-2 font-semibold">
            </p>
          )}

          <h2 className="text-2xl font-heading text-gray-100 mb-6 mt-2">
            I have found {allBooks.length} book(s) total
          </h2>

          {/* Book Grid */}
          <div
            className={`
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6
              items-start justify-items-center
              transition-opacity duration-300
              ${fetching ? 'opacity-90' : 'opacity-100'}
            `}
          >
            {displayedBooks.map((book, idx) =>
              book?.imageLinks?.thumbnail ? (
                <div
                  key={idx}
                  onClick={() => openBookModal(book)}
                  className="
                    w-32 h-48
                    cursor-pointer
                    hover:scale-105
                    transition-transform
                    hover:z-10
                    relative
                    fadeInUp
                    bg-gray-700
                    rounded-lg
                    overflow-hidden
                    shadow-lg
                    border border-gray-600
                    flex items-center justify-center
                  "
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
      </div>

      {/* Modal for book details */}
      <Dialog open={!!selectedBook} onClose={closeBookModal} className="relative z-50">
        {/* Dark overlay */}
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

        {/* Modal content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className="
              mx-auto max-w-lg w-full
              bg-gray-800 text-gray-100 
              rounded-xl p-6 
              shadow-2xl relative
              border border-gray-700
              overflow-hidden
            "
          >
            {selectedBook && (
              <>
                <Dialog.Title className="text-2xl font-heading mb-4 text-purple-300">
                  {selectedBook.title}
                </Dialog.Title>

                <p className="mb-2 text-sm text-gray-300 font-semibold">
                  By: {selectedBook.authors.join(', ')}
                </p>

                {/* Scrollable content */}
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
                    {selectedBook.description || 'No description available.'}
                  </p>
                </div>

                <button
                  onClick={closeBookModal}
                  className="
                    absolute top-4 right-4 text-gray-300
                    hover:text-red-400
                    transition-transform 
                    transform hover:scale-110
                  "
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
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
