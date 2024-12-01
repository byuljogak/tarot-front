"use client";

import Button from "../../components/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { tarotQuery } from "@/api/query";
import Message from "@/components/message";

export default function Page() {
  const executeTarotQuery = useQuery(tarotQuery.execute);

  if (executeTarotQuery.isError) {
    return (
      <div className="flex-center full-size animate-fade-in">
        <Message message="운명을 해석하는 도중 오류가 발생했습니다." />
      </div>
    );
  }

  if (executeTarotQuery.isSuccess) {
    return (
      <div className="grid grid-rows-[1fr_auto_1fr] full-size items-center justify-items-center font-flower-island text-[#EBEBEB] text-base">
        <div></div>
        <div className="flex-center flex-col bg-result-card-img bg-black bg-cover bg-center bg-no-repeat w-result-image-width h-result-image-height px-6 py-12 animate-fade-in">
          <div className="uppercase text-[#A3F2FF] text-white-bold-stroke text-xl">
            {executeTarotQuery.data?.data.title}
          </div>
          <div className="uppercase text-[#A3F2FF] text-white-bold-stroke text-xl">
            {executeTarotQuery.data?.data.titleKR}
          </div>
          <div className="w-5 border-l-2 border-white rotate-90"></div>
          <div className="flex flex-col w-full overflow-y-hidden gap-7">
            <div className="flex flex-col flex-center">
              <div className="text-[#D2F9FF] text-cyan-stroke text-lg capitalize">
                keywords
              </div>
              <ul className="flex flex-row text-gray-stroke [&>li+li]:before:content-[','] [&>li+li]:before:mr-1">
                {executeTarotQuery.data?.data.keywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>
            </div>
            <div className="flex-center flex-col w-full overflow-y-hidden">
              <div className="text-[#D2F9FF] text-cyan-stroke text-lg capitalize">
                advices
              </div>
              <p className="flex flex-col gap-3 w-full overflow-x-clip overflow-y-scroll whitespace-break-spaces text-center text-white h-result-description-height text-white-stroke">
                {executeTarotQuery.data?.data.advice}
                <Link href={"/"} className="underline underline-offset-4">
                  돌아가기
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Button>SHARE</Button>
      </div>
    );
  }

  return (
    <div className="flex-center full-size animate-pulse">
      <Message message="당신의 운명을 해석중입니다..." />
    </div>
  );
}
