import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Pagedegarde() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      id="home"
    >
      <Card sx={{ maxWidth: 700 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="auto"
          image="https://zupimages.net/up/22/28/iibq.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Maxime & Justine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        {/*      <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
}
