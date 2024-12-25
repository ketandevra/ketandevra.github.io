import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import players from '../../Data/Players';

const CricketPlayerCard = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f4f6f8' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
        Cricket Players
      </Typography>

      {/* Grid Container with 4 cards per row */}
      <Grid container spacing={4} justifyContent="center">
        {players.map((player) => (
          <Grid item xs={12} sm={6} md={3} key={player.playerId}>
            {console.log("url: ", ``)}
            <Link to={`/player/${player.playerId}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ maxWidth: 345, borderRadius: '8px', boxShadow: 3, textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://drive.google.com/thumbnail?id=${player.playerImage}&sz=w1000`} // Player photo URL
                  alt={player.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    <strong>ID:</strong> {player.playerId}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {player.playerName}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CricketPlayerCard;