import { useState } from "react";
import "./styles/ToolTipElement.css";
import { useContext } from "react";
import { ToolTipContext } from "../App";

export default function ToolTipElement({ title }) {
  const { setTooltip_title } = useContext(ToolTipContext);
  return (
    <>
      {" "}
      <span onClick={() => setTooltip_title(title)} className="tooltip_title">
        {title}
      </span>{" "}
    </>
  );
}
