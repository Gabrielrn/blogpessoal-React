import React,{ChangeEvent, useState, useEffect} from "react";
import "./Login.css";
import { Button, Grid, TextField, Typography} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";


function Login() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState ('');

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

    const [form, setForm] = useState(false)

    useEffect(() => {
      if(userLogin.usuario !== '' && userLogin.senha !== '') {
        setForm(true)
      }
    })

    useEffect(()=>{
      if(token != ''){
        dispatch(addToken(token))
        navigate('/home')
      }
    },[token])

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();

      try{
        await login(`/usuarios/logar`, userLogin, setToken)
      
        toast.success('Usuário logado com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'dark',
          progress: undefined,
      });
      }catch(error){
        toast.error('Dados incorretos!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'dark',
          progress: undefined,
      });
      }  
    }

  return (
    <>
      <Grid className='bg-login'
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={6} alignItems="center" >
          

        </Grid>
        <Grid xs={12} className='imagem-login'>
        <Box paddingX={50} className='box'>
        <div className="vidro">
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
              <TextField className='txt-style'
                value={userLogin.usuario}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                id="usuario"
                label="Usuário"
                placeholder="Entre com seu usuário"
                name="usuario"
                margin="normal"
                fullWidth
                variant="filled"
              />
              <TextField className='txt-style'
                value={userLogin.senha}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                id="senha"
                label="Senha"
                variant="filled"
                name="senha"
                margin="normal"
                type="password"
                placeholder="Entre com sua senha"
                fullWidth
              />
                <Box marginTop={2} textAlign='center'>
                  
                    <Button type='submit' variant='contained' className="btn-login" disabled={!form}>
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
              <Link to='/cadastrousuario'  className='textos'>
                  <Typography variant='subtitle1' gutterBottom align='center' className='bold'>
                      Cadastre-se
                  </Typography>
              </Link>
            </Box>
          </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
