import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../images/DehatLogo.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        // minHeight: "100vh",
      }}
    >
      {/* Logo */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "50px" },
                }}
              >
                <img width="100%" src={logo} alt="Logo" />
              </Box>
            </Box>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ mt: 1, color: "black", fontSize:'16px' }}
            >
              Seeds To Market
            </Typography>
          </Box>
        </AppBar>
      </Box>

      {/* Language Selection Box */}
      <Box
        sx={{
          // height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ p: 2, m: 5, bgcolor: "#fff", borderRadius: 2, boxShadow: 1 }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 2, fontSize: "16px", fontWeight: 600 }}
          >
            Choose Your Language
          </Typography>

          {/* Language Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              // gap: 2,
            }}
          >
            {languages.map((language, index) => (
              <Box key={index} sx={{ m: 0.5 }}>
                <Link to="/category">
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: 600,
                      bgcolor: "#E3F5CE",
                      color: "#0E7A41",
                      fontSize: "12px",
                      textTransform: "none",
                      borderRadius: "10px",
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "#b9dfbb",
                      },
                    }}
                  >
                    {language}
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;

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
