import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Context/AuthContext";
import axios from "axios";
import "./RegisterView.css"

export const RegisterView = () => {
    // const [user, setUser] = useState("")
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const onChangeFirstName = (e) => {
      const firstName = e.target.value;
      setfirstName(firstName);
    }

    const onChangeLastName = (e) => {
      const lastName = e.target.value;
      setlastName(lastName);
    }

    const onChangeUsername = (e) => {
      const username = e.target.value;
      setusername(username);
    }

    const onChangeEmail = (e) => {
      const email = e.target.value;
      setemail(email);
    }

    const onChangePassword = (e) => {
      const password = e.target.value;
      setpassword(password);
    }
  // firstName:'',
  // lastName:'',
  // username:'',
  // email: '',
  // password: '',
  /*const {signUp} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState()*/



  // const handleChange = ({target: {name, value}}) => {
  //     setUser({...user,[name]: value})
  // };

  const handleSubmit = e => {
      e.preventDefault()
      console.log(firstName, lastName, username, email, password)
      axios.post('https://s5-03-java-react-production.up.railway.app/auth/register', {
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName,
        username:username
      })
      .then(res => {
        console.log(res)
        navigate('/login')

      })

  }

  return (
    <div className="register">
      <div className="  w-full max-w-xs    ">
        <form className=" bg-white shadow-md rounded-lg px-12 pt-6 pb-8 w-96 float-right mx-56 mt-20" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 text-center font-bold p-4 pb-8">
           Registrar  
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="firstName"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Nombre"
              required
              value={firstName}
              onChange={onChangeFirstName}
              
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="lastName"
            >
              Apellido
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Apellido"
              required
              value={lastName}
              onChange={onChangeLastName}
              
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Nombre de usuario
            </label>
            <input
              className="shadow appearance-none border b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nombre de usuario"
              required
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Mail
            </label>
            <input
              className="shadow appearance-none border b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Mail"
              required
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={onChangePassword} 
              required
            />
          </div>

          <div>
            <button
              className="  block bg-teal-400 hover:bg-teal-600 font-bold text-black uppercase text-lg mx-auto p-2 rounded mt-4"
              type="button"
              onClick={handleSubmit}

            >
              Registrar
            </button>
          </div>
        </form>
      </div>
      <img
        className="ml-16 pt-32"
        src="https://res.cloudinary.com/dytpump6i/image/upload/v1668705729/LifeBook2_2_1_kdgf1m.png"
        alt=""
      />
    </div>
  );
};