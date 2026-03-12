import React from 'react'
import { receitas } from '../receitas';
export const ListaReceitas = () => {  
  
  return (
    <div className=''>
      <h2 className="bg-amber-500 p-2 text-white text-3xl">Lista de Receitas: </h2>
      <ul className='receita_list'>        
        {receitas[0].categories.map((cat, key) => {
            return  <li key={key} className='categoria_item'>{cat.name}</li>
        })}
      </ul>      
    </div>
  )
}
