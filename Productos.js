import React from "react";
import '../../App.css';
import CardsItem4 from "../CardsItem4"
import Footer from '../Footer';

export default function Productos(){
    return  <><h1 className="productos">Productos</h1>
     <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_item">
                    <CardsItem4
                        src="imagenes/coclash.png"
                        text=""
                        precio='Commencal Clash $57000' />
                    <CardsItem4
                        src="imagenes/enduro.png"
                        text=""
                        precio='Specialized $125000' />
                    <CardsItem4
                        src="imagenes/hightower.png"
                        text=""
                        precio='Santa Cruz Hightower $96250' />
                        <CardsItem4
                        src="imagenes/ex8.png"
                        text=""
                        precio='Trek Fuel EX8 $98700' />
                </ul>
            </div>
        </div>
        <Footer/>
 </>
}