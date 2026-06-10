import { useState } from "react";

const gifts = [
  { name: "My love", emoji: "🫶​", hint: "You will need It for ever", desc: "hehe" },
  { name: "rage Bait", emoji: "🫵​", hint: "mi mimimi mimi mi", desc: "hahaha" },
  { name: "Creoles", emoji: "​💎​", hint: "You will be shiny with It. It's something you broke", desc: "slayyy" },
];

export default function GiftGuessing() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const gift = gifts[current];

  function next() {
    setFlipped(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % gifts.length);
    }, 300);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 gap-6">

      <div className="flex items-center justify-between w-64">
        <p className="text-base font-medium text-gray-700">Guess the gift</p>
        <span className="text-sm font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-lg">
          {current + 1} / {gifts.length}
        </span>
      </div>

      <div
        className="w-64 h-64 cursor-pointer"
        style={{ perspective: "800px" }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front — hint */}
          <div
            className="absolute inset-0 bg-white rounded-2xl border border-gray-200 flex flex-col items-center justify-center gap-4 p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.4rem", lineHeight: "1.5", color: "#555", textAlign: "center" }}
            >
              {gift.hint}
            </p>
            <p className="text-xs text-gray-400">tap to reveal</p>
          </div>

          {/* Back — answer */}
          <div
            className="absolute inset-0 bg-white rounded-2xl border border-gray-200 flex flex-col items-center justify-center gap-2 p-4"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <span className="text-6xl">{gift.emoji}</span>
            <p className="text-lg font-semibold text-gray-800">{gift.name}</p>
            <p className="text-sm text-gray-500 text-center">{gift.desc}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {gifts.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i <= current ? "bg-purple-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <button
        onClick={next}
        className="px-6 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 active:scale-95 transition-all duration-100 text-sm font-medium"
      >
        {current === gifts.length - 1 ? "🎉 Restart" : "Next →"}
      </button>

      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap" rel="stylesheet" />
    </div>
  );
}