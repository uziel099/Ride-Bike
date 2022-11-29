import React from "react";
import '../../App.css';
import CardsItem5 from "../CardsItem5"
import Footer from '../Footer';

export default function OLCI(){
    return <><h1 className="servicios"> RIDEBIKE </h1><>
     
    <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_item">
                    <CardsItem5
                        src="imagenes/imagen22.jpg"
                        text=""
                        precio='Objetivos' />
                    <CardsItem5
                        src="imagenes/imagen21.jpg"
                        text=""
                        precio=' Misión' />
                    <CardsItem5
                        src="imagenes/imagen23.jpg"
                        text=""
                        precio='Visión' />
                        <CardsItem5
                        src="imagenes/imagen26.jpg"
                        text=""
                        precio='Metas' />
                </ul>
            </div>
        </div>
        <Footer/>
    </></>

}