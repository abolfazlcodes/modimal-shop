/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-function */
// Compund component steps:
import {
  ClassAttributes,
  Context,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { PiArrowDown, PiArrowUp } from "react-icons/pi";

// 1. Create the context
type DisclosureContextProps = Context<{
  openHeaderName: string;
  openDisclosureHandler: Dispatch<SetStateAction<string>>;
  closeDisclosureHandler: () => void;
}>;

const DisclosureContext: DisclosureContextProps = createContext({
  openHeaderName: "",
  closeDisclosureHandler() {},
  openDisclosureHandler(_) {},
});

interface DisclosureProps {
  children: React.ReactNode;
}

interface DisclosureComponent extends React.FC<DisclosureProps> {
  Header: typeof Header;
  Content: typeof Content;
}

const Disclosure: DisclosureComponent = ({ children }: DisclosureProps) => {
  const [openHeaderName, setOpenHeaderName] = useState<string>("");

  const openDisclosureHandler = setOpenHeaderName;

  const closeDisclosureHandler = () => setOpenHeaderName("");

  return (
    <DisclosureContext.Provider
      value={{
        openHeaderName,
        openDisclosureHandler,
        closeDisclosureHandler,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
};

// 2. Create children
interface HeaderProps {
  children: ReactNode;
  headerOpenName: string;
  className?: string;
}

function Header({
  children,
  headerOpenName,
  className,
}: HeaderProps): ReactNode {
  const { openDisclosureHandler, closeDisclosureHandler, openHeaderName } =
    useContext(DisclosureContext);

  let isOpen = headerOpenName === openHeaderName;

  function handleOpenDisclosure() {
    if (!isOpen) {
      openDisclosureHandler(headerOpenName);
      isOpen = true;
    } else {
      closeDisclosureHandler();
      isOpen = false;
    }
  }

  return (
    <div
      data-testid="header-element"
      className={`flex ${
        !isOpen && "border-b border-b-[#404040]"
      } items-center justify-between m-auto cursor-pointer ${className}`}
      onClick={handleOpenDisclosure}
    >
      {children}
      {isOpen ? <PiArrowUp /> : <PiArrowDown />}
    </div>
  );
}

interface ContentProps {
  children: ReactElement;
  contentName: string;
  className?: ClassAttributes<HTMLElement>;
}

function Content({
  children,
  contentName,
  className,
}: ContentProps): ReactNode {
  const { openHeaderName } = useContext(DisclosureContext);

  if (contentName !== openHeaderName) return null;

  return cloneElement(children, {
    class: className,
    "data-testid": "content-element",
  });
}

// 3. Connect components
Disclosure.Header = Header;
Disclosure.Content = Content;

export default Disclosure;
