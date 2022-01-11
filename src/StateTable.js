import React from 'react';
import { useSelector } from 'react-redux';


function StateTable(props) {

    let state = useSelector((state)=>state);

    function currency(b) {
        return (
            Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(b)
        )
    }
    return (
        <>
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
                    {
                        state.records.map((a,i)=>{
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td>{ state.records[i].date }</td>
                                        <td>{ state.records[i].description }</td>
                                        <td>{ state.records[i].method }</td>
                                        <td>{ state.records[i].amount === "" ? null : currency( state.records[i].amount) }</td>
                                        <td>{ state.records[i].payment === "" ? null : currency( state.records[i].payment) }</td>
                                    </tr>        
                                </tbody>
                                
                            )
                        })    
                    }
                </table>
            </div>
        </>
    )
}

export default StateTable;