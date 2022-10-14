// o type é o tipo da ação, e o payload é a informação que sera levada(enviada)
export type Action = {type: "ADD_TOKEN"|"ADD_ID"; payload: string};

export const addToken = (token: string): Action => ({
  type: "ADD_TOKEN",
  payload: token,
});

//pega o id do usuário na hora do login

export const addId = (id: string): Action => ({
  type: "ADD_ID",
  payload: id
})