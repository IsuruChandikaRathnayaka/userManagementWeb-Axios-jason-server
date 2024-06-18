import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {


    const [values,setValues]=useState({
        username:'',
        email:'',
        website:''
    })


    const navigate= useNavigate();

    const handleSubmit =(event:any)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/users',values)
        .then(res =>{
            console.log(res);
            navigate('/');

        })
        .catch(err=>console.log(err))


    }

  return (
    <div className="container mt-2 bg-light p-5">
        <h1>Create Page</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">


        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  onChange={e => setValues({ ...values, username: e.target.value })} />
        </div>

        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e=>setValues({...values,email:e.target.value})}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Website</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e=>setValues({...values,website:e.target.value})}/>
        </div>

        <button className="btn btn-success">Submit</button>

<Link to="/" className="btn btn-primary mx-2">Go Back</Link>
</form>
    </div>
  )
}
