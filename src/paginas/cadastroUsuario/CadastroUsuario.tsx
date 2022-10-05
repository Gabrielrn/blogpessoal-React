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
      if(confirmarSenha === user.senha && user.senha.length >= 8){
        try {
          await cadastroUsuario('usuarios/cadastrar', user, setUserResult);
          alert('Usuário criado com sucesso. Efetue seu login, por favor.');
        } catch (error) {
          alert('Falha ao cadastrar o usuário. Por favor, confira os campos');
        }
      }else{
          alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      }
  }

  useEffect(() => {
    if (userResult.id != 0) {
        navigate("/login")
    }
}, [userResult])

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
                required
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
                required
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
                value={user.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="foto"
                label="Foto"
                variant="outlined"
                name="foto"
                margin="normal"
                placeholder="Inseria uma foto (URL)"
                fullWidth
              />
              <TextField
                required
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
                required
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