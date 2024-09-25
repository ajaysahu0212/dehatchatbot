import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/DehatLogo.png";
import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";

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

function NavBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [language, setLanguage] = React.useState("");

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleChange = (event, newValue) => {
    setLanguage(newValue);
  };

  return (
    <AppBar position="sticky" sx={{top:'0', bgcolor: "#fff", py: 0.5, px:1 , zIndex:5222}}>
      {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 0 }}>
            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
            <IconButton sx={{ m: 0, p:0 }} disableGutters>
              <Avatar
                alt="D"
                src="/static/images/avatar/2.jpg"
                sx={{ bgcolor: "#0E7A41", height:"35px", width:'35px', fontSize:"16px" }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexGrow: 1,
              mx: 1,
            }}
          >
            <img width="50px" src={logo} alt="Logo" />
          </Box>

          {/* Language Selector and Menu on the right */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Language Selector */}
            <Autocomplete
              fullWidth
              options={languages}
              getOptionLabel={(option) => option}
              value={language}
              onChange={handleChange}
              sx={{ minWidth: "140px", height: "fit-content", mr: 1 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Language"
                  variant="outlined"
                />
              )}
            />

            {/* <TextField
              select
              value={language}
              onChange={handleChange}
              variant="outlined"
              size="small"
              sx={{
                width: "120px",
                // position: "absolute",
                // bottom: "20px",
                // left: "16px",
              }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
            </TextField> */}

            {/* Menu Button */}
            <Link to="/login_page">
              <IconButton
                size="large"
                // onClick={handleOpenNavMenu}
                sx={{ background: "#F5F8FA", borderRadius: "10px", fontSize:"16px" }}
              >
                <MenuIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}

export default NavBar;
