import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/pages/Authentication/Login';
import Signup from './components/pages/Authentication/Signup';
import CreateQuiz from './components/CreateQuiz';
import EnterInQuiz from './components/pages/PlayQuiz/EnterInQuiz';
import DashBoard from './components/DashBoard';
import UnAuthorized from './components/UnAuthorized';
import Play from './components/pages/PlayQuiz/Play';


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
