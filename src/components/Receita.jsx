import React from 'react'
import { getImageUrl } from '../utils';
import { useLocation } from 'react-router';
import { Footer } from './Footer';


export const Receita = () => {
  const location = useLocation();  
  console.log(location);
  
  let { receitaname, ingredients, instructions, image } = location.state;
  if(ingredients === undefined || instructions === undefined) {
    return <h1 className='bg-red-600 text-white p-10 text-6xl'>Esta receita ainda não tem os dados respectivos!</h1>
  };
    
    
  return (
    <div className='receita_wrapper border-gray-300 border-2'>
      <div className='bg-amber-700 p-3 nav_wrapper'>
        <a href="/" className='text-white font-bold mr-3  hover:text-amber-400'>
          <i className="fa-solid fa-home text-3xl align-middle mr-2"></i>
          Homepage
        </a>
        <a href="receitas" className='text-white font-bold mr-3 ml-5 hover:text-amber-400'>
          <i className="fa-solid fa-book-open text-3xl align-middle mr-2"></i>
          Lista de Receitas
        </a>
      </div>
      <section className="receita flex ">
        <img src={getImageUrl( image )} alt="current recipe image" />
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
      <Footer />
    </div>
  )
}

export default Receita