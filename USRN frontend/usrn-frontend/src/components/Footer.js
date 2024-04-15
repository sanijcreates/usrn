import React from 'react';
import "./Footer.css"
import { AiFillInstagram, AiOutlineTwitter,AiFillFacebook} from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <div className='footer__main'>
                <div className="footer__redes">
                    <div className='footer__icon'>
                        <AiOutlineTwitter />
                    </div>
                    <div className='footer__icon'>
                        <AiFillInstagram />
                    </div>
                    <div className='footer__icon'>
                        <AiFillFacebook />
                    </div> 
                </div>
                <p className="copyright">Copyright @ 2024</p>
            </div>
        </footer>
            /* <ul className="footer__redes-wrapper">
                <li>
                    <a href="#" className="footer__link">
                    <AiOutlineTwitter />
                    </a>
                </li>
                <li>
                    <a href="#" className="footer__link">
                    <AiFillInstagram />
                    </a>
                </li>
                <li>
                    <a href="#" className="footer__link">
                    <AiFillFacebook />
                    </a>
                </li>
            </ul> */
       
        )
}