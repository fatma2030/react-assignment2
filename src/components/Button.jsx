import React from "react";
import "./Button.css";

/**
 * Reusable Button component
 * Props:
 *  - text: string -> label shown on the button
 *  - onClick: function -> click handler
 *  - variant: "primary" | "secondary" | "danger"
 *  - disabled: boolean (optional)
 */
function Button({ text, onClick, variant = "primary", disabled = false }) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
