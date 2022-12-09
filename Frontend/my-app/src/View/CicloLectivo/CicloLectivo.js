import React from "react";
import "./ciclo.css";

const CicloLectivo = () => {
  return (
    <div>
      <nav className="barra">
        <ul className="barraNavegacion">
          <li className="opciones">Home</li>
          <li className="opciones"> </li>
          <li className="opciones">Ciclo Lectivo</li>
        </ul>
      </nav>
      <div className="ciclo">
        <h3>Ciclo lectivo</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="content">
          <h3 className="años">2020</h3>
          <h3 className="años">2019</h3>
          <h3 className="años">2018</h3>
          <h3 className="años">2017</h3>
        </div>
        <div className=" items-center absolute w-2/4 ml-72 mt-20   ">
          <img
            src="https://res.cloudinary.com/dytpump6i/image/upload/v1670184232/video_ha5nru.png"
            alt="imagen de carga de video"
          />
        </div>
        <div className="compas col-end-7 col-span-2 mr-12 mt-16 w-72  h-60">
          <div className="">
            <h3>Mis compañeros</h3>
            <div className="grid grid-cols-2 gap-2 " >
              <img
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1670199278/Rectangle_597_haklpz.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1670199463/Rectangle_600-1_sf2ztu.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1670199529/Rectangle_598_o2fcrs.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1670184203/Rectangle_599_sbsync.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1670184195/Rectangle_598_tqb4lz.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1670184224/Rectangle_602_qmoag4.png"
                alt="imagen de carga de video"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cuadrito">
        <h2>lorem ipsum</h2>
      </div>
    </div>
  );
};

export default CicloLectivo;
