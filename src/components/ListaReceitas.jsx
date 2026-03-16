import React, { useState } from 'react'
import { all_receitas } from '../receitas';
import { getImageUrl } from '../utils';
import { Link } from 'react-router';
import { Footer } from './Footer';

export const ListaReceitas = () => {    
  const [receitas, setReceitas] = useState([]);

  // function to show respective recipes according to their category
  function openReceitasByCategory(e) {    
    e.preventDefault();        
    document.querySelectorAll('.categoria_item').forEach(item=> {      
      item.classList.remove('active');
    })
    document.getElementById(e.target.id).parentNode.classList.add('active');
    all_receitas[0].categories.map(receita => {      
      receita.id === e.target.id ? setReceitas(receita.recipes) : "";         
    })    
  }

  return (
    <div className='receita_list_container'>
      <h2 className="bg-amber-500 p-2 text-white text-3xl">Lista de Receitas</h2>      
      <ul className='receita_list'>        
        {all_receitas[0].categories.map((cat, key) => {
            return <li key={key} className='categoria_item p-3'>
              <a onClick={openReceitasByCategory} id={cat.id} className='categoria_link p-3' href="#">{cat.name}</a>
              </li>
        })}
      </ul>      
      
      <div className="all_receitas_wrapper " id='all_receitas'>        
        {receitas.length === 0 ? 
          <h1 className='text-6xl mt-10 w-full text-center'>Escolha a categoria desejada</h1>
          : ""
        }
        <div className="receitas_wrapper">
          {receitas.map((value, key)=>{
            let currentIngredients = [];
            currentIngredients.push(value.ingredients);
            console.log(currentIngredients);
            
            return <div key={key} className=' text-white receita_card'>
              <h2 className='text-2xl'>{value.name}</h2>
              <img src={getImageUrl('tartemaca.jpg')} alt="respective recipe image" />              
              <Link 
                to="/receita" 
                state={{ receitaname: value.name, ingredients: value.ingredients, instructions: value.instructions }} 
                className='link_receita'>
              Ver Receita
              </Link>              
              </div>
            })}
        </div>            
      </div>   
      <Footer />   
    </div>
  )
}
export default ListaReceitas