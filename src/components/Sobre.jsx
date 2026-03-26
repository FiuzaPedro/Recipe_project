import React, { Component, useEffect } from 'react'
import { getImageUrl } from '../utils'
export const Sobre = () => {    
    var indice = 0;
    function slideshow() {
    let sobre = document.getElementById('div_sobre');    
    let arrayImages = [
        getImageUrl('pao.png'),
        getImageUrl('tarte_de_maca.png'),
        getImageUrl('paella.png')   
        ];        
    
        sobre.style.backgroundPosition = "-150vw";
        setTimeout(() => {
            sobre.style.backgroundImage = "url('"+ arrayImages[indice] +"')" ;
            sobre.style.backgroundPosition = "center";    
            indice+=1;
        }, 2500);        
        if (indice === 3) {
            indice = 0
        }
    }

    useEffect(() => {        
        setInterval(slideshow, 7500)
    },[])
    
    return<>
        <div className='div_sobre flex' id='div_sobre'>
            <h2 className='text-6xl text-white'>Receitas caseiras da Isa</h2>
        </div>
        <div className='welcome_card flex p-6'>
            <div className='welcome_img_wrapper w-1/2 h-1/2 mr-10'>
                <img className='image_welcome' src={getImageUrl('tartemaca.jpg')} alt="welcome food image" />
            </div>
            <div className="welcome_text_wrapper">
                 <div className="title-sec">
                    <h2 className="title_heading text-5xl">Acerca das receitas</h2>
                        <p className='underline text-xl my-2'>São de autoria totalmente caseira e de qualidade assegurada</p>
                        <blockquote className='text-xl italic'>
                            <i className="fa-solid fa-quote-left text-2xl"></i>Sempre gostei de cozinhar e estas receitas de comidas e doces foram escolhidas por serem as minhas preferidas para oferecer aos meus filhos e netos. Mas espero que quem as leia fique motivado para as querer passar do papel para o tacho.
                            <i className="fa-solid fa-quote-right text-2xl"></i>
                        </blockquote>
                        <p className='chef text-3xl'><em className='flex items-center'><img className='h-10 inline mr-1' src={getImageUrl('food.png')} alt="cook hat icon" />Isabel</em></p>
                        <a href="/receitas" className="btn_lista_receitas">Lista de Receitas</a>
                </div>
            </div>
        </div>
    </>
}
