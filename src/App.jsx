import React, { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './component/Footer';
import Loadding from './component/loadding';
import NavbarComponent from './component/Navbar';
import { DataProduct } from './data/data';
import { getTolocalStorage } from './data/localstorage';
import Home from './page/Home';
import counterSlice from './reducer/reducer';

const Register = React.lazy(() => import('./page/register'))
const DetailProduct = React.lazy(() => import('./page/DetailPage'))
const Login = React.lazy(() => import('./page/Login'))
const Shop = React.lazy(() => import('./page/Shop'))
const Checkout = React.lazy(() => import('./page/CheckOut'));
const Cart = React.lazy(() => import('./page/Cart'))

function App() {
  const dispart = useDispatch()
  useEffect(() => {
    const data = async () => await DataProduct().then((e) => { dispart(counterSlice.actions.updateDatapageHome(e)); console.log('e', e) })
    data()
    const usedata = getTolocalStorage('usedata')
    console.log(usedata)
    if (usedata && usedata.length > 0) { dispart(counterSlice.actions.addcartlocalstorage(usedata)) }
  }, [])
  return (
    <div className="App">
      <BrowserRouter >
        <NavbarComponent />
        <Suspense fallback={
          <div style={{ width: '100%', height: '1000px' }}>
            <Loadding />
          </div>
        }>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/detail/:ID' element={<DetailProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Suspense>
        <FooterComponent />
      </BrowserRouter>

    </div>
  );
}

export default App;
