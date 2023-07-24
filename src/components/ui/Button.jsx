import React from "react";
import "./Button.css";
import Link from "next/link";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["latin"], weight: "700" });

const STYLES = ["btn--primary", "btn--outline", "btn--outline-rev"];

const SIZES = [
  "btn--medium",
  "btn--large",
  "btn--medium-rev",
  "btn--large-rev",
];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  href,
  enabled = true,
  onlyButton = false,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return onlyButton ? (
    <button
      disabled={!enabled}
      className={`${pt_sans.className} btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  ) : (
    <Link
      href={href}
      className="btn-mobile"
      style={enabled ? null : { pointerEvents: "none" }}
    >
      <button
        disabled={!enabled}
        className={`${pt_sans.className} btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
