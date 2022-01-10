import { useState } from 'react'
import Data from './data';

import { useSelector } from 'react-redux';

function Lessee() {
    let [d, setD] = useState(Data);

    let state = useSelector((state) => state);


    let deposit = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(d.defaults.deposit)
    let monthlyFee = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(d.defaults.monthlyFee)
    let payment = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(10000000)
    let damage = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW'}).format(10300000)

    return (
        <div className="receiver-info">
            <div className="receiver-status2">
                <h3 className="receiver-status3">LEASE STATUS</h3>
                    <div className="lease-status">
                        <div className="lease">
                            <p>임차시작일 :</p>
                            <p>임대차종료 :</p>
                            <p>보증금 :</p>  
                            <p>월세 :</p>
                            <p>VAT :</p>
                            <p>지불방식 :</p>
                            <p>지불일짜 :</p>
                        </div>
                        <div className="status">
                            <p>17/SEPT/2021</p>
                            <p>16/SEPT/2022</p>
                            <p>{ deposit }</p>
                            <p>{ monthlyFee }</p>
                            <p>{d.defaults.VAT}</p>
                            <p>선지불</p>
                            <p>{d.defaults.billingDate}TH</p>
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
    )
};

export default Lessee;