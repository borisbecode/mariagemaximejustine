import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Jour1() {
  return (
    <Grid item xs={6} alignItems="center" justifyContent="center">
      <Card sx={{ maxWidth: 545 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="540"
            image="https://zupimages.net/up/22/28/hy1r.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mardi 30 Aout
            </Typography>
            <Typography className="color" textAlign="center" sx={{ mt: 1 }}>
              17H - Cérémonie laïque
            </Typography>
            <Typography className="color" textAlign="center" sx={{ mt: 1 }}>
              18H30 - Cocktail et dîner
            </Typography>
            <Typography className="color" textAlign="center" sx={{ mt: 1 }}>
              - Soirée
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
