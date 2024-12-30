"use client";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleChange = (first) => {};
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your URL"
          onChange={e=> setUrl(e.target.value)}
        />
        <input
          type="text"
          value={shortUrl}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your preferred short URL text"
          onChange={e=> setShortUrl(e.target.value)}
        />
        <button className="bg-purple-600 rounded-lg hover:bg-purple-500 shadow-lg p-3 py-1 my-3 text-white">
          Generate
        </button>
      </div>
    </div>
  );
};

export default Shorten;
