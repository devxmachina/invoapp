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
        records: [
            {
                id: 0,
                date: "17-09-2021",
                description: "임대료",
                method: "",
                amount: 8000000,
                payment: "",
            },
            {
                id: 1,
                date: "17-09-2021",
                description: "현금지불",
                method: "CASH",
                amount: "",
                payment: 2000000,
            },
            {
                id: 2,
                date: "17-09-2021",
                description: "계좌이체",
                method: "WIRE",
                amount: "",
                payment: 3000000,
            },
            {
                id: 3,
                date: "17-09-2021",
                description: "보증금 차감",
                method: "DEPOSIT",
                amount: "",
                payment: 3800000,
            },
            {
                id: 4,
                date: "17-09-2021",
                description: "원상복구비용",
                method: "",
                amount: 10000000,
                payment: "",
            },
            {
                id: 5,
                date: "17-09-2021",
                description: "월 관리비",
                method: "",
                amount: 1000000,
                payment: "",
            },
            {
                id: 6,
                date: "17-09-2021",
                description: "LATE PENALTY 19.99%",
                method: "",
                amount: "",
                payment: "",
            },
        ]
    }
;