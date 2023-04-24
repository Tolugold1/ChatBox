import './App.scss';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import SignIn from './Components/Signup/Signin';
import DisplayUI from './Components/ChatBox/DisplayUI';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/Home' element={<DisplayUI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
