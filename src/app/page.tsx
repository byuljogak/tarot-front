"use client";

import Message from "../components/message";
import { useCallback, useState } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const messages = [
    "안녕하세요, 타로마스터입니다.",
    "고민이 있으신가요?\n마음을 가다듬고, 질문을 생각해주세요.",
    "이제 카드를 섞겠습니다. 당신의 오늘에 행운이 깃들길 바랍니다.",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  const nextMessage = useCallback(() => {
    setMessageIndex((prev) => prev + 1);
  }, []);

  return (
    <div
      onClick={
        messageIndex < messages.length ? nextMessage : redirect("/select")
      }
      className="grid grid-rows-[20px_1fr_20px] full-size items-center justify-items-center min-h-screen pt-20 pb-20 gap-16 font-flower-island"
    >
      <main className="flex flex-col w-full gap-8 row-start-2 items-center">
        <Message message={messages[messageIndex]} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
