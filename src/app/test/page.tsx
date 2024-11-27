"use client";

import { useRef, useState } from "react";

export default function Page() {
  const card = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const flipOptions = {
    duration: 1000,
    iterations: 1,
  };

  const flip = () => {
    if (card.current) {
      setFlipped(true);
      card.current.style.transform = "rotateY(-180deg)";
      const flipKeyframes = [
        { transform: "rotateY(0deg)" },
        { transform: "rotateY(180deg)" },
      ];
      card.current.animate(flipKeyframes, flipOptions);
    }
  };

  const reset = () => {
    if (card.current) {
      setFlipped(false);
      card.current.style.transform = "rotateY(0)";
      const flipKeyframes = [
        { transform: "rotateY(180deg)" },
        { transform: "rotateY(0deg)" },
      ];
      card.current.animate(flipKeyframes, flipOptions);
    }
  };

  return (
    <div className="flex flex-center w-full min-h-screen">
      <div className="card" ref={card} onClick={flipped ? reset : flip}>
        <div className="card-inner card-inner-front z-10">앞</div>
        <div className="card-inner card-inner-back">뒤</div>
      </div>
    </div>
  );
}
