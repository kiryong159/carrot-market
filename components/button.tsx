import { cls } from "@/libs/server/utils";
import React from "react";

interface ButtonProps {
  text: string;
  large?: boolean;
  [key: string]: any;
}

function Button({ large = false, text, onClick, ...rest }: ButtonProps) {
  return (
    <button
      className={cls(
        "w-full rounded-md border border-transparent  bg-orange-500 px-4 font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
    >
      {text}
    </button>
  );
}
export default Button;
