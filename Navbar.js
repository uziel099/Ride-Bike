import React,{Component} from "react";
import {Menultems} from "./MenuItems"
import './Navbar.css'
import logo from '../logo.png'
import {Boton} from '../componente/Boton' 

class Navbar extends Component{

    render(){
        return(
            <nav className="NavbarItems">
            <img  className="logo-imagen" src={logo} alt="logo" /> <strong>RIDEBIKE</strong> 
             <div className="menu-icon">
             </div>
             <ul className="nav-menu">
                 {Menultems.map((item,index)=>{
                     return(
                         <li key={index}>
                             <a className={item.cName} href={item.url}>
                                 {item.title}
                             </a>
                         </li>
                     )
                 })}
             </ul>
             <Boton>Registrarse</Boton>
            </nav>
        )
    }
}
export default Navbar