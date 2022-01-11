import { useSelector } from "react-redux";
import Lessee from './Lessee';
import StateTable from "./StateTable";
import Logo from './Logo';
import Summary from "./Summary";
import Footer from "./Footer";

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