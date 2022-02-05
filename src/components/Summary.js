import { useSelector } from "react-redux";

function Summary() {

    let state = useSelector((state)=>state);
    
    let amount = 0;
    let payment = 0;
    let deposit = state.defaults.deposit
    let remaining = 0;
    let currentDeposit = 0;
    state.records.map((a, i)=>{
            currentDeposit = state.records[i].remainDeposit
    })

    state.records.map( (a, i) => {
      
      amount += Number(state.records[i].amount)
      payment += Number(state.records[i].payment)
      remaining = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW'}).format(currentDeposit)
    })

    return (
        <div className="summary">
            <table>
                {/* <tr className="summaryTopic">
                    <h2>연체 금액 :</h2>
                    <td className="summaryData">{ 0 }</td>
                </tr> */}
                <tr className="summaryTopic">
                    <h2>남은 보증금 :</h2>
                    <td className="summaryData">{ remaining }</td>
                </tr>
            </table>
        </div>
    )
}

export default Summary;