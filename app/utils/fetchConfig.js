export default {
    header: {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    },
    api: {
        base: "http://report.pcbpp.com:8090/",
        login: "loginMD5.do?",
        companyList: "pinke/showCompanyList.do?"
    }
}