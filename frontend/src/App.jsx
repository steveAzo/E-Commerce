import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SearchResults from './pages/SearchResults';
import Cart from './pages/cartPage';
import Product from './components/products';
import { useState } from 'react';


function App() {
  const [selectedProducts, setSelectedProducts] = useState([])
  return (
    
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='search' element={<SearchResults />}/>
          </Routes>
          <div>
            
          </div>
        </div>
    
  )
}

export default App;


