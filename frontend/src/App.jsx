import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SearchResults from './pages/SearchResults';
import Cart from './pages/cartPage';
import { CartProvider } from './contexts/CartContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <CartProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='search' element={<SearchResults />}/>
            <Route path='/cart' element={<Cart />} /> 
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
    </CartProvider>
        
    
  )
}

export default App;


