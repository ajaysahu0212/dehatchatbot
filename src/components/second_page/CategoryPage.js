import React from "react";
import NavBar from "../NavBar";
import image1 from "../../images/category/feature icons-10.png";
import image2 from "../../images/category/feature icons-12.png";
import image3 from "../../images/category/feature icons-08.png";
import image4 from "../../images/category/feature icons-04.png";
import image5 from "../../images/category/feature icons-07.png";
import image6 from "../../images/category/feature icons-09.png";
import { Box, Card, Container, Typography } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ChatField from "./ChatField";
import SoilTestCard from "./page";

const CategoryPage = () => {
  return (
    <Box sx={{ bgcolor: "#f2f2f2" }}>
      <NavBar />

      {/* <Container maxWidth="lg" sx={{ textAlign: "center", position: "relative" }}>
        <Box
          sx={{
            // height: { xs: "60vh", },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              my: 1,
              color: "black",
              fontSize: { xs: "16px", },
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Special GPTs
          </Typography>

          <Box
            rowGap={1.5}
            columnGap={1.5}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(3, 1fr)",
              sm: "repeat(3, 1fr)",
            }}
          >
            {categoryData?.map((item) => (
              <Card
                key={item.id} // Add key prop
                sx={{
                  p: 1,
                  width: { xs: "80px" },
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        width: {  xs: "65px" },
                        backgroundColor: item?.bgcolor || "#e0f7fa", // Provide default background color
                      }}
                    >
                      <img width="100%" src={item.image} alt={item.title} />
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      mt: 1,
                      color: "black",
                      fontSize: { xs: "14px" },
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>

          <Typography
            sx={{
              mt: 2,
              color: "#8098ab",
              fontSize: { xs: "16px"},
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              cursor: "pointer", // Add cursor pointer for interactivity
            }}
          >
            Show More <ExpandMoreRoundedIcon sx={{ fontSize: "26px", ml: 1 }} />
          </Typography>
        </Box>
      </Container> */}

      <SoilTestCard/>

     <ChatField/>
    </Box>
  );
};

export default CategoryPage;

// Data for categories
const categoryData = [
  { id: 1, image: image1, title: "Crop Disease", bgcolor: "#e0f7fa" },
  { id: 2, image: image2, title: "Soil Test", bgcolor: "#fff9c4" },
  { id: 3, image: image3, title: "Crop Doctor", bgcolor: "#ffccbc" },
  { id: 4, image: image4, title: "Weather Insurance", bgcolor: "#f0ffbf" },
  { id: 5, image: image5, title: "Farm Monitoring", bgcolor: "#f0ffbf" },
  { id: 6, image: image6, title: "Weather Forecast", bgcolor: "#d4f5ff" },
];
