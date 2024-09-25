import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Divider,
  Typography,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../../images/DehatLogo.png";
import googleImage from "../../images/googleImage.png";
import { Link } from "react-router-dom";

const LoginSignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "400px" },
        margin: "auto",
        paddingTop: "2rem",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { sm: "120px", xs: "90px" },
          }}
        >
          <img width="100%" src={logo} alt="Logo" />
        </Box>
      </Box>

      {/* Name Field */}
      <TextField
        // size="small"
        fullWidth
        label="Name"
        sx={{ mb: 2, bgcolor: "#ced8e0ff" }}
      />

      {/* Email Field */}
      <TextField
        // size="small"
        fullWidth
        label="E-mail"
        type="email"
        sx={{ mb: 2, bgcolor: "#ced8e0ff" }}
      />

      {/* Password Field */}
      <TextField
        fullWidth
        // size="small"
        label="Password"
        type={showPassword ? "text" : "password"}
        sx={{ mb: 2, bgcolor: "#ced8e0ff" }}
        slotProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Sign Up Button */}
      <Button
        variant="contained"
        color="success"
        fullWidth
        // size="small"
        sx={{ mb: 2, fontSize: "18px", textTransform: "none" }}
      >
        Sign Up
      </Button>

      {/* Divider */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Divider sx={{ flexGrow: 1 }} />
        <Typography sx={{ mx: 2 }}>Or</Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>

      {/* Google Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              mr: 8,
              width: { sm: "30px", xs: "30px" },
            }}
          >
            <img width="100%" src={googleImage} alt="Logo" />
          </Box>
        }
        sx={{
          textTransform: "none",
          mb: 2,
          height: "50px",
          fontSize: "16px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {" "}
        <Typography>SignUp With Google</Typography>
      </Button>

      {/* Terms and Conditions */}
      <Typography variant="subtitle1" sx={{ mb: 1, color: "gray" }}>
        By Signing up you accept the{" "}
        <Link href="#" style={{ color: "#3f51b5" }}>
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href="#" style={{ color: "#3f51b5" }}>
          Privacy Policy
        </Link>
      </Typography>

      {/* Login Link */}
      <Typography variant="subtitle1" sx={{ mb: 2, color: "gray" }}>
        Already have an account?{" "}
        <Link href="#" style={{ color: "#3f51b5" }}>
          Log In
        </Link>
      </Typography>

      {/* Language Dropdown */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          position: "absolute",
          bottom: "20px",
          left: "16px",
        }}
      >
        <TextField
          select
          value={language}
          onChange={handleChangeLanguage}
          variant="outlined"
          size="small"
          sx={{ width: "120px" }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang} value={lang}>
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

export default LoginSignUpPage;
