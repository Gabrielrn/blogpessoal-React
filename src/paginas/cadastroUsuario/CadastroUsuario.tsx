import React, { ChangeEvent, useEffect, useState } from 'react';
import {Grid, Button, Typography, TextField} from '@material-ui/core';
import { cadastroUsuario } from '../../services/Service';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import User from '../../models/User';

function CadastroUsuario() {

  let navigate = useNavigate();
  const [confirmarSenha,setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          senha: '',
          foto: ''
      })

  const [userResult, setUserResult] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          senha: '',
          foto: ''
      })

  useEffect(() => {
      if (userResult.id != 0) {
          navigate("/login")
      }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

      setUser({
          ...user,
          [e.target.name]: e.target.value
      })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      if(confirmarSenha == user.senha){
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      alert('Usuario cadastrado com sucesso')
      }else{
          alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>

      <Grid item xs={6} className='imagem-cadastro'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
        <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className='textos2'
              >
                Cadastre-se
              </Typography>
              <TextField
                value={user.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="nome"
                label="Nome"
                placeholder="Entre com seu nome"
                name="nome"
                margin="normal"
                fullWidth
                variant="outlined"
              />
              <TextField
                value={user.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="Usuário"
                variant="outlined"
                name="usuario"
                margin="normal"
                placeholder="Entre com seu usuário"
                fullWidth
              />
              <TextField
                value={user.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="Senha"
                placeholder="Entre com sua senha"
                name="senha"
                margin="normal"
                fullWidth
                type='password'
                variant="outlined"
              />
              <TextField
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                name="confirmarSenha"
                margin="normal"
                type="password"
                placeholder="Confirme sua senha"
                fullWidth
              />
                <Box marginTop={2} textAlign='center'>
                  <Link to='/login' className="text-decorator-none">
                    <Button variant='contained' className="btn-cancelar">
                        Cancelar
                    </Button>
                  </Link>
                  <Button type='submit' variant='contained' className="btn-cadastrar">
                        Cadastrar
                  </Button>
                </Box>
            </form>
        </Box>
      </Grid>

    </Grid>
  )
}

export default CadastroUsuario