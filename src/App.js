
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Result from './Result';
import AddState from './AddState';




function App(props) {

  return (
    <>
        <Routes>
          <Route path="/" element={<AddState />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </>
  );
}

export default App;
