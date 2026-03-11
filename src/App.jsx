import { useEffect } from 'react'
import './App.css'
import { getImageUrl } from '../src/utils';
import {Sobre} from './components/Sobre';
import { ListaReceitas } from './components/ListaReceitas';
import { Receita } from './components/Receita';

function App() {
  useEffect(() => {
    fetch('/src/receitas.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);  
      })
      .catch(error => {
        console.log('Error:', error);  
      });
  }, []); 

  return (
    <>
      <div>
        <h1 id='main_title' className='bg-amber-500 text-e p-5 text-2xl flex items-center'>
          {/* <a href="https://www.flaticon.com/free-icons/chef-hat" title="chef hat icons">Chef hat icons created by Graphix's Art - Flaticon</a> */}
          <img className='hat_icon mr-1' src={getImageUrl('food.png')} alt="cook hat icon" />
          <span className='text-white'>Receitas da Isabel</span>
        </h1>
      </div>      
      <Sobre />
      <ListaReceitas />
      <Receita />
    </>
  )
}

export default App
