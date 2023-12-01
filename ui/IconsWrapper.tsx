import { TailwindIntellisenseProps } from "@/types/index.types";

interface IconsWrapperProps {
  children?: React.ReactNode;
  styles?: TailwindIntellisenseProps<"div">;
}

const IconsWrapper: React.FC<IconsWrapperProps> = ({ children, styles }) => {
  return <div className={`flex items-center gap-2 ${styles}`}>{children}</div>;
};

export default IconsWrapper;
