import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div className="bg-blue-50 py-16 px-6 sm:px-16 xl:px-24 text-center rounded-2xl shadow-sm mt-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Never Miss a Blog!
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Subscribe to get the latest blog updates, tutorials, and insights directly in your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
