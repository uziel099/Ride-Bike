import React from "react";
import CardsItem from "./CardsItem";
import './Cards.css';

function Cards () {
    return (<div className="cards">
    <h1> Conoce nuestros servicios y productos</h1>
<div className="cards_container">
 <div className="cards_wrapper">
    <ul className="cards_item">
        <CardsItem
        src="imagenes/productos.png"
        text="Productos"
        label='En venta'
        path='/productos'
        />
    <CardsItem
    src="imagenes/imagen12.jpg"
    text="Información de nosotros"
    label='OLCI'
    path='/olci'
    />
    <CardsItem
    src="imagenes/imagen20.jpg"
    text="Ubicación"
    label='Registro'    
    path=''
    />
     
    </ul>
    </div>
    </div>
    </div>
    );
}
export default Cards;
