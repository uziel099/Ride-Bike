import React from "react";
import { Link } from 'react-router-dom';

function CardsItem (props){
    return(
        <li className='cards_item'>
            <Link className='cards_item_link'to={props.path}>
                
                    <img src={props.src} alt='imagenes' className='cards_item_img'/>
               
                <div className='cards_item_info'>
                    <h5 className='cards_item_text'>{props.text} </h5>
                </div>
            </Link>
        </li>
    );
}
export default CardsItem;