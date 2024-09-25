import React from 'react'
import NavBar from './NavBar'
import ChatField from './second_page/ChatField'
import { Box } from '@mui/material'

const MainChatPage = () => {
  return (
    <Box>
        <NavBar/>

        <ChatField/>
    </Box>
  )
}

export default MainChatPage
