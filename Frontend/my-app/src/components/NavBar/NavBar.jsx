import React from 'react'
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {

  
  

  return (
    <>

      <nav className='navCentro '>
        <div className='styleNav navMobile'>
          
          <div className='sizeDiv1'>
            <img className='sizeImg' src="../assets/LifeBook.png" alt="Logo de la marca" />

          </div>

          <div className='divUl'>
            <ul className='ulNav'>
              <Link to='/' className='liNav'>
                <li >
                  Inicio
                </li>
              </Link>
              <Link to='/destacados' className='liNav'>
                <li >
                  Destacados
                </li>
              </Link>
<<<<<<< HEAD
              <Link to='/cicloLectivo' className='liNav'>
=======
			  <Link to='/cicloLectivo' className='liNav'>
>>>>>>> a7220f309e4a6c7350a6e56ac32664671a547a50
                <li >
                  Educación
                </li>
              </Link>
              <Link to='/clinicalHistory' className='liNav'>
                <li >
                  Salud
                </li>
              </Link>
              <Link to='/miperfil' className='liNav'>
                <li >
                  Mi Perfil
                </li>
              </Link>
              <Link to='/login' className='liNav'>
                  <li>
                    Login
                  </li>
              </Link>
              
            </ul>
          </div>
        </div>




      </nav>

    </>
  )
}
