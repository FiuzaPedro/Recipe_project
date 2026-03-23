import React, { useState } from 'react'
import { all_receitas } from '../receitas_with_cooktime';
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
    document.getElementById('all_receitas').scrollIntoView({ behavior: 'smooth' });    
  }
  
  //function to scroll back up
  function scrollUp() {
    document.getElementById('lista_title')?.scrollIntoView({ behavior: 'smooth' });
  }


  //global var to change state of the receita list in the mobile view
  var currentState, receitas_list_height;          
  //function to show sidemenu in mobile
  function toggle_menu() {
    receitas_list_height = document.getElementById('receita_list').offsetHeight;
        
    if(currentState === "open"  ) {
      document.getElementById('receita_list').style.marginLeft = "-100%";
      document.getElementById('all_receitas').style.marginTop = "-"+ receitas_list_height + "px";
      currentState = "closed";      
      // document.querySelector('em').innerText ='Ver Lista';
      document.getElementById('toggle_menu').style.cssText = "background-color: White; color:black";
    } else {
      document.getElementById('receita_list').style.marginLeft = 0; 
      document.getElementById('all_receitas').style.marginTop = 0;     
      currentState = "open";
      // document.querySelector('em').innerText ='Remover Lista';
      document.getElementById('toggle_menu').style.cssText ="background-color: darkgoldenrod; color:white ";
    }
  }

  return (
    <div className='receita_list_container'>
      <div id='menu_wrapper' className="flex justify-between bg-amber-500 p-2 text-white text-3xl menu_wrapper">        
        <h2 id='lista_title' className=""><a href="/" className='  hover:text-red-400'>
          <i className="fa-solid fa-home mr-3"></i>          
        </a>Lista de Receitas</h2>        
        <span id='toggle_menu' onClick={toggle_menu} className='text-xl bg-white text-black px-3 rounded-3xl'>
          <em className='font-bold text-sm mr-2'>Lista</em>
          <i className="fa-solid fa-list "></i>
        </span>
      </div>
      <ul className='receita_list' id='receita_list'>        
        {all_receitas[0].categories.map((cat, key) => {
            return <li key={key} className='categoria_item p-2 '>
              <a onClick={openReceitasByCategory} id={cat.id} className='categoria_link p-3' href="#">{cat.name}</a>
              </li>
        })}
      </ul>      
      
      <div className="all_receitas_wrapper " id='all_receitas'>        
        {receitas.length === 0 ? 
          <h1 id='receita_h1' className='text-6xl mt-10 w-full text-center'>Bem vindos às receitas da Isa</h1>
          : ""
        }
        <div className="receitas_wrapper">
          {receitas.map((value, key)=>{
            let currentIngredients = [];
            currentIngredients.push(value.ingredients);
            
            return <div key={key} className=' text-white receita_card'>
              <h2 className='text-2xl'>{value.name}</h2>
              {console.log(getImageUrl(value.id + '.png').split('/src/'))
              }
              {getImageUrl(value.id + '.png').split('/src/')[1] !== 'undefined' ?
                <img src={getImageUrl( value.id +'.png')} alt="respective recipe image" /> 
              :
                <span className='p-3 bg-gray-300 flex items-center rounded'>
                  <i className="fa-solid fa-heart-crack  text-3xl text-red-500"></i>Imagem não disponível
                  </span>
              }
              
              
              <Link 
                to="/receita" 
                state={{ image: value.id +'.png', receitaname: value.name, ingredients: value.ingredients, instructions: value.instructions, cooktime: value.cookTime }} 
                className='link_receita'>
              Ver Receita
              </Link>              
              </div>
            })}
        </div>            
      </div>   
      {/* <Footer />  */}
      <div className="arrow" onClick={scrollUp}>
        <i className="fa-solid fa-circle-arrow-up text-5xl text-amber-500"></i>
      </div>
    </div>
  )
}
export default ListaReceitas