import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateQuiz from './components/CreateQuiz';
import PlayQuiz from './components/PlayQuiz';
import DashBoard from './components/DashBoard';
import UnAuthorized from './components/UnAuthorized';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          {
            localStorage.getItem("quiz-token") ? <>
              <Route path="/createQuiz" element={<CreateQuiz />} />
              <Route path="/playQuiz" element={<PlayQuiz />} />
              <Route path="/DashBoard" element={<DashBoard />} />
            </> :
            <>
               <Route path="/createQuiz" element={<UnAuthorized />} />
              <Route path="/playQuiz" element={<UnAuthorized />} />
              <Route path="/DashBoard" element={<UnAuthorized />} />
            </>
          }

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
