import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button } from '@mui/material';
import {Link} from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    
                    {/* A Grid em volta da Box permite a utlização do espaço inteiro disponível e joga os itens para a direita */}
                   <Grid container justifyContent="flex-end">
                   <Box display="flex" justifyContent="flex-end">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" >
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" >
                                   <Button className='btn-logout' variant='contained'>logout</Button> 
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                   </Grid>

                </Toolbar>
            </AppBar>
    </>
  );
}

export default Navbar;
