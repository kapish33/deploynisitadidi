import React, { useState } from "react";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUnsubscribe = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Replace with your actual API endpoint
      const baseURL = `https://script.google.com/macros/s/AKfycbxGXA6tPZS7CLaey_WykrPxOx5-zqms4J8xjRNeb_D1fdC6xrjDg1luaE5T6nJrCn_z/exec?email=`;
      const response = await fetch(baseURL + email);
      const res = await response.json();
      console.log("response",res)

      if (res.status === 'success') {
        setMessage(res.message);
      } else {
        setMessage(res.message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center pt-40 p-4">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        Unsubscribe from Emails
      </h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full rounded-lg border border-gray-300 p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleUnsubscribe}
        className="w-full rounded-lg bg-red-500 px-4 py-2 text-lg font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Unsubscribe
      </button>
      {message && (
        <p className="mt-4 text-center text-lg text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default Unsubscribe;
