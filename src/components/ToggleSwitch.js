import React from "react";

export default function ToggleSwitch({ onToggleChange }) {
  const handleChange = (e) => {
    if (onToggleChange) {
      onToggleChange(e.target.checked);
    }
    if (!e.target.checked) {
      document.getElementById('displayScreen').innerText = "";
    }
  }

  return (
    <div>
      <label className="switch">
        <input id="toggleSwitch" type="checkbox" defaultChecked onChange={handleChange}/>
        <span className="slider"></span>
      </label>
    </div>
  );
}
