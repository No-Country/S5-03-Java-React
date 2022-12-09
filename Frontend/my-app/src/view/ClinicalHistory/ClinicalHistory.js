import React from "react";
import "./ClinicalHistory.css";


export default function ClinicalHistory() {
  return (
    <div className="w-screen h-screen">
      <h1 className="relative top-20 left-20 text-black-800 text-5xl font-bold">
        Historia Clínica
      </h1>
	  <div className="grid grid-cols-3 gap-3">
        <div className="">
          <h3 className="años">2020</h3>
          <h3 className="años">2019</h3>
          <h3 className="años">2018</h3>
          <h3 className="años">2017</h3>
        </div>
        <div className="video items-center absolute w-2/4 ml-72 mt-20   ">
          <img
            src="https://res.cloudinary.com/djllzjsij/image/upload/v1670184929/Lifebook%20files/Group_29_p7afzu.png"
            alt="imagen de carga de video"
          />
        </div>
        <div className="compas col-end-7 col-span-2 mr-12 mt-16 w-72  h-60">
          <div className="">
            <div className="grid grid-cols-2 gap-2 " >
              <img
                src="https://res.cloudinary.com/djllzjsij/image/upload/v1670184928/Lifebook%20files/Rectangle_597_g5wsp1.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/djllzjsij/image/upload/v1670184929/Lifebook%20files/Rectangle_598_v6evog.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/djllzjsij/image/upload/v1670184928/Lifebook%20files/Rectangle_599_hb61hn.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/djllzjsij/image/upload/v1670184929/Lifebook%20files/Rectangle_601_sqtz21.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/djllzjsij/image/upload/v1670184928/Lifebook%20files/Rectangle_600_eyawan.png"
                alt="imagen de carga de video"
              />
              <img
                src="https://res.cloudinary.com/djllzjsij/image/upload/v1670184929/Lifebook%20files/Rectangle_602_g7akag.png"
                alt="imagen de carga de video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}