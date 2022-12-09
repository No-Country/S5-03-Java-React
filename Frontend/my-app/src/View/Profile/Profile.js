import React ,{ useState }from "react";
import { useAuth } from "../../hooks/Context/AuthContext";
import "./Profile.css";

export function Profile () {

	const [fisrtName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")	
	const [email, setEmail] = useState("")

	

	const auth = useAuth()
	return (
	<div className="w-screen h-screen">
        <div><h1 className="relative flex  ml-24 w-2/4 mt-20  text-black-800 text-5xl font-bold">{auth.user}</h1></div>
		<div className="absolute usuario ml-48 mt-20">
			<img src="https://res.cloudinary.com/djllzjsij/image/upload/v1670371062/User-60_pxn9lz.svg" alt="foto-usuario"></img>
			
		</div>

	<div className=" mt-72 mr-12 mb-2  h-64  ml-52 ">
	<form action="">


<div className="div1 ml-60">
  
  <label for="name" className="inline-block w-20 mr-6 text-right font-bold text-gray-600">Nombre</label>
  <input type="text" id="nombre" name="nombre" placeholder="" size="50" className=" py-2 border-b-2 border-gray-400 
				text-gray-600 placeholder-gray-400
				outline-none" />
</div>

<div className="div2 ml-60">
  <label className="inline-block w-20 mr-6 text-right font-bold text-gray-600">Apellido</label>
  <input type="text" id="apellido" name="apellido" placeholder="" size="50"
		 class=" py-2 border-b-2 border-gray-400  
				text-gray-600
				placeholder-gray-400 outline-none" />
				</div>


<div className="div4 ml-60">
  <label className="inline-block w-20 mr-6 text-right font-bold text-gray-600">Mail</label>
  <input type="text" id="mail" name="mail" placeholder="" size="50"
		 class=" py-2 border-b-2 border-gray-400  
				text-gray-600
				placeholder-gray-400 outline-none" />  
</div>
<div class="text-right mt-32 mr-32">
        <button className="boton py-3 px-8 text-black font-bold">Actualizar perfil</button> 
      </div>

</form>
	</div>
		
	</div>
	);
};
