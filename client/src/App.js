import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Konum from "./components/Home/Konum";
import Araclarim from "./components/Aracim/Araclarim";
import Profil from "./components/Home/Profil";

function App() {


  const user = localStorage.getItem("token");

  return (
	 
    <Routes>
    
      {user && <Route path="/home" exact element={<Home />} />}
      {user && <Route path="/konum" exact element={<Konum />} />}
      {user && <Route path="/araclarim" exact element={<Araclarim />} />}
      {user && <Route path="/profil" exact element={<Profil />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />

	</Routes>
	
  );
}

export default App;
