import Navbar1 from "./components/Nav1";
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";


function App() {
  return (
    
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />}/>
          </Routes>
        </div>
    
  )
}

export default App;


