import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './assets/components/Login';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './assets/components/SignUp';
import './assets/css/style.css';
import './assets/css/buttons.css';
import Home from './assets/components/Home';
import NavItems from './assets/components/NavItems';
import Footer from './assets/components/Footer';
import Venues from './assets/components/Venues';
import Game from './assets/components/Game';
import SlotBook from './assets/components/SlotBook';
import Pay from './assets/components/Pay';
import PayNow from './assets/components/PayNow';
import About from './assets/components/About';
import Message from './assets/components/Message';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/Navbar' element={<NavItems />} />
      <Route path='/venues' element={<Venues />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/game' element={<Game />} />
      <Route path='/slotBook' element={<SlotBook />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/paynow' element={<PayNow />} />
      <Route path='/about' element={<About />} />
      <Route path ='/message' element={<Message />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
