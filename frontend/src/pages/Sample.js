import { useState, useEffect, React } from 'react'
import http from '../http';


function Sample() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }
  return (
    <div>
        <h2>Users Listing</h2>
        <table>
            <thead>
                <tr>
                    <th>Sno.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                <tr>
                    <td>{index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>edit</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default Sample