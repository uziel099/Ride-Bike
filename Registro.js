import React,{useState} from "react";
import Axios from "axios";
import '../../App.css';
import './Registro.css'
import Footer from '../Footer';


export default function Registro(){
        const [usernameReg, setUsernameReg] = useState('')
        const [passwordReg, setPasswordReg] = useState('')
        
        const registro = () =>{
          Axios.post("http://localhost:3001/registro",{
            nombre:usernameReg,
            password:passwordReg,
          }).then((response)=>{
            console.log(response);
          });
        };
        return <div>
          <div className="App1">
           <div className="registro1">
             <h1>Registro</h1>
             <lable className="Nombre">Correo electrónico</lable>
             <input type="text" onChange={
               (e)=>{setUsernameReg(e.target.value)}}/>
               <lable className="Nombre">Contraseña</lable>
               <input type="text" onChange={
               (e)=>{setPasswordReg(e.target.value)}}/>
              <button onClick={registro}>Registro</button>
             </div> 
          </div>
          <Footer/>
          </div>
    
}