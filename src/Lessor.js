import React, { useState } from "react";
import Data from './data';

function Lessor() {
    let [data, setData] = useState(Data)
    let dat = data[1]
    return (
        <>
            <h4>{data.lessor.companyName}</h4>
        </>
    )
}

export default Lessor;