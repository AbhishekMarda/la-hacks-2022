import './styles/App.css';
import Home from "./Home";
import Companies from "./Companies";
import Skills from "./Skills";
import Error from "./Error";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
