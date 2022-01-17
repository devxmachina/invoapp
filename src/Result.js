import { useSelector } from "react-redux";
import Lessee from './components/Lessee';
import StateTable from "./components/StateTable";
import Logo from './components/Logo';
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function Result() {
    let state = useSelector((state)=>state);
  
    return (
        <div className="invoice">
            <Logo />
            <Lessee />
            <StateTable records={state.records} />
            <Summary />
            <Footer />
        </div>
    );
  }

export default Result;