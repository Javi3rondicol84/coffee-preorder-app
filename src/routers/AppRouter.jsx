import MainLayout from '../layouts/mainlayout/MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Cart from '../pages/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router'

export default function AppRouter() {
    return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/cart' element={<Cart />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}