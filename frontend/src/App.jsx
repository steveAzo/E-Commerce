import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SearchResults from './pages/SearchResults';
import Product from './components/products';
import Cart from './pages/cartPage';
import { useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='search' element={<SearchResults />}/>
            <Route path='/cart' element={<Cart cartItems={cartItems} />} /> 
            <Route path='/product/:productId' element={<Product cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
          
          
          
        </div>
    
  )
}

export default App;


