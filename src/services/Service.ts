import axios from "axios";
import { url } from "inspector";

//o service ele fica responsável por toda a regra de negócio, a maneira que a comunicação do front e do back (api) ocorre, ao fazer uma requisão espera-se que seja retornado um json.

export const api = axios.create({
  baseURL: 'https://blogpessoal-wbh4.onrender.com/'
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

//ele faz um get na API para poder retornar os dados, e esses dados serão atribuidos ao front-end
export const busca = async(url:any, setDado:any, header: any) => {
  const resposta = await api.get(url, header)
  setDado(resposta.data)
} 

export const buscaId = async(url:any, setDado:any, header: any) => {
  const resposta = await api.get(url, header)
  setDado(resposta.data)
} 

export const post = async(url:any, dados:any, setDado:any, header: any) => {
  const resposta = await api.post(url, dados, header)
  setDado(resposta.data)
} 

export const put = async(url:any, dados:any, setDado:any, header: any) => {
  const resposta = await api.put(url, dados, header)
  setDado(resposta.data)
} 

export const deleteId = async(url:any, header: any) => {
  await api.delete(url, header)
} 