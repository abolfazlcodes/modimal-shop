import { createPortal } from "react-dom";

const Overlay = () => {
  return createPortal(
    <div
      data-testid="overlay-element"
      className="absolute left-0 top-0 h-full w-full z-[5] bg-gray-600 opacity-20 overflow-y-auto"
    ></div>,
    document.body,
  );
};

export default Overlay;
