import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

export default function Demo() {
  const [article, setArticle] = useState({
    url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Hola ${article.url}`)
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <p className="mb-2 text-xl font-bold text-gray-700">Input URL</p>
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="https://web.whatsapp.com/"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 hover:bg-gray-100 transition ease-in-out"
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  );
}
