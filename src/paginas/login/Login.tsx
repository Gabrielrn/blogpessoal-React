import React,{ChangeEvent, useState, useEffect} from "react";
import "./Login.css";
import { Button, Grid, TextField, Typography} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { Box } from "@mui/material";

function Login() {

  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      usuario: '',
      senha: '',
      foto: '',
      token: ''
    }
    )

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
      setUserLogin({
        ...userLogin,
        //captura a propriedade name         
        [event.target.name]: event.target.value //captura o valor digitado pelo usuário
      })
    }

    useEffect(()=>{
      if(token != ''){
        navigate('/home')
      }
    },[token])

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();

      try{
        await login(`/usuarios/logar`, userLogin, setToken)
      
        alert('Usuário logado com sucesso!');
      }catch(error){
        alert('Dados incorretos!')
      }  
    }

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
            <form onSubmit={onSubmit}>
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
                value={userLogin.usuario}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                id="usuario"
                label="Usuário"
                placeholder="Entre com seu usuário"
                name="usuario"
                margin="normal"
                fullWidth
                variant="outlined"
              />
              <TextField
                value={userLogin.senha}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
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
                  
                    <Button type='submit' variant='contained' className="btn-login">
                        Logar
                    </Button>

                </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom align='center'>
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to='/cadastrousuario'>
                  <Typography variant='subtitle1' gutterBottom align='center' className='textos'>
                      Cadastre-se
                  </Typography>
              </Link>
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
