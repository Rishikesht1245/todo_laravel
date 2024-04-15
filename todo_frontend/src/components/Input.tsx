import { ChangeEventHandler, FocusEventHandler } from "react";

const Input = ({
  edit = false,
  name,
  type,
  label,
  onChange,
  onBlur,
  value,
  className = "",
  error,
  touched,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {edit && (
        <label htmlFor={name} className="text-label">
          {label}*
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={`${name == "confirmPassword" ? "Renter" : "Enter"} your ${name == "confirmPassword" ? "password" : name}`}
        className={`${className} w-full border border-gray-100 p-3 focus:outline-cyan-300 rounded-md shadow-sm`}
      />
      {touched && error ? (
        <span className="text-red-600 text-sm font-medium ml-1">{error}</span>
      ) : null}
    </div>
  );
};

interface InputProps {
  edit?: boolean;
  name: string;
  type: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  value: string;
  className?: string;
  error?: string;
  touched?: boolean;
}

export default Input;
