import React, { Component } from 'react'
import { getImageUrl } from '../utils'
export const Sobre = () => {
    return<>
        <div className='div_sobre flex'>
            <h2 className='text-6xl text-white'>Receitas portuguesas caseiras</h2>
        </div>
        <div className='welcome_card flex p-6'>
            <div className='welcome_img_wrapper w-1/2 h-1/2 mr-10'>
                <img src={getImageUrl('tartemaca.jpg')} alt="welcome food image" />
            </div>
            <div className="welcome_text_wrapper">
                 <div className="title-sec">
                    <h2 className="title_heading text-5xl">Acerca das receitas</h2>
                        <p className='underline text-xl mt-2'>São de autoria totalmente caseira e de qualidade assegurada</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p>                        
                        <a href="/receitas" className="btn_lista_receitas">Lista de Receitas</a>
                </div>
            </div>
        </div>
    </>
}
