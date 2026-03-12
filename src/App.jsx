import './App.css'
import { getImageUrl } from '../src/utils';
import {Sobre} from './components/Sobre';
import { ListaReceitas } from './components/ListaReceitas';
import { Receita } from './components/Receita';

function App() {
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
      <footer className='p-3 bg-gray-700 text-white text-center'>Designed by Pedro Fiúza&copy;2026</footer>      
    </>
  )
}

export default App
