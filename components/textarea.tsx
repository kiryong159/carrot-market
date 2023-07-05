import React from "react";

interface textareaProps {
  label: string;
  areaTitle: string;
  placeholder?: string;
  [key: string]: any;
}

function TextArea({ label, areaTitle, placeholder, ...rest }: textareaProps) {
  return (
    <>
      <label
        htmlFor={label}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {areaTitle}
      </label>
      <textarea
        id={label}
        rows={4}
        {...rest}
        placeholder={placeholder}
        className=" w-full resize-none appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
      />
    </>
  );
}
export default TextArea;
