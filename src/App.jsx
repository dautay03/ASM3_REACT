import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './component/Footer';
import NavbarComponent from './component/Navbar';
import { DataProduct } from './data/data';
import Cart from './page/Cart';
import Checkout from './page/CheckOut';
import DetailProduct from './page/DetailPage';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/register';
import Shop from './page/Shop';
import counterSlice from './reducer/reducer';

function App() {
  const dispart = useDispatch()
  useEffect(() => {
    const data = async () => await DataProduct().then((e) => { dispart(counterSlice.actions.updateDatapageHome(e)); console.log('e', e) })
    data()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/detail/:ID' element={<DetailProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>

    </div>
  );
}

export default App;
