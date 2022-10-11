// o type é o tipo da ação, e o payload é a informação que sera levada(enviada)
export type Action = {type: "ADD_TOKEN"; payload: string};

export const addToken = (token: string): Action => ({
  type: "ADD_TOKEN",
  payload: token,
});