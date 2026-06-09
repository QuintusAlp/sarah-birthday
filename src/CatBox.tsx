import { useState } from "react";
import { useNavigate } from "react-router-dom";

import cat1 from "./assets/cat_dance.gif";
import cat2 from "./assets/cat_laugh_finger.gif";
import cat3 from "./assets/cat_blue_laugh.gif";

function GiftButton({ index, setIndex, move, setMove }: { index: number; setIndex: (value: number | ((prev: number) => number)) => void; move: boolean; setMove: (value: boolean | ((prev: boolean) => boolean)) => void }) {
  const navigate = useNavigate();

  const imagesCount = 3;

  const handleClick = () => {
    if (index !== imagesCount - 1) {
      setIndex((prev: number) => prev + 1);
      setMove((prev: boolean) => !prev);
    } else {
      navigate("/giftGuessing");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-4 py-2 bg-blue-500 text-white rounded
        transition-transform duration-100
        ${move ? "translate-x-40 translate-y-10" : "translate-x-0"}
      `}
    >
      Claim my gift
    </button>
  );
}

function CatBox() {
  const images = [cat1, cat2, cat3];
  const text_content = ["It's your birthday!", "nice try", "Mouehehe"];


  const [index, setIndex] = useState(0);
  const [move, setMove] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-300">
        <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center">

            <div className="flex flex-col items-center">
            <img
                src={images[index]}
                alt="animation"
                className="w-64 h-64 object-contain rounded-lg"
            />
                <h2 className="m-1.5 font-serif text-xl">{text_content[index]}</h2>

            <GiftButton
                index={index}
                setIndex={setIndex}
                move={move}
                setMove={setMove}
            />
            </div>
        </div>
    </div>
  );
}

export default CatBox;