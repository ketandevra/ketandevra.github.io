import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";
import yogeshImage from "../../assets/yogesh.jpg"; // Replace with actual image
import jituImage from "../../assets/jitu.jpg"; // Replace with actual image
import sureshImage from "../../assets/suresh.jpg"; // Replace with actual image
import deepakImage from "../../assets/deepak.jpg"; // Replace with actual image
import coverImage from "../../assets/cover.png";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      {/* <Box
        sx={{
          height: "300px",
          backgroundColor: "#00bcd4",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          श्री क्षत्रीय घाँची युवा महासभा समिति, पाली
        </Typography>
        <Typography variant="h6">
          Building a stronger community together.
        </Typography>
      </Box> */}
      <img src={coverImage} style={{ width: "100%", height: 700 }}/>
      <Box sx={{ padding: '20px' }}>
        <Typography
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}
        >
          समिति
        </Typography>

        <Grid container spacing={2} style={{ padding: 0 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={yogeshImage}
                alt="Achievements"
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  component="div"
                  style={{ fontSize: 20, fontWeight: 600 }}
                >
                  योगेश सोलंकी
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  अध्यक्ष
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={jituImage}
                alt="Achievements"
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  component="div"
                  style={{ fontSize: 20, fontWeight: 600 }}
                >
                  जितेन्द्र पंवार
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  उपाध्यक्ष
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={sureshImage}
                alt="Achievements"
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  component="div"
                  style={{ fontSize: 20, fontWeight: 600 }}
                >
                  सुरेश परिहार
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  सचिव
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={deepakImage}
                alt="Achievements"
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  gutterBottom
                  component="div"
                  style={{ fontSize: 20, fontWeight: 600 }}
                >
                  दीपक देवड़ा
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  कोषाध्यक्ष
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
