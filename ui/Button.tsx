import Link from "next/link";
import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  href?: string;
  type?: "primary" | "secondary";
  size?: "square" | "small" | "medium" | "large";
  customStyles?: CSSStyleValue;
}

const Button: React.FC<IButtonProps> = ({
  children,
  href,
  size = "large",
  type = "primary",
  customStyles,
}) => {
  const sizeStyles = `${
    size === "large"
      ? "w-40"
      : size === "medium"
        ? "w-20"
        : size === "small"
          ? "w-17"
          : "w-10"
  }`;

  const typeStyles = `${
    type === "primary"
      ? "bg-white text-black"
      : "bg-miniAddBg text-white font-bold tracking-wide"
  }`;

  if (href) {
    return (
      <button
        className={`${sizeStyles} ${customStyles} ${typeStyles} h-10 flex items-center justify-center text-base`}
      >
        <Link href="/products">{children}</Link>
      </button>
    );
  }

  return (
    <button
      className={`${sizeStyles} ${customStyles} ${typeStyles} h-10 flex items-center justify-center text-base`}
    >
      {children}
    </button>
  );
};

export default Button;
