import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";


export default function Home() {

const navigate=useNavigate();
    const [data,setData] =useState<any[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
        .then(res =>setData(res.data))
        .catch(err=>console.log(err))
    },[])


    const handleDelete= (id:any)=>{
        const confirm=window.confirm("Would you like to delete?")
        if(confirm){
            axios.delete('http://localhost:3001/users/'+id)
            .then(res=>{
                location.reload();
            })
            .catch(err=>{
                console.log(err);
            })
        }
        
      }
  return (
   <div className="container bg-dark text-light">
    <h1 className="text-center">List Of Users</h1>
    <div className="d-flex justify-content-end">
        <Link to="/create" className="btn btn-success m-3">Add+</Link>
    </div>
        <table className="table table-stiped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d,i)=>(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.username}</td>
                            <td>{d.email}</td>
                            <td>{d.website}</td>
                            <td>
                                <Link to={`/read/${d.id}`} className="btn btn-success">View</Link>
                                
                                <Link to={`/update/${d.id}`} className="btn btn-info mx-2">Edit</Link>
                                <button onClick={e=>handleDelete(d.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
   </div>
  )


}
