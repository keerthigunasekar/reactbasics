import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Lifecycle from './pages/LifeCycle'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Vote from './pages/Vote';
import Products from './pages/Products';
import data from './pages/data';

function App() {

  const [product,setProduct]=useState([])

useEffect(()=>{
  setProduct(data)
},[])


  return (
    <>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lifecycle">Lifecycle</Link></li>
        <li><Link to="/vote">Vote</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<HomePage   name="MSD" age="42"/> } />
      <Route path='/lifecycle' element={<Lifecycle /> } />
      <Route path='/vote' element={<Vote /> } />
      <Route path='/product' element={<Products product={product} /> } />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

// props -> properties ( class , function )

// state => (class) , statefull component - class component

// stateless component - function component
// function -> state => react HOOKS
