import { useEffect, useState } from "react";

export default function useTransition(transitioning: boolean) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (transitioning) {
      setIsComplete(false);
    }
  }, [transitioning]);

  const canRender = transitioning || isComplete;

  const handleTransitionEnd = () => {
    setIsComplete(!transitioning);
  };

  return [canRender, handleTransitionEnd];
}
