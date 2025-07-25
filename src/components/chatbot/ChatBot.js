import React, { useEffect, useRef, useState } from "react";
import {
  IconButton,
  TextField,
  Paper,
  Box,
  Fab,
  Container,
  InputAdornment,
} from "@mui/material";
import { Mic, Send, Chat, Close } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  useLocation,
} from "react-router-dom";
import MainPage from "../MainPage";
import CategoryPage from "../second_page/CategoryPage";
import FirstLoginSignUpPage from "../login_sign_up/FirstLoginSignUpPage";
import LoginSignUpPage from "../login_sign_up/SignUpPage";
import NotFound from "../../NotFound";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MainChatPage from "../MainChatPage";
import ChatBotMessage from "./CustomMessageBox";
import chatbot_bgimage from "../../images/chatbot/chatbot_bg.png";
// import MainPage from "./components/MainPage";
// import NotFound from "./NotFound";
// import CategoryPage from "./components/second_page/CategoryPage";
// import LoginSignUpPage from "./components/login_sign_up/LoginSignUpPage";
// import FirstLoginSignUpPage from "./components/login_sign_up/FirstLoginSignUpPage";

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  console.log("message", message.length);
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [audioMessages, setAudioMessages] = useState([]);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const timerRef = useRef(null);
  const videoRef = useRef(null);



  console.log("messages", messages);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]); // Add new message to the list
      setMessage(""); // Clear the input field after sending
    }
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
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
    setRecordedBlob(recordedBlob);
    setAudioMessages([...audioMessages, recordedBlob.blobURL]); // Save the audio message
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent new line insertion on Enter key
      handleSendMessage();
    }
  };

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
          {/* Chat content area */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              mb: 1,
              backgroundSize: "cover",
              height: "400px", // Define the height of the chat container
              backgroundImage: `url(${chatbot_bgimage})`,
            }}
          >
            {/* <Container maxWidth="xs"> */}
            <Router>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/login_page" element={<FirstLoginSignUpPage />} />
                <Route path="/login_signup" element={<LoginSignUpPage />} />
                <Route
                  path="/category/soil_test"
                  element={<MainChatPage messages={messages} />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
            {/* </Container> */}
          </Box>

          {
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TextField
                fullWidth
                placeholder="Ask a question..."
                variant="outlined"
                size="small"
                multiline
                maxRows={2}
                sx={{ maxHeight: "50px" }}
                value={message}
                onKeyDown={handleKeyDown}
                onChange={(e) => setMessage(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ fontSize: "50px", cursor: "pointer" }}
                      >
                        <input type="file" hidden onChange={handleFileUpload} />
                        <AddBoxOutlinedIcon
                          sx={{ color: "gray", fontSize: "22px" }}
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ fontSize: "50px", cursor: "pointer" }}
                      >
                        <PhotoCameraIcon
                          sx={{ color: "gray", fontSize: "22px" }}
                          onClick={openCamera}
                        />
                      </InputAdornment>
                    ),
                  },
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
                  // size="large"
                  sx={{
                    bgcolor: "#0E7A41",
                    color: "#fff",
                    mx: 1,
                    // fontSize: "20px",
                    "&:hover": {
                      color: "#0E7A41",
                    },
                  }}
                  // onClick={handleVoiceMessage}
                >
                  <Mic />
                </IconButton>
              )}
            </Box>
          }
        </Paper>
      )}
    </>
  );
};

export default ChatBot;

// const languages = [
//   "English",
//   "हिन्दी",
//   "తెలుగు",
//   "தமிழ்",
//   "ગુજરાતી",
//   "ਪੰਜਾਬੀ",
//   "اردو",
//   "മലയാളം",
//   "संस्कृत",
//   "ಕನ್ನಡ",
// ];
