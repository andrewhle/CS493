'use client'

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  async function fetchData() {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name })
    });

    if (!response.ok) {
      console.error('Failed to fetch:', response.status);
      return;
    }

    const data = await response.json(); 
    setGreeting(data.message);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <main className="flex min-h-screen items-center justify-center flex-col bg-[#121212]">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-lg font-medium text-white">Enter your name!</label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jane Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {greeting && 
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-5" role="alert">
          <div class="flex">
            <span>{greeting}</span>
          </div>
        </div>
      }
    </main>
  );
}
