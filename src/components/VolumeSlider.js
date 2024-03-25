import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";

export default function VolumeSlider({ onSystemVolumeChange, disable }) {
  const audioPlayer = React.useRef();
  const [volume, setVolume] = React.useState(30);

  useEffect(() => {
    onSystemVolumeChange(volume);
    if (
      audioPlayer.current &&
      typeof audioPlayer.current.volume !== "undefined"
    ) {
      audioPlayer.current.volume = volume / 100;
    }
  }, [volume, onSystemVolumeChange]);

  return (
    <Box sx={{ width: 200 }}>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          mb: 1,
          "& .MuiSlider-thumb": {
            borderRadius: "0px",
            width: "8px",
            color: "blue",
          },
          "& .MuiSlider-rail": {
            borderRadius: "0px",
            boxShadow: "3px 3px 5px black",
            backgroundColor: "black",
            height: "5px",
          },
          "& .MuiSlider-track": {
            backgroundColor: "black",
            opacity: "1",
            border: "3px solid black",
          },
        }}
        alignItems="center"
      >
        <Slider
          aria-label="Volume"
          min={0}
          max={100}
          value={volume}
          onChange={(e, v) => setVolume(v)}
          disabled={disable}
        />
      </Stack>
    </Box>
  );
}
