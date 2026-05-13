import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "green" | "outline" | "white";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export default function Button({ children, variant = "green", onClick, style }: ButtonProps) {
  const variantClass =
    variant === "green" ? "btn-green" :
    variant === "outline" ? "btn-outline" : "";

  const whiteStyle: CSSProperties =
    variant === "white" ? { background: "#fff", color: "var(--green-800)", fontWeight: 700 } : {};

  return (
    <button
      className={`btn ${variantClass}`}
      style={{ ...whiteStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
