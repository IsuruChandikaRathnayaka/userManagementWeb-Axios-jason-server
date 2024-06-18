import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function Update() {
    const [values,setValues]=useState({
        username:'',
        email:'',
        website:''
    })

    const navigate= useNavigate();

    const handleUpdate =(event:any) =>{
        event.preventDefault();
        axios.put(`http://localhost:3001/users/${id}`,values)
        .then(res=>{
            console.log(res);
            navigate('/')
        })
        .catch(err =>console.log(err));


    }
    
    //const [data,setData] =useState<any>([])
    const {id} = useParams();
    useEffect(()=>{
        axios.get('http://localhost:3001/users/'+id)
        .then(res=>{
            setValues(res.data)
        })
        .catch(err =>console.log(err))

    },[])
  return (
    <div className="container mt-5 bg-light p-5">
        <h1 className="mb-3">Update User</h1>
        <form onSubmit={handleUpdate}>
        <div className="mb-3">


        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  value={values.username} onChange={e=>setValues({...values,username:e.target.value})}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={values.email} onChange={e=>setValues({...values,email:e.target.value})}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Website</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={values.website} onChange={e=>setValues({...values,website:e.target.value})}/>
        </div>

        <button className="btn btn-success">Update</button>

<Link to="/" className="btn btn-primary mx-2">Go Back</Link>
</form>
    </div>
  )
}
