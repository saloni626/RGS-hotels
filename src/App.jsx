import { Route, Routes } from "react-router-dom"
import { HotelHomePage } from "./components/Home"
import Nav from "./components/Nav"
import {Login} from "./components/Login" 
import Rooms from "./components/room"
import About from "./components/About"
import Contact from "./components/Contact"
import { Notfound } from "./components/Notfound"
const App=()=>{

  return<>
  <div style={ {
    display: "flex",flexDirection: "column",minHeight:"100vh"
  }}>
  <div style={{ flex: 1}}>
<Nav/>
   <Routes>
<Route path="/" element={<HotelHomePage/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path ="/Rooms" element = {<Rooms/>}/>
<Route path ="/Login" element = {<Login/>}/>

<Route path="*" element={<Notfound/>}/>
</Routes>
  
</div>
</div>
    
    </>
}

export default App