import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface PathBtn {
  icon?: any;
  onPath: string;
  className?: boolean | string;
  children?: React.ReactNode;
}

export default function PathButton(props: PathBtn) {
  const router = useRouter();
  const pathname = usePathname();
  const { icon, onPath, className, children } = props;
  return (
    <button
      onClick={() => router.push(onPath)}
      className={`${
        pathname === onPath && "text-white bg-black hover:bg-black/100"
      } text-black hover:cursor-pointer hover:bg-black/15 p-1.5 rounded-full ${className}`}
    >
      {icon} {children}
    </button>
  );
}
