import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import './Viewbuses.css'
export default function Viewflights() {
 
  const [flights, setflights] = useState([])
  
  const getflights=()=>{
    Axios.get('http://localhost:3001/admin/showflights').then((response)=>{
        setflights(response.data)
    })
    
  }
  const deleteFlight = (idflight) =>{
    alert(`do you want to delete the Flight with id ${idflight}`);
      Axios.delete(`http://localhost:3001/admin/delete/${idflight}` ).then(() => {alert("The Flight is deleted")}).then(window.location.reload(false))
  };
 

  useEffect(() => {
    getflights()
  },)
  
  return (
    <><NavBar/>
    <br /><br />
    <h1 className='gbd' style={{color:'black'}}>Flight List</h1>
    <br /><br />
    
      <table style={{border:'1px solid white',marginLeft:'10%',marginRight:'50%',width:'1200px'}}>
        <tbody>
          <tr>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Flight Id</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Flight Name</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>From location</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>To location</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Duration (in hrs)</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Departure Time</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Capacity (seats)</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>Cost of seat</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>ADD</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>VIEW</th>
          
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>EDIT</th>
            <th className='text-center' style={{color:'green',fontSize:'20px'}}>DELETE</th>
          </tr>
          
          {
            flights.map((val,id)=>{
              return <tr >
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'100px'}}>{val.idflight}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{val.name}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{val.fromlocation}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{val.tolocation}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'400px'}}>{val.duration}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{val.time}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{val.numberofseats}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{val.cost}</td>
              <td className='text-center' style={{color:'white',marginRight:'20px',fontSize:'25px',width:'500px'}}>
                <div className='parent' style={{}}>
                <div style={{marginTop:'10px',width:'50px',marginLeft:'0px'}}>
                <Link id={val.idflight} to={`/date/${val.idflight}`} style={{marginLeft:'35px',width:'15px',backgroundColor:''}} >
                <button className="c"> Dates </button>
                  
                </Link>
                </div>
                
                </div>
              </td>

              <td className='text-center' style={{color:'white',marginRight:'20px',fontSize:'25px',width:'500px'}}>
                <div className='parent' style={{}}>
                <div style={{marginTop:'10px',width:'50px',marginLeft:'0px'}}>
                <Link id={val.idflight} to={`/viewdate/${val.idflight}`} style={{marginLeft:'35px',width:'15px',backgroundColor:''}} >
                <button className="c"> Dates </button>
                  
                </Link>
                </div>
                
                </div>
              </td>



              <td className='text-center' style={{color:'white',marginRight:'20px',fontSize:'25px',width:'500px'}}>
                <div className='parent' style={{}}>
                <div style={{marginTop:'10px',width:'50px',marginLeft:'0px'}}>
                <Link id={val.idflight} to={`/edit/${val.idflight}`} style={{marginLeft:'35px',width:'15px',backgroundColor:''}} >
                <button className="c"> Edit </button>
                  
                </Link>
                </div>
                
                </div>
              </td>
              


              <td className='text-center' style={{color:'white',marginRight:'20px',fontSize:'25px',width:'300px'}}>
              <div style={{marginTop:'10px',width:'50px',marginLeft:'0px'}}>
                  <button className="c" style = {{marginLeft : '10px' }}onClick = { () => {deleteFlight(val.idflight)}}> Delete </button>
              <div/>
              </div>
                
              </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}