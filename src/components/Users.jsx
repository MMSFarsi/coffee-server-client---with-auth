import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const Users = () => {
    const loadedUser=useLoaderData()
    const[users,setUsers]=useState(loadedUser)

    const handleDelete=(_id)=>{


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${_id}`,{
            method: "DELETE"
        })

        .then(res=>res.json())
        .then(data=>{
          if (data.deletedCount) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
              // update the loaded user state
              const remainingUsers = users.filter(user => user._id !== _id);
              setUsers(remainingUsers);
        }
        })

       
        }
      });



    }
  return (
    <div>Users: {users.length}
    
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Sign In</th>
        <th>Action</th>
    
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=>
            <tr key={user._id}>
        <th>{user._id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.lastSignInTime}</td>
        <td>{user.createdAt}</td>
        <td>
            <button className='btn'>E</button>
            <button onClick={()=>handleDelete(user._id)} className='btn'>X</button>
        </td>
        
      </tr>
        )
      }
   
     
    </tbody>
  </table>
</div>
    </div>

  )
}

export default Users