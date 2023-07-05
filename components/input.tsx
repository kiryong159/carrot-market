import React from "react";

interface InputProps {
  value: "price" | "phone" | "text";
  label: string;
  placeholder?: string;
  [key: string]: any;
}

function Input({ value, label, placeholder, ...rest }: InputProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {value === "text" ? (
        <div className="flex items-center rounded-md shadow-sm">
          <input
            id={label}
            {...rest}
            type="text"
            placeholder={placeholder}
            className="w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        </div>
      ) : null}
      {value === "price" ? (
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
          <div className="pointer-events-none absolute right-0 flex items-center justify-center pr-3">
            <span className="text-sm text-gray-500">USD</span>
          </div>
        </div>
      ) : null}
      {value === "phone" ? (
        <div className="flex rounded-sm shadow-sm ">
          <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50  px-3 text-sm text-gray-500">
            +82
          </span>
          <input
            id={label}
            type="number"
            className="w-full appearance-none rounded-lg rounded-l-none  border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            required
          />
        </div>
      ) : null}
    </div>
  );
}
export default Input;
