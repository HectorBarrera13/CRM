import React from "react";
import { useRef } from "react";
import clsx from "clsx"; // opcional pero recomendado

type Size = "chico" | "mediano" | "grande";

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: Size;
};

const sizeClasses: Record<Size, React.CSSProperties> = {
  chico: { height: "40vh", maxWidth: "100vw" },
  mediano: { height: "60vh", maxWidth: "100vw" },
  grande: { height: "80vh", maxWidth: "100vw" },
};

function Card({ children, className = "", size = "mediano" }: Props) {
  const nodeRef = useRef(null); // 🔧 crea un ref

  return (
    <div
      ref={nodeRef} // 🔧 úsalo aquí también
      className={clsx("card shadow-sm p-3", className)}
      style={{ borderRadius: "1rem", ...sizeClasses[size] }}
    >
      {children}
    </div>
  );
}

export default Card;
