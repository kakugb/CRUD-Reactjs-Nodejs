import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import toast from "react-hot-toast";
const Table = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
       try {
    
          
       axios('http://localhost:4000/api/get')
       .then((response)=>{
        const data= response.data;
       
        setData(data.user)
       })
    
        
       } catch (error) {
        console.log("internal server error")
       }
      
    },[data])
    
    
    const DeleteData=(id)=>{
    try {
      axios.delete(`http://localhost:4000/api/delete/${id}`)
      .then((response)=>{
        toast.success('User Deleted Successfully')
      })
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    }

  return (
    <>
    <div className="w-1/2 flex justify-end mx-auto mt-5">
   <Link to={'/addUser'}>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add User</button>
   </Link>
   </div>
    <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-1/2 text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 mx-auto mt-1 ">
            <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Father Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Phone No
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
    
                </tr>
            </thead>
            <tbody>
           {
            data?.map((ele,ind)=>(
                <tr className="bg-blue-600 border-blue-400 hover:bg-blue-500" key={ind}>
                    <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                        {ele.name}
                    </th>
                    <td className="px-6 py-4">
                      {ele.fathername}
                    </td>
                    <td className="px-6 py-4">
                      {ele.email}
                    </td>
                    <td className="px-6 py-4">
                     {ele.phone}
                    </td>
                    <td className="px-6 py-4 flex justify-between">
                     <button onClick={()=>DeleteData(ele._id)}>Delete</button>
                     <Link to={`/update/${ele._id}`}>Edit</Link>
                    </td>
                  
                </tr>
                   ))
                  }
            </tbody>
        </table>
    </div>
    
        </>
  )
}

export default Table