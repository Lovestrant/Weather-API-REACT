import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}></Route>
          <Route path="/Dashboard" element = {<Dashboard />}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
