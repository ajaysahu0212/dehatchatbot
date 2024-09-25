import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const SoilTestCard = () => {
  // Sample questions for the Soil Test UI
  const questions = [
    "How often should I get my soil tested?",
    "What does a soil test report include?",
    "How long does it take to get soil test results?",
    "How much does a soil test cost at DeHaat?",
    "What fertilizers should I use based on my soil test results?",
  ];

  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Soil Test
        </Typography>
        {/* Refresh Icon */}
        <IconButton aria-label="refresh" size="small">
          <RefreshIcon />
        </IconButton>
      </Box>
      {/* <Box> */}

        {questions.map((question, index) => (
          <Button
            key={index}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              textTransform:'none',
              maxWidth:'300px',
              boxShadow: "none",
              marginBottom: "8px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            {question}
          </Button>
        ))}
      {/* </Box> */}
      </Box>
    </>
  );
};

export default SoilTestCard;
