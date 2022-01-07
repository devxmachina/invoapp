/* eslint-disable import/no-anonymous-default-export */

let currentDate = new Date();


export default 
    {
        lessor: {
            koreanName: "고현승",
            englishName: "KO HYUN SUNG",
            companyName: "",
            companyID: "000-00-00000",
            address: "서울특별시 강남구 도산대로888",
            unitNumber: "0000호",
            postalCode: "0000",
        },
        lessee: {
            koreanName: "리에바노 안토니오 호세",
            englishName: "LIEVANO ANTONIO JOSE",
            companyName: "(주)주당팀",
            companyID: "111110000",
            address: "경기도 성남시 분당구 정자일로 999",
            unitNumber: "333동 444호",
            postalCode: "123123",
            emailAddress: "",
        },
        defaults: {
            currency: "won",
            startDate: "Start Date",
            endDate: "End date",
            deposit: 100000000,
            monthlyFee: 8000000,
            VAT: "10%",
            paymentTerm: "UP-FRONT",
            billingDate: "17",
            penalty: "",
        },
        statements: {
            id: 0,
            date: currentDate,
            description: "LEASE CHARGE",
            amount: 8000000,
            payments: "",
            dueBalance: 8000000,
        },
    }
;