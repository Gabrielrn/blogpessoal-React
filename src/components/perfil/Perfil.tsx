import { Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from '../../models/User'
import { buscaId } from '../../services/Service'
import { TokenState } from '../../store/tokens/tokensReducer'
import './Perfil.css'

function Perfil() {

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  })

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
    headers: {Authorization: token}
    })
  }

  useEffect(() => {
    getUserById(+userId)
  }, [])

  return (
    <>
    <Grid container className='perfil-bg'>
      <Container>
        <div className='perfilContainer'>
          <Grid xs={3} alignItems='center' justifyContent='center' className='perfil'>
            <Typography variant='h5' align='center' >{usuario.nome}</Typography>
            <img src='https://www.comboinfinito.com.br/principal/wp-content/uploads/2016/06/geralt-the-witcher.jpg'   alt="" className='imgPerfil' />
             {/* {usuario.foto}  */}
          </Grid>
          <Grid xs={9} justifyContent='center' className='perfil'>
            <Typography variant='h4' align='center'>Postagens de {usuario.nome}</Typography>
            Você tem um total de {usuario.postagem?.length} postagens feitas

            <div className="postUser">
            {usuario.postagem?.map((post) => (
              <div className="postPerfil">
                <h3>{post.titulo}</h3>
                <strong className='txt'>Tema: {post.tema?.descricao}</strong>
                <p>{post.texto}</p> 
              </div>
            ))}
            </div>
          </Grid>
        </div>
      </Container>
      </Grid>
    </>
  );
}
export default Perfil;