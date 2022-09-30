import React from "react";
import "./Login.css";
import { Button, Grid, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import { Box } from "@mui/material";

function Login() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={6} alignItems="center">
          <Box paddingX={20}>
            <form>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className='textos'
              >
                Entrar
              </Typography>
              <TextField
                id="usuario"
                label="Usuário"
                placeholder="Entre com seu usuário"
                name="usuario"
                margin="normal"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                placeholder="Entre com sua senha"
                fullWidth
              />
                <Box marginTop={2} textAlign='center'>
                  <Link to='/home' className="text-decorator-none">
                    <Button type='submit' variant='contained' className="btn-login">
                        Logar
                    </Button>
                  </Link>
                </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center'>
                  Não tem uma conta?
                </Typography>
              </Box>
                <Typography variant='subtitle1' gutterBottom align='center' className='textos'>
                  Cadastre-se
                </Typography>
            </Box>
          </Box>

        </Grid>
        <Grid xs={6} className='imagem-login'>

        </Grid>
      </Grid>
    </>
  );
}

export default Login;
