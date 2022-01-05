import logo from './pngs/logo.png';
import './App.css';
import Data from './data';
import { useState } from 'react';

function App() {
  let [d, setD] = useState(Data);

  let deposit = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(d.defaults.deposit)
  let monthlyFee = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(d.defaults.monthlyFee)
  let payment = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(10000000)
  let damage = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW'}).format(10300000)

  return (
    <div className="invoice">

      <div className="logo">
        <img src={logo} style={{height: "clamp(3rem, 4vw, 5rem)"}} />
      </div>

      <div className="receiver-info">
        <div className="receiver-status2">
          <h3 className="receiver-status3">LEASE STATUS</h3>
            <div className="lease-status">
              <div className="lease">
                <p>LEASE START :</p>
                <p>LEASE END :</p>
                <p>DEPOSIT AMOUNT :</p>  
                <p>MONTHLY RATE :</p>
                <p>VAT :</p>
                <p>PAYMENT TERMS :</p>
                <p>DUE DATE :</p>
              </div>
              <div className="status">
                <p>17/SEPT/2021</p>
                <p>16/SEPT/2022</p>
                <p>{ deposit }</p>
                <p>{ monthlyFee }</p>
                <p>{d.defaults.VAT}</p>
                <p>UP-FRONT</p>
                <p>EVERY {d.defaults.billingDate}TH</p>
              </div>
            </div>
            
        </div>
        
        <div className="receiver-status">
          <h2>{d.lessee.englishName}</h2>
          <p>{d.lessee.companyName}</p>
          <p>{d.lessee.koreanName}</p>
          <p>{d.lessee.address}</p>
          <p>{d.lessee.unitNumber} {d.lessee.postalCode}</p>
          <p>{d.lessee.companyID}</p>
        </div>

      </div>
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
