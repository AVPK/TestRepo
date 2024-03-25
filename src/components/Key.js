import React from "react";
import { useEffect } from "react";
export default function Key({ label, sound, systemVolume, soundName }) {
  useEffect(() => {
    sound.volume = systemVolume / 100; // Adjust volume of the key sound relative to the system
    if (document.getElementById("toggleSwitch").checked) {
      document.getElementById("displayScreen").innerText =
        "Volume: " + systemVolume;
    }
  }, [systemVolume, sound]);

  let styleButton = {
    backgroundColor: "grey",
    boxSizing: "border-box",
    boxShadow: "5px 5px 5px black",
    width: "7vw",
    height: "6vw",
    outline: "none",
    fontFamily: "Russo One",
    border: "none",
  };

  const handleChange = (e) => {
    if (document.getElementById("toggleSwitch").checked) {
      document.getElementById("displayScreen").innerText = soundName;
      e.target.style.backgroundColor = "orange";
      e.target.style.boxShadow = "none";
      sound.play();
      setTimeout(() => {
        e.target.style.boxShadow = "5px 5px 5px black";
        e.target.style.backgroundColor = "grey";
      }, 150);
    }
  };

  return (
    <button
      className="btn m-1"
      onClickCapture={handleChange}
      style={styleButton}
    >
      {label}
    </button>
  );
}
