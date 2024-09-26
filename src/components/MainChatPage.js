import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import ChatField from "./second_page/ChatField";
import { Box, IconButton, Typography } from "@mui/material";
import SoilTestCard from "./second_page/page";
import chatbot_bgimage from "../images/chatbot/chatbot_bg.png";
import ChatBotMessage from "./chatbot/CustomMessageBox";
import AudioMessage from "./chatbot/AudioMessage";
import { Close } from "@mui/icons-material";

const MainChatPage = ({ messages, audioMessages }) => {

  return (
    <Box>
      <NavBar />
      <Box sx={{ backgroundImage: chatbot_bgimage }}>
        {/* Camera preview */}
       
        <ChatBotMessage messages={messages} />
        {/* <AudioMessage messages={messages} /> */}
      </Box>
    </Box>
  );
};

export default MainChatPage;
