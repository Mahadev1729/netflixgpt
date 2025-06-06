import { useState } from "react";
import { useSelector } from "react-redux";
import lang from "../utilis/languageConstant";

const GptSearchBar = () => {
  const userLang = useSelector((store) => store.config.lang);
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      const response = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command-r", 
          prompt: query,
          max_tokens: 100,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      console.log("Cohere Response:", data.generations?.[0]?.text);
      // Optionally set it in state and display on UI
    } catch (err) {
      console.error("Cohere API Error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center pt-[12%] px-4">
      <form
        className="flex items-center w-full max-w-2xl bg-white rounded-full shadow-lg overflow-hidden"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-6 py-4 text-lg text-gray-700 focus:outline-none placeholder-gray-500"
          placeholder={lang[userLang].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 text-lg transition-all duration-200"
        >
          {lang[userLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
