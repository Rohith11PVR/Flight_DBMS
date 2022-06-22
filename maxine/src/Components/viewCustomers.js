import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../navbar'
import './Viewbuses.css'

export default function Viewcustomers() {
 
  const [users, setusers] = useState([])
  
  const getusers=()=>{
    Axios.get('http://localhost:3001/admin/info').then((response)=>{
        setusers(response.data)
    })
    
  }
 

  useEffect(() => {
    getusers()
  },)
  
  return (
    <><NavBar/>
    <br /><br />
    <h1 className='text-center' style={{color:'black'}}>Users List</h1>
    <br /><br />
    
      <table style={{border:'1px solid white',marginLeft:'10%',marginRight:'50%',width:'1300px'}}>
        <tbody>
          <tr>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Customer Id</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Name</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Age</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Gender</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Mobile Number</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Email</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Address</th>
          </tr>
          
          {
            users.map((value,i)=>{
              return <tr >
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'100px'}}>{value.iduser_table}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{value.name}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'100px'}}>{value.age}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'100px'}}>{value.gender}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{value.mobile_number}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'300px'}}>{value.email}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'400px'}}>{value.address}</td>
              </tr>
              
            })
          }
        </tbody>
      </table>
    </>
  )
}