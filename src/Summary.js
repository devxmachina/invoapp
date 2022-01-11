import { useSelector } from "react-redux";

function Summary() {

    let state = useSelector((state)=>state);
    
    let amount = 0;
    let payment = 0;
    let deposit = state.defaults.deposit
    let remaining = 0;
    state.records.map( (a, i) => {
      
      amount += Number(state.records[i].amount)
      payment += Number(state.records[i].payment)
      remaining = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW'}).format(deposit - (amount - payment))
    })

    return (
        <div className="summary">
            <div className="summary-topics">
                <h3 className="summary-topic">연체 금액 :</h3>
                <h3 className="summary-topic">남은 보증금 :</h3>
            </div>
            <div className="summary-data">
                <h3>{ 0 }</h3>
                <h3>{ remaining }</h3>
            </div>
        </div>
    )
}

export default Summary;