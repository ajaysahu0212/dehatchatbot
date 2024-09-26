import React, { useState, useRef, useEffect } from "react";
import {
  IconButton,
  TextField,
  Paper,
  Box,
  Fab,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Mic, Send, Chat, Close, PhotoCamera, AttachFile } from "@mui/icons-material";
import { ReactMic } from "react-mic";

const ChatBotWithAudio = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Store both text and audio messages
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [audioMessages, setAudioMessages] = useState([]);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const timerRef = useRef(null);
  const videoRef = useRef(null);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "text", content: message }]); // Add new text message
      setMessage(""); // Clear the input field after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent new line insertion on Enter key
      handleSendMessage();
    }
  };

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
    setAudioMessages([...audioMessages, recordedBlob.blobURL]); // Save audio blob URL
    setMessages([...messages, { type: "audio", content: recordedBlob.blobURL }]); // Save audio message in messages
  };

  // Function to open the camera
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsCameraOn(true);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  // Function to stop the camera
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
    setIsCameraOn(false);
  };

  useEffect(() => {
    return () => {
      // Cleanup camera when the component is unmounted
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <>
      {/* Chatbot toggle button */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChat}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {chatOpen ? <Close /> : <Chat />}
      </Fab>

      {/* Chatbot UI */}
      {chatOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            borderRadius: "10px",
            bottom: 80,
            right: 16,
            width: 400,
            height: 500,
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Chat content area */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              mb: 1,
              padding: "10px",
              height: "400px", // Define the height of the chat container
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            {/* Display messages */}
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  backgroundColor: "#e0e0e0",
                  borderRadius: "8px",
                }}
              >
                {msg.type === "text" ? (
                  <Typography>{msg.content}</Typography>
                ) : msg.type === "audio" ? (
                  <audio controls src={msg.content} />
                ) : (
                  <Typography>{msg.content}</Typography>
                )}
              </Box>
            ))}

            {/* Camera preview */}
            {isCameraOn && (
              <Box sx={{ mt: 2 }}>
                <video
                  ref={videoRef}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <IconButton onClick={stopCamera} color="secondary" sx={{ mt: 1 }}>
                  <Close /> Stop Camera
                </IconButton>
              </Box>
            )}
          </Box>

          {/* Input and controls */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <TextField
              fullWidth
              placeholder="Type a message..."
              variant="outlined"
              size="small"
              multiline
              maxRows={2}
              sx={{ maxHeight: "50px" }}
              value={message}
              onKeyDown={handleKeyDown}
              onChange={(e) => setMessage(e.target.value)}
              slotProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton component="label">
                      <AttachFile />
                      <input type="file" />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={openCamera}>
                      <PhotoCamera />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {message.length > 0 ? (
              <IconButton
                color="primary"
                sx={{ mx: 1 }}
                onClick={handleSendMessage}
              >
                <Send />
              </IconButton>
            ) : (
              <IconButton
                sx={{
                  bgcolor: "#0E7A41",
                  color: "#fff",
                  mx: 1,
                  "&:hover": { color: "#0E7A41" },
                }}
                onMouseDown={startRecording}
                onMouseUp={stopRecording}
              >
                <Mic />
              </IconButton>
            )}
          </Box>
        </Paper>
      )}

      {/* ReactMic component for recording audio */}
      <ReactMic
        record={recording}
        className="sound-wave"
        onStop={onStop}
        mimeType="audio/wav"
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
    </>
  );
};

export default ChatBotWithAudio;
