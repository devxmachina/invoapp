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
                <table className="stateTable">
                    <thead>
                        <tr className="t-headrow">
                            <th scope="col">DATE</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">AMOUNT</th>
                            <th scope="col">PAYMENTS</th>
                            <th scope="col">DEPOSIT</th>
                        </tr>
                    </thead>
                    {
                        state.records.map((a,i)=>{
                            return (
                                <tbody key={i}>
                                    <tr className="tableData">
                                        <td className="datas">{ state.records[i].date }</td>
                                        <td className="datas">{ state.records[i].description }</td>
                                        {/* <td className="datas">{ state.records[i].method }</td> */}
                                        <td className="datas">{ state.records[i].amount === "" ? null : currency( state.records[i].amount) }</td>
                                        <td className="datas">{ state.records[i].payment === "" ? null : currency( state.records[i].payment) }</td>
                                        {/* <td className="datas">{ state.records[i].remainDeposit === state.records[i].remainDeposit ? null : currency( state.records[i].remainDeposit) }</td> */}
                                        <td className="datas">{ state.records[i].description === "보증금 차감" ? currency( a.remainDeposit) : null}</td>
                                        { console.log(state.records[i].description === "보증금 차감")}
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