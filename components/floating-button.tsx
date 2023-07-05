import Link from "next/link";
import React from "react";

interface FloatingProps {
  href: string;
  children: React.ReactNode;
}

function FloatingButton({ href, children }: FloatingProps) {
  return (
    <Link
      href={href}
      className="fixed bottom-24 right-5 rounded-full border-transparent bg-orange-400 p-4 text-white shadow-xl transition-all hover:bg-orange-600 sm:right-[15%] md:right-[20%] lg:right-[27%] xl:right-[32%] 2xl:right-[35%] "
    >
      {children}
    </Link>
  );
}
export default FloatingButton;
