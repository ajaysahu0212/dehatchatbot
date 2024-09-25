import React, { useState } from "react";
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
import chatbot_bgimage from "../../images/chatbot/chatbot_bg.png"
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

  const handleVoiceMessage = () => {
    // Handle voice message logic here
    console.log("Voice message sent!");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent new line insertion on Enter key
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChat}
        sx={{ position: "fixed", bottom: 16, right: 16}}
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
                <Route path="/category/soil_test" element={<MainChatPage messages={messages} />} />
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
                sx={{maxHeight:'50px'}}
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
                        />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              {message.length > 0 ? (
                <IconButton color="primary" sx={{mx:1}} onClick={handleSendMessage}>
                  <Send  />
                </IconButton>
              ) : (
                <IconButton
                  // size="large"
                  sx={{
                    bgcolor: "#0E7A41",
                    color: "#fff",
                    mx:1,
                    // fontSize: "20px",
                    "&:hover": {
                      color: "#0E7A41",
                    },
                  }}
                  onClick={handleVoiceMessage}
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

const languages = [
  "English",
  "हिन्दी",
  "తెలుగు",
  "தமிழ்",
  "ગુજરાતી",
  "ਪੰਜਾਬੀ",
  "اردو",
  "മലയാളം",
  "संस्कृत",
  "ಕನ್ನಡ",
];
