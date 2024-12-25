import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import players from "../../Data/Players";

const PlayerDetail = () => {
  const { id } = useParams();

  const player = players.find((player) => player.playerId === id);

  // {
  //   playerId: "1",
  //   playerName: "Faf du Plessis",
  //   playerCountry: "South Africa",
  //   playerImage: "example-image-id", // Replace with the image URL or ID
  //   matches: 134,
  //   runs: 5120,
  //   average: 46.55,
  //   strikeRate: 88.5,
  //   fifties: 32,
  //   hundreds: 11,
  //   ranking: 6,
  // },

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        // minHeight: "100vh",
        padding: 3,
      }}
    >
      {player ? (
        <Card
          sx={{
            width: "100%",
            // maxWidth: 1200,
            borderRadius: 6,
            padding: 2,
            background: "#ffffff",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Grid container spacing={4}>
            {/* Left Section: Player Image */}
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                image={`https://drive.google.com/thumbnail?id=${player.playerImage}&sz=w1000`}
                alt={player.playerName}
                sx={{
                  width: "100%",
                  height: 550,
                  borderRadius: 3,
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>

            {/* Right Section: Player Details */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between", // Pushes content to edges
                  // alignItems: "center", // Aligns name and image vertically
                  mb: 2, // Adds margin below
                }}
              >
                {/* Player Name */}

                <Box sx={{}}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: 50,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#333",
                      letterSpacing: 1,
                    }}
                  >
                    {player.playerName}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: 2,
                      color: "#444",
                      fontWeight: "bold",
                      background: "linear-gradient(135deg, #d32f2f, #f44336)",
                      padding: "8px 16px",
                      borderRadius: 4,
                      display: "inline-block",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      color: "#fff",
                    }}
                  >
                    {player.playerRole}
                  </Typography>
                </Box>

                {/* Image on the extreme right */}
                <img
                  src={
                    player.teamName == "जीसीसी रॉयल्स"
                      ? "https://drive.google.com/thumbnail?id=1VXcP4g1hs4MJvZ7CZQcClQ0FNGnnXL1T&sz=w1000"
                      : player.teamName == "श्री नाथ जी क्लब"
                      ? "https://drive.google.com/thumbnail?id=17i5Y7c-wLWUOrbs4cG-xtaBrXj0Ko0YT&sz=w1000"
                      : player.teamName == "ट्रॉफी फाइटर्स"
                      ? "https://drive.google.com/thumbnail?id=1o8GzzwuwqfF07zHeoVM069YaLos8d8Of&sz=w1000"
                      : player.teamName == "माँ तनोड क्लब"
                      ? "https://drive.google.com/thumbnail?id=102LGs424aRDf5oak0NAzBuFch61bkWZp&sz=w1000"
                      : player.teamName == "ज़ाफ़री सुपर"
                      ? "https://drive.google.com/thumbnail?id=1HonJKWFAci3sRux2ZKjSZg4HUI3SR5Qy&sz=w1000"
                      : player.teamName == "किसान एलेवन्स"
                      ? "https://drive.google.com/thumbnail?id=1866KdDjIoWlUeCyCQgKzKYHpI-L-MrfB&sz=w1000"
                      : player.teamName == "गणपति सुपर किंग्स"
                      ? "https://drive.google.com/thumbnail?id=1tBd4fkn-Gi2zBU97SK-TUIK0DryEtMNW&sz=w1000"
                      : "https://drive.google.com/thumbnail?id=1WobGH07wt4bTr3YLuWDU7nJgm4SMAcZu&sz=w1000"
                  }
                  alt="player-icon"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "10%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Player Stats */}
              <Grid container spacing={3}>
                {[
                  { label: "Batting Style", value: player.playerBatting },
                  { label: "Bowling Style", value: player.playerBowling },
                  { label: "Age", value: player.playerAge },
                  { label: "Mobile No.", value: player.playerPhone },
                  { label: "Team Name", value: player.teamName },
                  { label: "Sold Points", value: player.playerSoldPrice },
                ].map((stat, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Paper
                      sx={{
                        padding: 3,
                        textAlign: "center",
                        marginTop: 2,
                        color: "#444",
                        fontWeight: "bold",
                        background: "linear-gradient(135deg, #1e88e5, #6ab7ff)",
                        padding: "8px 16px",
                        borderRadius: 4,
                        // display: "inline-block",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        color: "#fff",
                        height: 120,
                        alignContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 25,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {stat.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Player not found
        </Typography>
      )}
    </Box>
  );
};

export default PlayerDetail;
