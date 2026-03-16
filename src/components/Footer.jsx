import React from 'react'
import { getImageUrl } from '../utils'

export const Footer = () => {
  return (
    <footer className=' bg-gray-700 text-white text-center'>
        <div className='flex flex-col justify-center'>
            <img className='footer_image' src={getImageUrl('fiuzaprofilepic.jpg')} alt="my profile image" />
            <p className='italic font-bold text-2xl'>Designed by Pedro Fiúza &copy; 2026</p>
        </div>
        <div className="social">
            <ul className='social_list'>
                <li className='social_item text-xl'>
                    <a href="https://www.linkedin.com/in/pedrofiuza79/">
                    <span className="icon_wrapper"><i className="fa-brands fa-square-linkedin "></i></span>
                    linkedin.com/in/pedrofiuza79                    
                    </a>
                </li>
                <li className='social_item text-xl'>
                    <a href="https://www.instagram.com/fiuzatrex/">
                    <span className='icon_wrapper'><i className="fa-brands fa-square-instagram "></i></span>
                    https://www.instagram.com/fiuzatrex/
                    </a>
                </li>
                <li className='social_item text-xl'>
                    <a href="mailto:peterfiuza@gmail.com">
                    <span className="icon_wrapper"><i className="fa-solid fa-envelope "></i></span>peterfiuza@gmail.com</a>
                </li>
            </ul>
        </div>        
    </footer>      
  )
}
