import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Jour1 from "./jour1";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./programme.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GroupExample() {
  return (
    <div id="programme">
      <div className="title">
        {" "}
        <h2>Programme</h2>
      </div>
      <Container>
        <Box sx={{ height: "100vh", width: "100%", mb: 5 }}>
          <Grid
            alignItems="center"
            justifyContent="center"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Jour1></Jour1>

            <Jour1></Jour1>
            <Jour1></Jour1>
            <Jour1></Jour1>
            <Grid item xs={6}>
              <Item>2</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>3</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>4</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
