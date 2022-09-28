import React from 'react'
import './Home.css'

function Home() {
  return (
    //<> significa Fragment, é utlizado para retornar uma lista de elementos
    <>
      <h1 className='titulo'>Home</h1>
      <img className='img' src="https://sm.ign.com/t/ign_br/news/b/berserk-ma/berserk-manga-to-continue-after-creators-death_pbr4.1200.jpg" alt="Imagem tela inicial"/>
    </>
  )
}

export default Home;

