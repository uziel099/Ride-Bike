import React from "react"
import { Boton } from "../componente/Boton"
import './Hero.css'
import '../App.css'

function Hero(){
    return(
        
        <div className='hero-container'>
            <video src= 'videos/video4.mp4' autoPlay loop muted/>
            <h1> BIENVENIDOS A RIDEBIKE </h1>
            <h3>"Diseños, piezas, equipo y mas" </h3>
            <p>Somos la mejor tienda con las mejores bicicletas.</p>
            <div className='hero-btns'>
                <Boton className='btn' buttonStyle='btn--outline' buttonSize='btn--medium'>
                    COMENZAR
                </Boton>
                <Boton className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    MAS INFORMACION
                </Boton>
            </div>
        </div>
    )
}
export default Hero