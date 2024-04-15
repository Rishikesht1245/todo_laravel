import { ReactNode } from "react";

const Button = ({ type, className, children }: ButtonProps) => {
  return (
    <button
      className={`w-full px-4 py-3 text-white font-bold tracking-wider rounded-sm ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  type: "submit" | "reset" | "button";
  className?: string;
  children : ReactNode
}

export default Button;
