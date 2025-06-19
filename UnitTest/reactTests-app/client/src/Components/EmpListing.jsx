import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom"

function EmpListing() {

    const [empdata, setEmpData] = useState(null);
    const navigate=useNavigate();

    const LoadDetail=(id)=>{
        navigate("/employee/detail/"+id);
    }

    const LoadEdit=(id)=>{
        navigate("/employee/edit/"+id);
    }

    const RemoveItem=(id)=>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/employee/"+id, {
                method: "DELETE",
            }).then((res)=>{
                alert("Removed successfully.");
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message);
            })

        }
        
    }

        useEffect(()=> {
            // getEmployeeListFromApi() 
            fetch("http://localhost:8000/employee").then((res) => {
                return res.json();
            }).then((resp)=> {
                setEmpData(resp);
            }).catch((err) => {
                console.log(err.message);
            })
        }, [])
      
        return (
           <div className="container mt-5">
                <div className="card">
                  <div className="card-title">
                    <h2 className="mb-4">Employee List</h2>
                  </div>
                  <div className="card-body">
                     <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New(+)</Link>
                    </div>
                        <table className="table table-bordered table-striped">
                            <thead className="table-dark">
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { empdata &&
                                    empdata.map(item=> (
                                        <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={()=>{LoadEdit(item.id)}}  className="btn btn-success">Edit</a>
                                            <a onClick={()=>{RemoveItem(item.id)}}  className="btn btn-danger">Remove</a>
                                            <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary">Details</a>
                                        </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                  </div>
                </div>
            </div>
        );
      };


export default EmpListing

