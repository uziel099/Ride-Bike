import React from "react";
import '../../App.css';
import CardsItem2 from "../CardsItem3"
import Footer from '../Footer';


export default function Contacto(){
    return  <><h1 className="productos">Contacto</h1>
     <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_item">
                    <CardsItem2
                        src="imagenes/imagen18.jpg"
                        text=""
                        precio='Numeros Telefónicos' />
                    <CardsItem2
                        src="imagenes/imagen2.jpg"
                        text=""
                        precio='Atención a clientes' />
                    <CardsItem2
                        src="imagenes/imagen19.jpg"
                        text=""
                        precio='Correo electrónico' />
                </ul>
            </div>
        </div>
        <Footer/>
    </>
}