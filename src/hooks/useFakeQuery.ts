import { useEffect, useState } from "react";

export function useFakeQuery(duration:number) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const totalDuration = duration;
      const startTime = performance.now();

      const updateProgress = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const currentProgress = Math.min((elapsed / totalDuration) * 100, 100);
        setProgress(currentProgress);

        if (currentProgress < 100) {
          requestAnimationFrame(updateProgress);
        } else {
          setIsLoading(false);
          setProgress(100); // Ensure progress reaches 100% at the end
        }
      };

      requestAnimationFrame(updateProgress);
    };

    void fetchData();
  }, [duration]);
  return { progress, isLoading };
}
