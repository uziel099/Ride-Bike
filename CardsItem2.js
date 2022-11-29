import React from "react";
import { Link } from 'react-router-dom';

function CardsItem2 (props){
    return(
        <li className='cards_item'>
            <div className='cards_item_link'>
                
                <img src={props.src} alt='imagenes' className='cards_item_img'/>
               
                <div className='cards_item_info'>
                    <h5 className='cards_item_text'>{props.text} </h5>
                </div>
                <div className="contenedor-precio">
                    <h2 className="precio">{props.precio}</h2>
                </div>
            </div>
        </li>
    );
}
export default CardsItem2;