export const getEmployeeListFromApi = () => {
    return  fetch("http://localhost:8000/employee").then((res) => {
        return res.json();
    }).then((resp)=> {
        setEmpData(resp);
    }).catch((err) => {
        console.log(err.message);
    })
}