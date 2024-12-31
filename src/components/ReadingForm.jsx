'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const globalStyle = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter&display=swap');

/* Reset all margins and paddings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Essential body/html resets for full viewport coverage */
html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  font-family: 'Inter', sans-serif;
}

/* Fix iOS viewport height issues */
:root {
  --vh: 100%;
}

/* Root element styles */
#root, main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #141e33;
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

/* Hide scrollbar but keep functionality */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
`;

export default function ReadingForm() {
  const [formData, setFormData] = useState({
    minutesPerDay: 60,
    readingSpeed: 300,
    months: 3,
  });

  const [eventSource, setEventSource] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  useEffect(() => {
    if (eventSource) {
      eventSource.close();
    }

    setAllBooks([]);
    setDisplayedBooks([]);
    setDone(false);
    setError(null);
    setFetching(true);

    const qs = new URLSearchParams({
      minutesPerDay: formData.minutesPerDay,
      readingSpeed: formData.readingSpeed,
      months: formData.months,
    }).toString();

    const url = `https://read-ranger-2a90b350a47f.herokuapp.com/api/recommend-books-stream?${qs}`;
    const es = new EventSource(url);

    es.onopen = () => console.log('SSE connection opened');
    
    es.onerror = (evt) => {
      console.error('SSE error:', evt);
      setError('Something went wrong with SSE connection.');
      setFetching(false);
      es.close();
    };

    es.addEventListener('genre', (evt) => {
      try {
        const { books } = JSON.parse(evt.data);
        setAllBooks((prev) => [...prev, ...books]);
      } catch (err) {
        console.error('Error parsing genre event:', err);
      }
    });

    es.addEventListener('done', (evt) => {
      setDone(true);
      setFetching(false);
      es.close();
    });

    setEventSource(es);
    return () => es.close();
  }, [formData]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <>
      <style>{globalStyle}</style>

      {/* Main container - Full height, no scrolling */}
      <div className="fixed inset-0 bg-[#141e33] text-gray-100">
        {/* Scrollable content area */}
        <div className="h-full w-full overflow-y-auto hide-scrollbar">
          <div className="min-h-full w-full flex flex-col items-center px-4 py-6">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-6">
              Reading Time Calculator
            </h1>

            {/* Form Container */}
            <div className="w-full max-w-sm bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 font-heading font-semibold">
                    If I read
                  </label>
                  <select
                    name="minutesPerDay"
                    value={formData.minutesPerDay}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500"
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
                  <label className="block mb-2 font-heading font-semibold">
                    at
                  </label>
                  <select
                    name="readingSpeed"
                    value={formData.readingSpeed}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="150">🐌 Slow (150 wpm)</option>
                    <option value="200">👣 Average (200 wpm)</option>
                    <option value="250">🏃 Fast (250 wpm)</option>
                    <option value="300">⚡ Very Fast (300 wpm)</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-heading font-semibold">
                    speed for
                  </label>
                  <select
                    name="months"
                    value={formData.months}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="1">🌱 1 month</option>
                    <option value="2">🌿 2 months</option>
                    <option value="3">🌲 3 months</option>
                    <option value="6">🌳 6 months</option>
                    <option value="12">🎄 12 months</option>
                  </select>
                </div>
              </form>

              {error && (
                <div className="mt-4 text-red-400 text-sm font-bold">
                  {error}
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="w-full max-w-4xl mt-8 text-center">
              <h2 className="text-xl sm:text-2xl font-heading mb-6">
                I had found {allBooks.length} book(s) total
              </h2>

              {/* Book Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {displayedBooks.map((book, idx) =>
                  book?.imageLinks?.thumbnail ? (
                    <div
                      key={idx}
                      onClick={() => setSelectedBook(book)}
                      className="aspect-[2/3] cursor-pointer hover:scale-105 transition-transform fadeInUp bg-gray-800/50 rounded-lg overflow-hidden shadow-lg border border-gray-700/50"
                    >
                      <img
                        src={book.imageLinks.thumbnail}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-gray-800 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 max-h-[90vh] overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-heading text-purple-300">
                  {selectedBook.title}
                </h3>
                <p className="text-sm text-gray-300 font-semibold mt-1">
                  By: {selectedBook.authors.join(', ')}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto hide-scrollbar">
                {selectedBook.imageLinks?.thumbnail && (
                  <img
                    src={selectedBook.imageLinks.thumbnail}
                    alt={selectedBook.title}
                    className="w-full h-auto mb-4 rounded-md shadow"
                  />
                )}

                <p className="whitespace-pre-line text-gray-200 leading-relaxed">
                  {selectedBook.description || 'No description available.'}
                </p>
              </div>

              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-transform hover:scale-110"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}