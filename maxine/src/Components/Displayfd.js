import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import './Viewbuses.css'
export default function Viewflightdate() {
 
  const [flights, setflights] = useState([])
  const {id} = useParams();
  
  const getflights=()=>{
    console.log(id);
    Axios.post('http://localhost:3001/admin/showflightsdate',{
     id:parseInt(id),}
    ).then((response)=>{
        setflights(response.data)
    })
  }
 

  useEffect(() => {
    getflights()
  },[])
  
  return (
    <><NavBar/>
    <br /><br />
    <h1 className='text-center' style={{color:'red'}}>Flight List for the Flight Id : {id}</h1>
    <br /><br />
    
      <table style={{border:'1px solid white',marginLeft:'10%',marginRight:'50%',width:'500px'}}>
        <tbody>
          <tr>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Flight Id</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Date</th>
          </tr>
          
          {
            flights.map((val,idea)=>{
              return <tr >
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'100px'}}>{val.fid}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{val.date.slice(0,10)}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}