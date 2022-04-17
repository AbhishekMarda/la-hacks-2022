import './styles/App.css';
import AnimatedRoutes from "./AnimatedRoutes";
import { BrowserRouter as Router, useLocation} from "react-router-dom";


function App() {

  return (
    <div className='App'>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
