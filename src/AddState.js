import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Lessee from './Lessee';
import StateTable from "./StateTable";
import Logo from './Logo';
import Summary from "./Summary";
import Footer from "./Footer";

function AddState(props) {
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();

    return (
        <div className="invoice">
            <Logo />

            <div>
                <input onInput={ (e)=>{ dispatch({type: 'add', payload: e.target.value}) } } />
                <button>저장</button>
            </div>

            <Lessee />
            <StateTable records={state.records} />
            <Summary />
            <Footer />
        </div>
    );
  }

export default AddState;