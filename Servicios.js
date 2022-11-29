import React from "react";
import '../../App.css';
import './Servicios.css'
import CardsItem2 from "../CardsItem2"
import Footer from '../Footer';

export default function Servicios(){
    return <><h1 className="servicios">Servicios</h1><>
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_item">
                    <CardsItem2
                        src="imagenes/mantenimientofre.png"
                        text=""
                        precio='Mantenimiento de frenos' />
                    <CardsItem2
                        src="imagenes/mantesuspension.png"
                        text=""
                        precio='Mantenimiento de suspension' />
                    <CardsItem2
                        src="imagenes/tubeless.png"
                        text=""
                      precio='Tubeless' />
                </ul>
            </div>
        </div>
        <Footer/>
    </></>

}