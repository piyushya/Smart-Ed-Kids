import './App.css'
import Home from './pages/Home'
import Module from './pages/Module'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/module/1" element={<Module id={1}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
