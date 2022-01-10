import logo from './pngs/logo.png';
import './App.css';
import Data from './data';
import { useState } from 'react';
import Lessee from './Lessee';
import StateTable from './StateTable';
import records from './records';
import { useSelector } from 'react-redux';

function App(props) {

  let state = useSelector((state)=>state);
  console.log('## selector ##', state.records);

  let [d, setD] = useState(Data);

  let deposit = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(d.defaults.deposit)
  let monthlyFee = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(d.defaults.monthlyFee)
  let payment = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(10000000)
  let damage = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW'}).format(10300000)

  return (
    <div className="invoice">

      <div className="logo">
        <img src={logo} style={{height: "clamp(3rem, 20vw, 4rem)"}} />
      </div>

      <Lessee />

      <div className="table-div">
        <table>
          <thead>
            <tr className="t-headrow">
              <th scope="col">DATE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">METHOD</th>
              <th scope="col">AMOUNT(+VAT)</th>
              <th scope="col">PAYMENTS</th>
            </tr>
          </thead>
          <tbody>
            <StateTable records={state.records} />
          </tbody>
        </table>
      </div>

      <div className="summary">
          <div className="summary-topics">
            <h3 className="summary-topic">연체 금액 :</h3>
            <h3 className="summary-topic">남은 보증금 :</h3>
          </div>
          <div className="summary-data">
            <h3>{ damage }</h3>
            <h3>{ deposit }</h3>
          </div>
        </div>
      <div className="footer">
        <p>{state.lessor.address} {state.lessor.unitNumber} {state.lessor.postalCode}</p>
        <p>{state.lessor.companyID}</p>
      </div>

    </div>
  );
}

export default App;
