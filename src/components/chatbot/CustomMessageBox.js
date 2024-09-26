import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import chatbot_bgimage from "../../images/chatbot/chatbot_bg.png";
import SoilTestCard from "../second_page/page";
import NavBar from "../NavBar";
import AudioMessage from "./AudioMessage";
import { Close } from "@mui/icons-material";

const ChatBotMessage = ({ messages }) => {
  const messageEndRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const timerRef = useRef(null);
  const videoRef = useRef(null);

  // Function to stop the camera
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
    setIsCameraOn(false);
  };

  // Scroll to the bottom whenever a new message is added
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Trigger scroll when messages array changes

  return (
    <>
      <Box
        sx={{
          overflowY: "auto", // Enable scrolling
          padding: "10px",
        }}
      >
        {messages.length === 0 ? (
          <Box>
            <SoilTestCard />
          </Box>
        ) : (
          <>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  mb: 1,
                  display: "flex",
                  justifyContent: "flex-end", // Align message to the right
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#f5fffaff",
                    borderRadius: "8px",
                    display: "inline-block",
                    maxWidth: "300px",
                    fontSize: "16px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
                    margin: "5px 15px",
                    color: "#333",
                    justifyContent: "flex-end",
                    position: "relative", // To position the arrow
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      p: 1.1,
                      fontSize: "16px",
                      borderRadius: "8px",
                      display: "inline-block",
                      maxWidth: "60%",
                      alignSelf: "flex-end", // Align the text box to the right
                    }}
                  >
                    {msg}
                    {isCameraOn && (
                      <Box sx={{ mt: 2 }}>
                        <video
                          ref={videoRef}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px",
                          }}
                        />
                        <IconButton
                          onClick={stopCamera}
                          color="secondary"
                          sx={{ mt: 1 }}
                        >
                          <Close /> Stop Camera
                        </IconButton>
                      </Box>
                    )}
                  </Typography>

                  {/* {audioMessages.map((audioUrl, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <audio controls src={audioUrl} />
                    </Box>
                  ))} */}

                  {/* Adding the "arrow" or triangle shape */}
                  <Box
                    sx={{
                      content: '""',
                      position: "absolute",
                      right: "-9.8px",
                      top: "7px",
                      width: "5px",
                      height: "10px",
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "10px solid #f5fffaff",
                    }}
                  />
                </Box>
              </Box>
            ))}
            {/* This div ensures the scroll goes to the bottom */}
            <div ref={messageEndRef} />

            {/* <AudioMessage messages={messages} /> */}
          </>
        )}
      </Box>
    </>
  );
};

export default ChatBotMessage;
