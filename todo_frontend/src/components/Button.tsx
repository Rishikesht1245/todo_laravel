import { ReactNode } from "react";

const Button = ({ type, className, children, title, onClick }: ButtonProps) => {
  return (
    <button
    title={title}
      className={`w-full px-4 py-3 text-white font-bold tracking-wider rounded-sm ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  title?:string;
  type: "submit" | "reset" | "button";
  className?: string;
  children : ReactNode;
  onClick ?: () => void;
}

export default Button;
