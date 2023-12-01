import { MutableRefObject, useEffect, useRef } from "react";

export function useOutsideClick(
  handler: () => void,
  listenToCapture: boolean = true,
): { ref: MutableRefObject<HTMLDivElement | null> } {
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (ref.current && !ref.current?.contains(e?.target as Node)) {
        handler();
      }
    };

    // ? as a third argument we give to both true in order to tell just consider the capturing phase of events and not bubbling
    document.addEventListener("click", handleClickOutside, listenToCapture);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [handler, listenToCapture]);

  return { ref };
}
