'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (dummy handler)");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full bg-white p-10 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Contact Us</h1>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-4 p-4 border rounded focus:outline-purple-300"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mb-4 p-4 border rounded focus:outline-purple-300"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          className="w-full mb-6 p-4 border rounded focus:outline-purple-300"
          required
        />

        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition-all duration-200 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
