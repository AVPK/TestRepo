import React from "react";
import Key from "./Key";
import sounds from "../assets/Playlist";
import ToggleSwitch from "./ToggleSwitch";
import VolumeSlider from "./VolumeSlider";
import { useState } from "react";

const LABELS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const names = [
  "Heater 1",
  "Heater 2",
  "Heater 3",
  "Heater 4",
  "Clap",
  "Open HH",
  "Kick n' Hat",
  "Kick",
  "Closed HH",
];

const styleScreen = {
  background: "grey",
  height: "3.8vw",
  width: "17vw",
  border: "none",
  color: "black",
};

export default function KeyGrid() {
  const [systemVolume, setSystemVolume] = React.useState(30);
  let index = 0;
  const generateColumns = () => {
    const columns = [];
    for (let i = 0; i < 3; i++) {
      columns.push(
        <div className="col col-4" key={i}>
          <Key
            label={LABELS[index]}
            sound={sounds[index]}
            soundName={names[index]}
            systemVolume={systemVolume}
          />
        </div>
      );
      index += 1;
    }
    return columns;
  };

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(
        <div className="row gx-0" key={i}>
          {generateColumns()}
        </div>
      );
    }
    return rows;
  };

  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggleChange = (checked) => {
    setIsDisabled(!checked);
  };


  return (
    <div className="row">
      <div className="col col-6 my-2">{generateRows()}</div>
      <div className="col col-6 d-flex flex-column align-items-center justify-content-center">
        <h6 className="fw-bold fontRusso">Power</h6>
        <ToggleSwitch onToggleChange={handleToggleChange} />
        <button
          id="displayScreen"
          className="fw-bold fontRusso my-3"
          style={styleScreen}
          disabled
        ></button>
        <VolumeSlider onSystemVolumeChange={setSystemVolume} disable={isDisabled} />
        <h6 className="fw-bold fontRusso">Bank</h6>
        <ToggleSwitch />
      </div>
    </div>
  );
}
