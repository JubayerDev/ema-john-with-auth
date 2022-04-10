import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
// import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={ <Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
