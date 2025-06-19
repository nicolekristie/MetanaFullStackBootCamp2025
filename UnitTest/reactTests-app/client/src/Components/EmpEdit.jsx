import React, {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link , useNavigate} from "react-router-dom";

function EmpEdit() {

    const{empid}=useParams();
    // const[empdata,setEmpData] = useState({});
  
    useEffect(()=> {
      fetch("http://localhost:8000/employee/" + empid).then((res) => {
          return res.json();
      }).then((resp)=> {
          //bind all of the values
          setId(resp.id);
          setName(resp.name);
          setEmail(resp.email);
          setPhone(resp.phone);
          setIsActive(resp.isActive)

      }).catch((err) => {
          console.log(err.message);
      })
    }, [])
  

const [id,setId] = useState("");
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [isActive,setIsActive] = useState("true");

const navigate=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();

    //check that we can get all of the values
    const empdata={id, name,email, phone, isActive};
 

    // console.log({id, name, email, phone, isActive})
    fetch("http://localhost:8000/employee/"+empid, {
        method: "PUT",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(empdata)
    }).then((res)=>{
        alert("Saved successfully.");
        navigate('/')
    }).catch((err)=>{
        console.log(err.message);
    })
}


  return (
    <div>

    <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                
                <div className="card" style={{"textAlign":"left"}}>
                    <div className='card-title'>
                      <h2> Employee Edit</h2>
                    </div>
                    <div className="card-body">

                        <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value = {name} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={isActive} onChange={e=>setIsActive(e.target.checked)}  type="checkbox" className="form-check-input"></input>
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link className="btn btn-danger">Back</Link>
                                    </div>
                                </div>




                        </div>

                    </div>
                </div>

            </form>
        </div>
    </div>
  
</div>
  )
}

export default EmpEdit
