import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SearchResults from './pages/SearchResults';
import Cart from './pages/cartPage';
import { CartProvider } from './contexts/CartContext';


function App() {
  return (
    <CartProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='search' element={<SearchResults />}/>
            <Route path='/cart' element={<Cart />} /> 
          </Routes>
        </div>
    </CartProvider>
        
    
  )
}

export default App;


