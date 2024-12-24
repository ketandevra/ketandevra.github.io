import React from 'react';
import { useParams } from 'react-router-dom'; // To get the player ID from the URL
import { Box, Typography, Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import players from '../../Data/Players';

const PlayerDetail = () => {
  const { id } = useParams(); // Extract player ID from the URL
  const player = players.find((player) => player.playerId === id); // Find the player by ID

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f4f6f8',
        // height: '100vh', // Ensure full screen height
        padding: 4,
        margin: 0,
        overflow: 'auto',
      }}
    >
      {player ? (
        <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Grid Layout for the left image and right details */}
          <Grid container spacing={4}>
            {/* Left side - Image */}
            <Grid item xs={12} md={3}>
              <CardMedia
                component="img"
                height="300"
                image={player.playerImage}
                alt={player.playerName}
                sx={{ objectFit: 'fill' }}
              />
            </Grid>

            {/* Right side - Basic Details */}
            <Grid item xs={12} md={8}>
              <CardContent sx={{ padding: 3, backgroundColor: '#fff' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#333' }}>
                  {player.playerName}
                </Typography>
                {/* <Typography variant="h6" sx={{ marginBottom: 3, color: '#555' }}>
                  {player.playerFullName}
                </Typography> */}

                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>ID:</strong> {player.playerId}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Role:</strong> {player.playerRole}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Batting Style:</strong> {player.playerBatting}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Bowling Style:</strong> {player.playerBowling}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

          {/* Detailed Information Section Below */}
          <CardContent sx={{ padding: 3, backgroundColor: '#fff' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#444', marginBottom: 2 }}>
              Player Details
            </Typography>

            <Paper sx={{ padding: 2, backgroundColor: '#f9f9f9' }} elevation={3}>
              {/* <Typography variant="body2" color="text.secondary">
                <strong>Father's Name:</strong> {player.playerFatherName}
              </Typography> */}
              <Typography variant="body1" color="text.secondary">
                <strong>Phone:</strong> {player.playerPhone}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>DOB:</strong> {player.playerDob}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Age:</strong> {player.playerAge}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Size:</strong> {player.playerSize}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                <strong>Status:</strong> {player.playerStatus}
              </Typography> */}
            </Paper>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h4" sx={{ color: '#ff6f61' }}>
          Player not found
        </Typography>
      )}
    </Box>
  );
};

export default PlayerDetail;
