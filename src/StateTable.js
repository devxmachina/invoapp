import React from 'react';


function StateTable(props) {

    console.log("####", props.records[0].id)

    function currency(a) {
        return (
            Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(a)
        )
    }
    return (
        <>
            <tr>
                <td>{ props.records[0].date }</td>
                <td>{ props.records[0].description }</td>
                <td>{ props.records[0].method }</td>
                <td>{ props.records[0].amount === "" ? null : currency( props.records[0].amount) }</td>
                <td>{ props.records[0].payment === "" ? null : currency( props.records[0].payment) }</td>
            </tr>
            <tr>
                <td>{ props.records[1].date }</td>
                <td>{ props.records[1].description }</td>
                <td>{ props.records[1].method }</td>
                <td>{ props.records[1].amount === "" ? null : currency( props.records[1].amount) }</td>
                <td>{ props.records[1].payment === "" ? null : currency( props.records[1].payment) }</td>
            </tr>
            <tr>
                <td>{ props.records[2].date }</td>
                <td>{ props.records[2].description }</td>
                <td>{ props.records[2].method }</td>
                <td>{ props.records[2].amount === "" ? null : currency( props.records[2].amount) }</td>
                <td>{ props.records[2].payment === "" ? null : currency( props.records[2].payment) }</td>
            </tr>
            <tr>
                <td>{ props.records[3].date }</td>
                <td>{ props.records[3].description }</td>
                <td>{ props.records[3].method }</td>
                <td>{ props.records[3].amount === "" ? null : currency( props.records[3].amount) }</td>
                <td>{ props.records[3].payment === "" ? null : currency( props.records[3].payment) }</td>
            </tr>
            <tr>
                <td>{ props.records[4].date }</td>
                <td>{ props.records[4].description }</td>
                <td>{ props.records[4].method }</td>
                <td>{ props.records[4].amount === "" ? null : currency( props.records[4].amount) }</td>
                <td>{ props.records[4].payment === "" ? null : currency( props.records[4].payment) }</td>
            </tr> 
            <tr>
                <td>{ props.records[5].date }</td>
                <td>{ props.records[5].description }</td>
                <td>{ props.records[5].method }</td>
                <td>{ props.records[5].amount === "" ? null : currency( props.records[5].amount) }</td>
                <td>{ props.records[5].payment === "" ? null : currency( props.records[5].payment) }</td>
            </tr> 
            <tr>
                <td>{ props.records[6].date }</td>
                <td>{ props.records[6].description }</td>
                <td>{ props.records[6].method }</td>
                <td>{ props.records[6].amount === "" ? null : currency( props.records[6].amount) }</td>
                <td>{ props.records[6].payment === "" ? null : currency( props.records[6].payment) }</td>
            </tr> 
        </>
    )
}

export default StateTable;