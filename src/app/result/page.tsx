"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "../api/fetch";
import Image from "next/image";
import Button from "../components/button";

export default function Page() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [description, setDescription] = useState<string>();

  const loadTarot = useCallback(async () => {
    const response = await api.tarot.execute();
    console.log(response);
    if (response.ok && response.body) {
      setKeywords(response.body.keywords);
      setDescription(response.body.description);
    }
    //setKeywords(["keyword1", "keyword2", "keyword3"]);
    //setDescription(
    //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //);
  }, []);

  useEffect(() => {
    loadTarot();
  }, [loadTarot]);

  return (
    <div className="grid grid-rows-[1fr_auto_1fr] full-size min-h-screen items-center justify-items-center font-flower-island text-lg">
      <div></div>
      <div className="relative flex-center w-result-image-width h-result-image-height">
        <div className="flex-center flex-col absolute z-10 gap-7">
          <div className="flex flex-col flex-center">
            <div>Keywords</div>
            <ul className="flex flex-row [&>li+li]:before:content-[',']">
              {keywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </ul>
          </div>
          <p
            className="flex-center w-full overflow-x-clip overflow-y-scroll scrollbar-hide 
            whitespace-break-spaces text-center text-white h-result-description-height
            "
          >
            {description}
          </p>
        </div>
        <Image
          className="bg-black absolute"
          src={"/result_card.png"}
          layout="fill"
          alt=""
        />
      </div>
      <Button>SHARE</Button>
    </div>
  );
}
