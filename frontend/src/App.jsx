import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SearchResults from './pages/SearchResults';


function App() {
  return (
    
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path='search' element={<SearchResults />}/>
          </Routes>
        </div>
    
  )
}

export default App;


