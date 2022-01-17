
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Result from './Result';
import Home from './components/Home';




function App(props) {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </>
  );
}

export default App;
