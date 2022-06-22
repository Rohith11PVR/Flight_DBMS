import React,{useState,useEffect} from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NavBaru from './navbaru';

 const User = () => {
    const [flightsd, setflightsd] = useState([])
    const {username} = useParams();

    const getflightsd=()=>{
        Axios.post('http://localhost:3001/admin/showuserdetailsf',{
          username:username,
        }).then((response)=>{
            setflightsd(response.data);
        })
      };
     
    
      useEffect(() => {
        getflightsd()
      },[])

    return (
        <> <NavBaru/>
        <div>
            <h1>WELCOME Mr. {username}</h1>
            <br/><br/>
            <h1>Your account deatils : </h1>
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
            flightsd.map((v,idea)=>{
              return <tr >
                  <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'150px'}}>{v.iduser_table}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{v.name}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'100px'}}>{v.age}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'100px'}}>{v.gender}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'200px'}}>{v.mobile_number}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'300px'}}>{v.email}</td>
              <td className='text-center' style={{color:'black',marginRight:'20px',fontSize:'25px',width:'300px'}}>{v.address}</td>
              
              </tr>
            })
          }
        </tbody>
      </table>

       </div>
       </>
    )
}

export default User;