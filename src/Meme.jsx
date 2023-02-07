import React, { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  });

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setMeme((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  return (
    <div className="mx-auto min-h-full w-[550px] bg-white p-2">
      <div className=" pt-8 text-center">
        <div className="space-x-6">
          <input
            type="text"
            className="rounded-md border border-gray-400 p-1"
            onChange={handleChange}
            value={meme.topText}
            name="topText"
            placeholder="Texto Superior"
          />
          <input
            type="text"
            className="rounded-md border border-gray-400 p-1"
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
            placeholder="Texto Inferior"
          />
        </div>
        <div className="mt-6">
          <button
            onClick={getMemeImage}
            className="h-[40px] w-[477px] rounded-md bg-gradient-to-r from-fuchsia-900 to-purple-600 text-white drop-shadow-md"
          >
            Get a new Meme image
            <svg
              className="ml-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 21q-.425 0-.713-.288Q5 20.425 5 20v-1H3q-.825 0-1.412-.587Q1 17.825 1 17V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v11q0 .825-.587 1.413Q21.825 19 21 19h-2v1q0 .425-.288.712Q18.425 21 18 21Zm-3-4h18V6H3v11Zm2-2h14l-4.5-6l-3.5 4.5l-2.5-3Zm-2 2V6v11Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative">
        <img className="mx-auto mt-2" src={meme.randomImage} />
        <h2 className="meme--text absolute inset-0 flex justify-center text-3xl font-semibold uppercase text-white">
          {meme.topText}
        </h2>
        <h2 className="meme--text absolute inset-0 flex items-end justify-center text-3xl font-semibold uppercase text-white">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}

export default Meme;
