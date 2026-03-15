import React from 'react'
import { getImageUrl } from '../utils';
import { useLocation } from 'react-router';

export const Receita = () => {
  const location = useLocation();  
  let { receitaname, ingredients, instructions } = location.state;
    
  return (
    <div className='receita_wrapper border-gray-300 border-2'>      
      <section className="receita flex ">
        <img src={getImageUrl('pao.jpg')} alt="current recipe image" />
        <div className='details_wrapper'>
          <h1 className='text-4xl title_heading mb-3'>Receita {receitaname}</h1>
          <div className="ingredients_wrapper">
            <strong className="text-2xl">
              <i className="text-red-500 fa-solid fa-spoon mr-2"></i>
              Ingredientes
            </strong>
            <ul className='mt-3 mb-10'>
              {ingredients.map((value, key)=> {
                return  <li key={key}>
                  <i className="fa-solid fa-circle mr-3"></i>
                  {value.name}
                </li>
              })}
            </ul>
            <strong className="text-2xl">
              <i className="text-red-500 fa-solid fa-mortar-pestle mr-2"></i>
              Como fazer
            </strong>
            <ol className='instructions_list mt-3'>
              {instructions.map((value, key)=> {
                  return  <li key={key}>
                    {value}
                  </li>
                })}
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Receita