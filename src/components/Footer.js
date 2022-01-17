import { useSelector } from "react-redux";

function Footer() {
    
    let state = useSelector((state)=>state);

    return (
        <div className="footer">
            <p>{state.lessor.address} {state.lessor.unitNumber} {state.lessor.postalCode}</p>
            <p>{state.lessor.companyID}</p>
        </div>
    )
}

export default Footer;