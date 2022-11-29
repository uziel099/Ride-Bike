import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import facebook from '../facebookicon.png'
import intragram from '../instagramicon.png'
import twitter from '../twittericon.png'
import youtube from '../youtubeicon.png'

function Footer(){
    return(
        <div className='footer-container'>
        <div className='footer-subscription'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Unete y se parte de esta familia
                </p>
                <p className='footer-subscription-text'>
                    Puedes hacer tus pedidos en cualquier momento del día
                </p>
                <div className='input-areas'>
                <form>
                    
                        </form>        
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                    <h2> Sabias que...</h2>
                    <p>El Ciclismo es un deporte en donde te puedes mantener muy saludable?
                    </p>
                    </div>
                <div className='footer-link-items'>
                    <h2>Estrategias</h2>
                   <p>Utilizar medios de publicidad en las redes sociales y pagina web
                       para que la gente nos conozca
                   </p>

                </div>
            </div>
            <div className='footer-link-wapper'>
                <div className='footer-link-items'>
                    <h2>Redes Sociales</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>Youtube</Link>
                </div>
            </div>
        </div> 
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    </Link>
                </div>
                <small className='website-rights'>Empresa 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
                        <img src={facebook} alt="FacebookLogo"/>
                    </Link>
                    <Link className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'>
                        <img src={intragram} alt="InstagramLogo"/>
                    </Link>
                    <Link className='social-icon-link twitter'
                    to='/' 
                    target='_blank'
                    aria-label='Twitter'>
                        <img src={twitter} alt="TwitterLogo"/>
                    </Link>
                    <Link className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='YouTube'>
                        <img src={youtube} alt="YoutubeLogo"/>
                    </Link>
                </div>
            </div>
            </section> 
    </div>
    </div>
    )
}
export default Footer