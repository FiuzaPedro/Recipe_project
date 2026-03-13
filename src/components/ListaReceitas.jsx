import React, { useState } from 'react'
import { all_receitas } from '../receitas';

export const ListaReceitas = () => {    
  const [receitas, setReceitas] = useState([]);

  // function to show respective recipes according to their category
  function openReceitasByCategory(e) {    
    e.preventDefault();    
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
      
      <div className="all_receitas_wrapper" id='all_receitas'>        
        {receitas.map((value, key)=>{ return <h1 key={key} className='bg-red-700 text-white'>{value.name}</h1>})}            
      </div>      
    </div>
  )
}
export default ListaReceitas