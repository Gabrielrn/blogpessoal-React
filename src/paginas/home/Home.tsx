import React from "react";
import { Paper, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    //<> significa Fragment, é utlizado para retornar uma lista de elementos
    <>
      <Paper>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <h1>Título</h1>
          </Box>
          <img src="https://wallpaperaccess.com/full/673914.jpg" alt="Imagem" style={{width: "100%", height: "100%"}}/>
          <Box display="flex" justifyContent="center" p={2}>
            <Button variant="contained" color="primary">Texto 1</Button>
            <Button variant="contained" color="secondary">Texto 2</Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default Home;
