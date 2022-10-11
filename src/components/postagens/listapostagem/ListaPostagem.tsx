import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


function ListaPostagem() {

   //trazer a função de navegação interna
   let navigate = useNavigate();

  // estado para gerenciar os posts que virão do backend
  const [posts, setPosts] = useState<Postagem[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

   //verificar se a pessoa tem token, se não tiver, mandar pra login
   useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado para acessar a função Temas!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'dark',
        progress: undefined,
    });
      navigate('/login')
    }
  }, [token])

  //função que realmente vai até o backend para buscar os posts
  async function getPostagem(){
    await busca('/postagens', setPosts, {
      headers: {'Authorization': token}
    })
  }

  //função para disparar a busca de temas assim que a tela for carregada
  useEffect(() => {
    getPostagem()
  }, [posts.length])

  return (
    <>
    {
      posts.map(post => (
      <Box m={2} className='card'>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="body2" component="p" className='margin'>
              {post.tema?.descricao}
            </Typography>
            <Typography variant="h5" component="h2">
              {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.texto}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft btn-lista" size='small'>
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className='btn-lista-deletar' color='secondary'>
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box> 
      ))
    }
    </>)
}

export default ListaPostagem;