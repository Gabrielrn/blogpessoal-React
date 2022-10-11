//store é o container que vai armazenar e controlar todos os estados da minha aplicação

import { createStore } from 'redux';
import { tokenReducer } from './tokens/tokensReducer';

//desta forma eu consigo gerenciar os estados da minha aplicação
const store = createStore(tokenReducer);

export default store;