import React, { useState } from "react";
import NavBar from "./NavBar";
import ChatField from "./second_page/ChatField";
import { Box, Typography } from "@mui/material";
import SoilTestCard from "./second_page/page";
import chatbot_bgimage from "../images/chatbot/chatbot_bg.png";
import ChatBotMessage from "./chatbot/CustomMessageBox";
import AudioMessage from "./chatbot/AudioMessage";

const MainChatPage = ({ messages, setMessage }) => {
  console.log("messages", messages);

  // Function to handle sending the message

  return (
    <Box>
      <NavBar />
      <Box sx={{ backgroundImage: chatbot_bgimage }}>
        <ChatBotMessage messages={messages} />
        {/* <AudioMessage messages={messages} /> */}
      </Box>
    </Box>
  );
};

export default MainChatPage;
