import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import FirstDiv from "./components/FirstDiv";
import HomePage from "./components/Homepage";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">

    {/* <Router>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router> */}
<HomePage />
    </div>
  );
}

export default App;
