import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function Read() {
    const[data,setData]=useState<any>([])
    const {id} = useParams();
    useEffect(()=>{
        axios.get('http://localhost:3001/users/'+id)
        .then(res =>setData(res.data))
        .catch(err =>console.log(err))
    },[])
  return (
    <div className="container mt-5 bg-light p-5">
       
    <h3 className="pb-2">Details of User</h3>
       <p>Username : {data.username}</p><br />
       <p>Email : {data.email}</p><br />
       <p>Website : {data.website}</p>

       <Link to={'/update/'+id} className="btn btn-primary mx-2">Edit</Link>
       <Link to={'/'} className="btn btn-primary">Back</Link>
    </div>
  )
}
