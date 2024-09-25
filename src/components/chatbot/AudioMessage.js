import React, { useState, useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import { ReactMic } from 'react-mic';

const AudioMessage = ({ messages }) => {
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [timer, setTimer] = useState(0);
  const [audioMessages, setAudioMessages] = useState([]);
  const timerRef = useRef(null);

  // Start recording when user presses the mic button
  const startRecording = () => {
    setRecording(true);
    setTimer(0);
    timerRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);
  };

  // Stop recording when user releases the mic button
  const stopRecording = () => {
    setRecording(false);
    clearInterval(timerRef.current);
  };

  // Handle the audio data after recording is stopped
  const onStop = (recordedBlob) => {
    setRecordedBlob(recordedBlob);
    setAudioMessages([...audioMessages, recordedBlob.blobURL]); // Save the audio message
  };

  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      {/* Chat messages */}
      <Box sx={{ padding: "10px", height: "calc(100% - 70px)", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <Typography key={index} sx={{ mb: 2, backgroundColor: "#f5f5f5", p: 2, borderRadius: "8px" }}>
            {msg.text}
          </Typography>
        ))}

        {/* Display audio messages */}
        {audioMessages.map((audioUrl, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <audio controls src={audioUrl} />
          </Box>
        ))}
      </Box>

      {/* Voice recorder */}
      <Box sx={{ position: "fixed", bottom: 0, width: "100%", p: 2, backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* Timer */}
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {recording ? `Recording: ${timer}s` : null}
        </Typography>

        {/* Microphone button */}
        <IconButton
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          sx={{ color: recording ? "red" : "green" }}
        >
          <MicIcon />
        </IconButton>
      </Box>

      {/* ReactMic Component for recording */}
      <ReactMic
        record={recording}
        className="sound-wave"
        onStop={onStop}
        mimeType="audio/wav"
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
    </Box>
  );
};

export default AudioMessage;
