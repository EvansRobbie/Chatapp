
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'


function App() {

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/signIn' element={ <Signup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
     
     
    </div>
  )
}

export default App
