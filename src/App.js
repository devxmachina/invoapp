import logo from './pngs/logo.png';
import './App.css';
import Data from './data';
import { useState } from 'react';
import Lessee from './Lessee';

function App() {
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
              <th scope="col">AMOUNT(+VAT)</th>
              <th scope="col">PAYMENTS</th>
              <th scope="col">METHOD</th>
              <th scope="col">BALANCE DUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09-17-2021</td>
              <td>LEASE CHARGE</td>
              <td>{ monthlyFee }</td>
              <td></td>
              <td></td>
              <td>{ monthlyFee }</td>
            </tr>
            <tr>
              <td>10-16-2021</td>
              <td>PAYMENT MADE</td>
              <td></td>
              <td>{ payment }</td>
              <td>CASH</td>
              <td></td>
            </tr>
            <tr>
              <td>10-18-2021</td>
              <td>PAYMENT MADE</td>
              <td></td>
              <td>{ payment }</td>
              <td>WIRE</td>
              <td></td>
            </tr>
            <tr>
              <td>01-01-2022</td>
              <td>DEDUCT FROM DEPOSIT</td>
              <td></td>
              <td>{ payment }</td>
              <td>DEPOSIT</td>
              <td></td>
            </tr>
            <tr>
              <td>01-01-2022</td>
              <td>DAMAGE CHARGE</td>
              <td>₩10,000,000</td>
              <td></td>
              <td></td>
              <td>{ damage }</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="summary">
          <div className="summary-topics">
            <h3 className="summary-topic">DEPOSIT BALANCE :</h3>
            <h3 className="summary-topic">OVERDUE BALANCE :</h3>
          </div>
          <div className="summary-data">
            <h3>0</h3>
            <h3>{ damage }</h3>
          </div>
        </div>
      <div className="footer">
        <p>{d.lessor.address} {d.lessor.unitNumber} {d.lessor.postalCode}</p>
        <p>{d.lessor.companyID}</p>
      </div>

    </div>
  );
}

export default App;
