import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import Promotion from './pages/Promotion';
import Order from './pages/Order';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Test from './pages/Test';
import Mains from './pages/menuitems/Mains';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/about-us" element ={<AboutUs/>}/>
      <Route path='/promotion' element ={<Promotion/>}/>
      <Route path="/order" element = {<Order/>} />
      <Route path="/menu" element = {<Menu/>}/>
      <Route path="/contactus" element = {<ContactUs/>}/>
      <Route path="/test" element = {<Test/>}/>
      <Route path= "/menu/mains" element={<Mains/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
