
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from '../context/CartContext';
import { DarkModeProvider } from '../context/DarkModeContext.js';

import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
export const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <DarkModeProvider>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        </DarkModeProvider>
        </CarritoProvider>
      </BrowserRouter>

    </>

  )
}


