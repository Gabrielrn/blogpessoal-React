import axios from "axios";
import { url } from "inspector";

//o service ele fica responsável por toda a regra de negócio, a maneira que a comunicação do front e do back (api) ocorre, ao fazer uma requisão espera-se que seja retornado um json.

export const api = axios.create({
  baseURL: 'https://blogpessoalbackendgen.herokuapp.com/'
})

// usuarios/logar 
export const login = async(url:any, dados:any, setDado:any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data.token)
} 

// usuarios/cadastrar
export const cadastroUsuario = async(url:any, dados:any, setDado:any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
} 