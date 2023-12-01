import { PiMagnifyingGlassBold, PiX } from "react-icons/pi";

interface ISearchBoxProps {
  onCloseModal?: () => void; // passed from window in modal component
}

const SearchBox: React.FC<ISearchBoxProps> = ({ onCloseModal }) => {
  return (
    <div
      data-testid="search-box-element"
      className="flex items-center gap-2 border-b border-b-[#adadad] justify-center h-[60%]"
    >
      <PiMagnifyingGlassBold className="text-xl text-[#adadad]" />
      <input
        type="text"
        className="w-full px-2 py-1 focus:outline-none text-[#adadad]"
        placeholder="search"
      />
      <PiX
        className="text-xl cursor-pointer text-[#adadad]"
        onClick={onCloseModal}
      />
    </div>
  );
};

export default SearchBox;
