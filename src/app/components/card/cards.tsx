import { useCallback, useEffect, useRef, useState } from "react";
import Card from "./card";

export default function Cards() {
  const cardCount = 20;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrolling, setScrolling] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [cardSelected, setCardSelected] = useState(false);

  const handleScrollStart = useCallback(() => {
    setScrolling(true);
    setScrolled(false);
    if (scrollRef.current) {
      setStartScrollLeft(scrollRef.current.scrollLeft);
    }
  }, []);

  const handleScrollMove = useCallback(
    (event: MouseEvent) => {
      if (scrolling && scrollRef.current) {
        const diff = event.clientX - startX;
        if (Math.abs(diff) > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
        scrollRef.current.scrollLeft = startScrollLeft - diff;
      }
    },
    [scrolling, startScrollLeft, startX],
  );

  const handleScrollEnd = useCallback(() => {
    setScrolling(false);
    setStartX(0);
  }, []);

  useEffect(() => {
    if (scrolling) {
      window.addEventListener("mousemove", handleScrollMove);
      window.addEventListener("mouseup", handleScrollEnd);
    } else {
      window.removeEventListener("mousemove", handleScrollMove);
      window.removeEventListener("mouseup", handleScrollEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleScrollMove);
      window.removeEventListener("mouseup", handleScrollEnd);
    };
  }, [scrolling, handleScrollMove, handleScrollEnd]);

  return (
    <div
      className="select-none relative flex w-full items-center justify-center h-52"
      ref={containerRef}
      draggable={false}
    >
      <div
        className="flex flex-row absolute h-full gap-4 overflow-x-scroll scrollbar-hide pb-5"
        ref={scrollRef}
        onMouseDown={(event) => {
          setStartX(event.clientX);
          handleScrollStart();
        }}
      >
        {[...Array(cardCount)].map((_, index) => (
          <Card
            key={index}
            onClick={() => {
              if (!scrolled) setCardSelected(true);
            }}
            isMini
          />
        ))}
      </div>
      {cardSelected && (
        <div className="flex absolute w-full items-center justify-center">
          <Card
            onClick={() => setCardSelected(false)}
            width={170}
            height={200}
          />
        </div>
      )}
    </div>
  );
}
