"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "../../api/fetch";
import Button from "../../components/button";
import Link from "next/link";

export default function Page() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [description, setDescription] = useState<string>();

  const loadTarot = useCallback(async () => {
    const response = await api.tarot.execute();
    if (response.ok && response.body) {
      setKeywords(response.body.keywords);
      setDescription(response.body.description);
    }
  }, []);

  useEffect(() => {
    loadTarot();
  }, [loadTarot]);

  return (
    <div className="grid grid-rows-[1fr_auto_1fr] full-size min-h-screen items-center justify-items-center font-flower-island text-[#EBEBEB] text-base">
      <div></div>
      <div className="flex-center flex-col bg-result-card-img bg-black bg-cover bg-center bg-no-repeat w-result-image-width h-result-image-height px-6 py-12">
        <div className="uppercase text-[#A3F2FF] text-white-bold-stroke text-xl">
          result
        </div>
        <div className="w-5 border-l-2 border-white rotate-90"></div>
        <div className="flex flex-col w-full overflow-y-hidden gap-7">
          <div className="flex flex-col flex-center">
            <div className="text-[#D2F9FF] text-cyan-stroke text-lg capitalize">
              keywords
            </div>
            <ul className="flex flex-row [&>li+li]:before:content-[','] text-gray-stroke">
              {keywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </ul>
          </div>
          <div className="flex-center flex-col w-full overflow-y-hidden">
            <div className="text-[#D2F9FF] text-cyan-stroke text-lg capitalize">
              advices
            </div>
            <p className="flex flex-col gap-3 w-full overflow-x-clip overflow-y-scroll whitespace-break-spaces text-center text-white h-result-description-height text-white-stroke">
              {description}
              <Link href={"/"}>돌아가기</Link>
            </p>
          </div>
        </div>
      </div>
      <Button>SHARE</Button>
    </div>
  );
}
