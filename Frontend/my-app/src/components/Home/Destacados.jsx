import React from "react";
import "./Destacados.css";
import Modals from "../Modals/Modals"

 const defaultList = [
 {
    id: "01",
    title: "agregar un momento destacado 01",
    image: "balones.png",
    loaded: false
 },
 {
    id: "02",
    title: "agregar un momento destacado 01",
    image: "balones.png",
    loaded: false
},
{
    id: "03",
    title: "agregar un momento destacado 02",
    image: "balones.png",
    loaded: false
},
{
    id: "04",
    title: "agregar un momento destacado 0",
    image: "balones.png",
    loaded: false
},

    
]

const Destacados = () => {
    return (
        <>
            <h2 className='h2Home'>Momentos destacados</h2>
            <div className="flex  ">
                {defaultList.map((item, index ) => {
                    const src = require('../../../public/assets/' + item.image);
                    return (
                        <div className='one' key={item.id}>
                            <div className="cardMomentos" style={{ width: '18rem' }}>
                                <img src={src} alt={item.title} className="cardImg" />
                                <div className="cardBlack">
                                    <Modals/> 
                                    {/*{!item.loaded && (
                                
                                    )}*/}
                                    <p >{item.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
                
                


        </>
        
    )



}

export default Destacados

