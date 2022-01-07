import React from 'react';


function StateTable() {
    return (
        <>
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
        </>
    )
}

export default StateTable;