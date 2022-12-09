import { LoginView } from "./View/Login/LoginView";
import { RegisterView } from "./View/Register/RegisterView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClinicalHistory from "./View/ClinicalHistory/ClinicalHistory";
import CicloLectivo from "./View/CicloLectivo/CicloLectivo";
import Footer from "./components/Footer/Footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home";
import LoadPhoto from "./components/LoadPhoto/LoadPhoto.jsx";
import { AuthProvider } from "./hooks/Context/AuthContext";
import { Profile } from "./View/Profile/Profile";

import {Carousel} from "./Views/Carousel/Carousel.jsx"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter className="App">
        <NavBar />
        <Routes>
        <Route path="/login" element={<LoginView />} />
          <Route path="/" element={<Home />} />
          <Route path="/destacados" element={<LoadPhoto />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/clinicalHistory" element={<ClinicalHistory />} />
          <Route path="/cicloLectivo" element={<CicloLectivo />} />       
		  <Route path="/miperfil" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    
 
    
  );
}

export default App;