interface IconButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

type TExtendIconButtonProps = IconButtonProps &
  React.HTMLProps<HTMLSpanElement>;

const IconButton: React.FC<TExtendIconButtonProps> = ({
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <span
      {...props}
      onClick={onClick}
      className={`flex h-6 w-6 cursor-pointer items-center justify-center text-2xl text-[#404040] ${
        className || ""
      }`}
    >
      {children}
    </span>
  );
};

export default IconButton;
