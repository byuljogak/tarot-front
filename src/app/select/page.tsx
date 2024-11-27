"use client";

import { useState } from "react";
import Cards from "../../components/card/cards";
import Button from "../../components/button";
import Message from "../../components/message";

export default function Page() {
  const [cardSelected, setCardSelected] = useState(false);

  return (
    <div className="grid grid-rows-[1fr_2fr_1fr] items-center justify-items-center w-full min-h-screen pt-20 pb-20 gap-16 font-flower-island">
      <div>
        {cardSelected && <Message message="이 카드로 선택하시겠습니까?" />}
      </div>
      <Cards cardSelected={cardSelected} setCardSelected={setCardSelected} />
      <div className="w-full">
        {cardSelected && (
          <div className="flex flex-row w-full justify-around">
            <Button href={"/result"}>YES</Button>
            <Button onClick={() => setCardSelected(false)}>NO</Button>
          </div>
        )}
      </div>
    </div>
  );
}
