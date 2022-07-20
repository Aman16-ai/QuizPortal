import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateQuiz from './pages/CreateQuiz';
import EnterInQuiz from './pages/EnterInQuiz';
import DashBoard from './pages/DashBoard';
import UnAuthorized from './pages/UnAuthorized';
import Play from './pages/Play';


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
              <Route path="/playQuiz" element={<EnterInQuiz />} />
              <Route path="/DashBoard" element={<DashBoard />} />
              <Route path="/quiz/:id" element={<Play />} />
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
