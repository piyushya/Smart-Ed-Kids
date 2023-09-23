import './styles/App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Module from './pages/Module'
import Course from './pages/Course'
import Chapter from './pages/Chapter'
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/chapter/:chapter" element={<Chapter />} />
          <Route exact path={'/module/:id'} element={<Module/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
