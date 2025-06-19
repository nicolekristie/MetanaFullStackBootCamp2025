import React, {useState} from 'react';
import { Link , useNavigate} from "react-router-dom";
// import '@testing-library/jest-dom';

function EmpCreate() {
//define state variables

const [id,setId] = useState("");
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [isActive,setIsActive] = useState("true");

const navigate=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();

    //check that we can get all of the values
    const empdata={name,email, phone, isActive};
 

    // console.log({id, name, email, phone, isActive})
    fetch("http://localhost:8000/employee/", {
        method: "POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(empdata)
    }).then((res)=>{
        alert("Saved successfully.");
        // navigate('/')
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
                          <h2> Employee Create</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input name="emp-id" value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input name="emp-name" required value = {name} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input name="emp-email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input name="emp-phone" value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={isActive} onChange={e=>setIsActive(e.target.checked)}  type="checkbox" className="form-check-input"></input>
                                            <label name="is-active-chk-box"className="form-check-label">Is Active</label>
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

export default EmpCreate
