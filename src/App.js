import './App.css';

//components

import List from './components/List';
import Form from './components/Form';


// redux

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import listReducer from './reducers/listReducer';



function App() {
  function persisteState(state){
    localStorage.setItem('listItem', JSON.stringify(state))
  }

  function loadState(){
    const actualState = localStorage.getItem('listItem')
    if(actualState){
      return JSON.parse(actualState)
    }else{
      return []
    }
  }

  const store = createStore(listReducer, loadState())

  store.subscribe(()=>{
    persisteState(store.getState())
  })

  return (
    <div className="container">
      <Provider store={store}>
        <Form />
        <List/> 
      </Provider>
    </div>
  );
}

export default App;
