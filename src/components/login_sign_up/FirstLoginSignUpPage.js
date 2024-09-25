import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  MenuItem,
  TextField,
} from "@mui/material";
import logo from "../../images/DehatLogo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const FirstLoginSignUpPage = () => {
  const [language, setLanguage] = useState("English");

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        // width: { xs: "90%", sm: "400px" },
        margin: "auto",
        minHeight: "100%",
        paddingTop: "2rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "absolute", right: "16px", top: "16px" }}>
        <Link to="/login_signup">
          <ArrowForwardIosIcon />
        </Link>
      </Box>
      {/* Avatar */}
      <Box>
        <Avatar
          sx={{
            mb: 1,
            width: 40,
            height: 40,
            margin: "auto",
            bgcolor: "#b0b0b0",
          }}
        />

        {/* Logo and Tagline */}
        <Box>
          <Box
            sx={{
              p: 2,
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
                  width: { xs: "60px" },
                }}
              >
                <img width="100%" src={logo} alt="Logo" />
              </Box>
            </Box>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ mt: 1, color: "black", fontSize: "1rem" }}
            >
              Seeds To Market
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "380px",
          //   position: "absolute",
          //   right: "16px",
          //   bottom: "60px",
        }}
      >
        {/* Sign Up Button */}
        <Link to="/login_signup">
          <Button
            size="small"
            variant="contained"
            color="success"
            fullWidth
            sx={{ mb: 2, fontSize: "16px", fontWeight: "600", textTransform:'none', maxWidth:'300px' }}
          >
            Sign Up
          </Button>
        </Link>

        {/* Log In Button */}
        <Button
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            mb: 3,
            fontSize: "16px",
            fontWeight: "600",
            borderColor: "#3f51b5",
            color: "#3f51b5",
            textTransform:'none',
            maxWidth:'300px'
          }}
        >
          Log in
        </Button>
      </Box>

      {/* Language Dropdown */}
      <Box sx={{ display: "flex", justifyContent: "flex-end",alignItems:'center', flexDirection:'column', height:'100%'  }}>
        <TextField
          select
          value={language}
          onChange={handleChangeLanguage}
          variant="outlined"
          size="small"
          sx={{
            width: "120px",
            position: "absolute",
            bottom: "40px",
            left: "30px",
          }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang} size="small" value={lang}>
              {lang}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

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

export default FirstLoginSignUpPage;
