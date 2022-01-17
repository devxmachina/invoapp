import { useSelector } from 'react-redux';

function Lessee() {

    let state = useSelector((state) => state);
    let deposit = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(state.defaults.deposit)
    let monthlyFee = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(state.defaults.monthlyFee)

    return (
        <div className="receiver-info">
            <table className="leaseTable">
                <span className="statusDefaultsHeading">임대차 명세서</span>
                <div>
                    <tbody className="leaseStatusBody">
                        <tr>
                            <td className="dataName">임차시작일 :</td><td className="dataVal">{state.defaults.startDate}</td>
                        </tr>
                        <tr>
                            <td className="dataName">임대차종료 :</td><td className="dataVal">{state.defaults.endDate}</td>
                        </tr>
                        <tr>
                            <td className="dataName">보증금 :</td><td className="dataVal">{ deposit }</td>
                        </tr>
                        <tr>
                            <td className="dataName">월세 :</td><td className="dataVal">{ monthlyFee }</td>
                        </tr>
                        <tr>
                            <td className="dataName">VAT :</td><td className="dataVal">{state.defaults.VAT}</td>
                        </tr>
                        <tr>
                            <td className="dataName">지불방식 :</td><td className="dataVal">{state.defaults.paymentTerm}</td>
                        </tr>
                        <tr>
                            <td className="dataName">지불날짜 :</td><td className="dataVal">{state.defaults.billingDate}</td>
                        </tr>
                    </tbody>
                </div>
            </table>

            <div className="receiver-status">
                <h2>{state.lessee.koreanName}</h2>
                <p>{state.lessee.companyName}</p>
                <p>{state.lessee.koreanName}</p>
                <p>{state.lessee.address}</p>
                <p>{state.lessee.unitNumber} {state.lessee.postalCode}</p>
                <p>{state.lessee.companyID}</p>
            </div>
        </div>
    )
};

export default Lessee;