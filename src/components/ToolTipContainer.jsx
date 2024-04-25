import tooltip_data from "../tooltip_data.json";

import "./styles/ToolTipContainer.css";

export default function ToolTipContainer({ title, setTooltip_title }) {
  const desc = tooltip_data[title];
  return (
    <div className="tooltip_container">
      <div className="tooltip_wrapper">
        {desc}
        <button
          className="tooltip_close_btn"
          onClick={() => {
            setTooltip_title("");
          }}
        >
          close
        </button>
      </div>
    </div>
  );
}
