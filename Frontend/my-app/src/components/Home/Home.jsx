import React, {useState} from 'react'
import '../Home/Home.css'
import NavBar from '../NavBar/NavBar'
import Destacados from './Destacados'
import { Link } from 'react-router-dom';
import { Carousel } from '../../Views/Carousel/Carousel';
import axios from 'axios';

export default function Home() {

  
  const [user, setUser] = useState([]);

  

  const getUser = () => {
    axios.get("https://s5-03-java-react-production.up.railway.app/user/getByJWT",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then((response) => {
    setUser(response.data)
    console.log(response.data)
  })}
  


  return (
    <div className='container jCCenter'>
        <header >
          
            <div className='bgImg divHomeMobile'>
                <h1 >LifeBook</h1>
                <Link to='/load'>
                  <button className='btnHome'>Crear Publicación</button>
                </Link>
                <p className=''>Tu nueva forma de guardar recuerdos</p>
                {/* <NavBar/> */}
            </div>
            <Carousel/>
            <Destacados/>
            <button className='btnHome' type='buton' placeholder='boton prueba' onClick={getUser}>LLamado</button>
        </header>
        
    </div>
  )
}
