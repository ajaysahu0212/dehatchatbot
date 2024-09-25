import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Mic } from "@mui/icons-material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const ChatField = ({message, setMessage}) => {
  // State to hold the typed message
  // const [message, setMessage] = useState("");

  // State to hold all messages
  const [messages, setMessages] = useState([]);

  // Function to handle sending the message
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]); // Add new message to the list
      setMessage(""); // Clear the input field after sending
    }
  };

  const handleVoiceMessage = () => {
    // Handle voice message logic here
    console.log("Voice message sent!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth : "100%",
        justifyContent: "space-between",
        px: 2,
        position: "fixed",
        bottom: 16,
        bgcolor:"#f5f5f5"
      }}
    >
      {messages.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          {/* Ask a questions... */}
        </Typography>
      ) : (
        messages.map((msg, index) => (
          <Box key={index} sx={{ mb: 1 , bgcolor:"#f5f5f5"}}>
            <Typography
              variant="body2"
              sx={{
                p: 1,
                fontSize: "18px",
                bgcolor: "#E6EBF0",
                borderRadius: "8px",
                display: "inline-block",
                maxWidth: "60%",
              }}
            >
              {msg}
            </Typography>
          </Box>
        ))
      )}

      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <TextField
          fullWidth
          placeholder="Ask a question..."
          variant="outlined"
          size="small"
          value={message}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          onChange={(e) => setMessage(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ fontSize: "50px" }}>
                  <AddBoxOutlinedIcon
                    sx={{ color: "gray", fontSize: "22px" }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start" sx={{ fontSize: "50px" }}>
                  <PhotoCameraIcon sx={{ color: "gray", fontSize: "22px" }} />
                </InputAdornment>
              ),
            },
          }}
        />
        <IconButton
          size="large"
          sx={{ bgcolor: "#0E7A41", color: "#fff", ml: 2, fontSize: "20px" }}
          onClick={handleVoiceMessage}
        >
          <Mic />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatField;
