'use client';

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">About BitLinks</h1>
        <p className="text-gray-700 text-lg mb-4">
          BitLinks is a simple and fast URL shortener tool that helps you transform long, ugly URLs into short, shareable links.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Whether you're sharing links on social media, in emails, or just want to make things look cleaner, BitLinks gets the job done with no hassle.
        </p>
        <p className="text-gray-700 text-lg">
          We prioritize user-friendliness, speed, and privacy. No login required. Just paste, shorten, and share.
        </p>
      </div>
    </div>
  );
};

export default About;
