import React,{useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from 'react-router-dom';
import NavBaru from "./navbaru";
import './LoginU.css'
const Bookingsuser =()=>{

    const {username}=useParams();
    const [seats, setseats] = useState([])
    Axios.defaults.withCredentials = true;
    
    const getseats = () => {
        Axios.post('http://localhost:3001/showseatsrohith', {
            username:username

        }).then((response) => {
            setseats(response.data)
            console.log(response.data)
        })

    }
    useEffect(() => {
        getseats()
        console.log("called")
    }, [])


    return (
        <> <NavBaru/>
            
            <>
                <br /><br />
                <h1 className='text-center' style={{ color: 'black' }}>Transactions of {username} </h1>
                <br /><br />

                <table style={{ border: '1px solid white', marginLeft: '10%', marginRight: '50%', width: '1200px' }}>
                    <tbody>
                        <tr>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Bill no</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Seat no</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Flight ID</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Flight Name</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Date</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>From</th>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>To</th>
                            {/* <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Flight Name</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>From location</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>To location</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Date</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Time</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Capacity</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Cost of seat</th> */}
                            
                        </tr>

                        {
                            seats.map((val, id) => {
                                return <tr >
                                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.bid}</td>
                                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.seatno}</td>
                                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.fid}</td>
                                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.name}</td>
                                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.jdate.slice(0,10)}</td>
                                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.fromlocation}</td>
                                    <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.tolocation}</td>
                                </tr>
                                
                            }) 
                        }
                    </tbody>
                </table>
                <Link to={`/homeuser/${username}`}>
                                           <button   style = {{ }}className="ka"> Return </button>
                                    </Link>
                
            </>
        </>
    )

}

export default Bookingsuser;