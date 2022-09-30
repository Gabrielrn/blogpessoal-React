import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';

function Navbar() {
  return (
    <>
      <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer", fontFamily: "Raleway" }}>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="flex-end">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" color="inherit" >
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" color="inherit" >
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" color="inherit" >
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" color="inherit" >
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    </>
  );
}

export default Navbar;
