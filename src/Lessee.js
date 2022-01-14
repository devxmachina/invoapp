import { useState } from 'react'
import Data from './data';

import { useSelector } from 'react-redux';

function Lessee() {

    let state = useSelector((state) => state);


    let deposit = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(state.defaults.deposit)
    let monthlyFee = Intl.NumberFormat('ko-KO', { style: 'currency', currency: 'KRW' }).format(state.defaults.monthlyFee)

    return (
        <div className="receiver-info">
            {/* <div className="receiver-status2">
                <h3 className="receiver-status3">LEASE STATUS</h3>
                    <div className="lease-status">
                        <div className="lease">
                            <p>임차시작일 :</p>
                            <p>임대차종료 :</p>
                            <p>보증금 :</p>  
                            <p>월세 :</p>
                            <p>VAT :</p>
                            <p>지불방식 :</p>
                            <p>지불날짜 :</p>
                        </div>
                        <div className="status">
                            <p>{ state.defaults.startDate }</p>
                            <p>{ state.defaults.endDate }</p>
                            <p>{ deposit }</p>
                            <p>{ monthlyFee }</p>
                            <p>{ state.defaults.VAT }</p>
                            <p>{ state.defaults.paymentTerm }</p>
                            <p>매월 { state.defaults.billingDate }일</p>
                        </div>
                    </div>                
            </div> */}

            <table className="red-border">
                <thead>
                    <th scope="column">s</th>
                    <th scope="column">s</th>
                </thead>
                    {
                        state.defaults.map((a,i)=>{
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td>임차시작일 :</td><td>{state.defaults[i].startDate}</td>
                                    </tr>
                                    <tr>
                                        <td>임대차종료 :</td><td>{state.defaults[i].endDate}</td>
                                    </tr>
                                    <tr>
                                        <td>보증금 :</td><td>{state.defaults[i].deposit}</td>
                                    </tr>
                                    <tr>
                                        <td>월세 :</td><td>{state.defaults[i].monthlyFee}</td>
                                    </tr>
                                    <tr>
                                        <td>VAT :</td><td>{state.defaults[i]}.VAT</td>
                                    </tr>
                                    <tr>
                                        <td>지불방식 :</td><td>{state.defaults[i].paymentTerm}</td>
                                    </tr>
                                    <tr>
                                        <td>지불날짜 :</td><td>{state.defaults[i].billingDate}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    };
            </table>

            <div className="receiver-status">
                <h2>{state.lessee.englishName}</h2>
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