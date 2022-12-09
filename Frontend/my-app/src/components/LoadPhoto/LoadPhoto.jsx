import React from 'react';
import NavBar from '../NavBar/NavBar';
import './LoadPhoto.css';
import {useState} from 'react'
export default function LoadPhoto() {
    const [ImagePrevious, setImagePrevious] = useState(null);
    const changeImage = (e)=>{
        const reader = new FileReader(); 
        reader.readAsDataURL(e.target.files[0])
        reader.onload= (e)=>{
            e.preventDefault();
            setImagePrevious(e.target.result);
        }
    }

    return (
        <div className='bgGral'>
            <h1 className='titleLoad'>Momento Destacado</h1>
            <div className='divMomentos'>
                <div className='divCarga'>
                    <h6>Cargar imagen</h6>
                    <h6 className='vistaPrevia'>Vista Previa</h6>
                </div>
                <div className='columnDivMoment'>
                    <div className=' widthTitle'>
                        <div >
                            <label className='fontStyleMomentos'>Título</label>
                            <input type="text" className='borderInputOne' />
                        </div>
                        <div >
                            <label className="fontStyleMomentos">Descripción</label>
                            <textarea className="borderInputThree" style={{ height: "100px" }} />
                        </div>
                    </div>  
                    <div className='contornosImg' >
                        
                           <div className="borderInputTwo heightImg"> 
                                 
                                <img src={ImagePrevious} alt="Cargar" />
                                <input className='disabled' type="file" accept='image/*' multiple onChange={e => changeImage(e)} />
                            </div>
                            
                        
                        <div className='padButton'>
                            <button className='marButtonCancel fontStyleMomentosButton'>Cancelar</button>
                            <button className='marButtonPublic fontStyleMomentosButton'>Publicar</button>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}
