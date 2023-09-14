import './styles/App.css'
import Home from './pages/Home'
import Module from './pages/Module'
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import modules_data from './module_data.json'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={'/module/:id'} element={<Module/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
