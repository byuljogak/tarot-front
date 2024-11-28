"use client";

import { useCallback, useRef, useState } from "react";
import Button from "../../components/button";
import Message from "../../components/message";
import Card from "@/components/card/card";

export default function Page() {
  const cardCount = 21;
  const [cardSelected, setCardSelected] = useState(false);
  const [animation, setAnimation] = useState(false);

  const cardsRef = useRef<HTMLDivElement>(null);
  const prevCardRef = useRef<HTMLImageElement>(null);
  const currentCardRef = useRef<HTMLImageElement>(null);

  const activateCardSelected = useCallback(() => {
    if (prevCardRef.current) {
      const keyframes = [
        { transform: "scale(1)" },
        { transform: "scale(1.2)" },
      ];
      const options = {
        duration: 1000,
        easing: "ease-in-out",
      };
      setAnimation(true);
      prevCardRef.current.animate(keyframes, options);
      prevCardRef.current.style.transform = "scale(1.2)";
      setTimeout(() => {
        setAnimation(false);
      }, options.duration);
    }
    setCardSelected(true);
  }, []);

  const deactivateCardSelected = useCallback(() => {
    if (prevCardRef.current) {
      const keyframes = [
        { transform: "scale(1.2)" },
        { transform: "scale(1)" },
      ];
      const options = {
        duration: 1000,
        easing: "ease-in-out",
      };
      setAnimation(true);
      prevCardRef.current.animate(keyframes, options);
      prevCardRef.current.style.transform = "scale(1)";
      setTimeout(() => {
        setAnimation(false);
      }, options.duration);
    }
    setCardSelected(false);
  }, []);

  const moveLeft = useCallback(() => {
    if (cardsRef.current && prevCardRef.current && currentCardRef.current) {
      const cardsKeyframes = [
        { transform: "translateX(0)" },
        { transform: "translateX(calc(-120px - 1.25rem))" }, // card width + gap
      ];
      const prevCardKeyframes = [
        { transform: cardSelected ? "scale(1.2)" : "cale(1)" },
        { transform: "scale(1)" },
      ];
      const currentCardKeyframes = [
        { transform: "scale(1)" },
        { transform: cardSelected ? "scale(1.2)" : "cale(1)" },
      ];
      const options = {
        duration: 1000,
        easing: "ease-in-out",
      };
      setAnimation(true);
      cardsRef.current.animate(cardsKeyframes, options);
      prevCardRef.current.animate(prevCardKeyframes, options);
      currentCardRef.current.animate(currentCardKeyframes, options);
      setTimeout(() => {
        setAnimation(false);
      }, options.duration);
    }
  }, [cardSelected]);

  return (
    <div
      className="grid grid-rows-[1fr_4fr_1fr] items-center w-full pt-20 pb-20 gap-16 font-flower-island overflow-x-hidden"
      onClick={() => {
        // prevent multiple clicks
        if (!animation) {
          // if card is selected, move to the left
          if (cardSelected) {
            moveLeft();
          } else {
            // if card is not selected, toggle selected
            activateCardSelected();
          }
        }
      }}
    >
      <div>
        {cardSelected ? (
          <Message message="이 카드로 선택하시겠습니까?\n" />
        ) : (
          <Message message="화면을 눌러 카드를 선택을 시작해주세요." />
        )}
      </div>
      <div className="flex flex-row flex-center gap-5 py-5" ref={cardsRef}>
        {Array.from({ length: (cardCount - 1) / 2 }).map((_, index) => (
          <Card key={index} width={120} isMini />
        ))}
        <Card
          ref={prevCardRef}
          width={120}
          style={{
            transform: cardSelected ? "scale(1.2)" : "scale(1)",
          }}
          isMini
        />
        <Card ref={currentCardRef} width={120} isMini />
        {Array.from({ length: (cardCount - 2) / 2 }).map((_, index) => (
          <Card key={index} width={120} isMini />
        ))}
      </div>
      <div className="w-full">
        {cardSelected && (
          <div className="flex flex-row w-full justify-around">
            <Button href={"/result"}>YES</Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                deactivateCardSelected();
              }}
            >
              NO
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
