import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
