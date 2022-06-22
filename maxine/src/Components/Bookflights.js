import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useParams } from 'react-router-dom';
import NavBaru from './Users/navbaru';

const Bookflights = () => {
    const { from } = useParams();
    const { to } = useParams();
    const { date } = useParams();
    const { username } = useParams();
    const [flights, setflights] = useState([])
    const bookflights = () => {
        Axios.post('http://localhost:3001/booking', {

            fromloc: from,
            toloc: to,
            date: date
        }).then((response) => {
            console.log(response.data)
            setflights(response.data)
        })

    }
    useEffect(() => {
        bookflights()
    }, [])
    Axios.defaults.withCredentials = true;




    return (
        <> <NavBaru/>
            <br /><br />
            
            <h1 className='text-center' style={{ color: 'black' }}>List of the available flights </h1>
            <br /><br />

            <table style={{ border: '1px solid white', marginLeft: '10%', marginRight: '50%', width: '1200px' }}>
                <tbody>
                    <tr>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Flight Id</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Flight Name</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>From location</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>To location</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Date</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Time</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Capacity</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Cost of seat</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Action</th>
                    </tr>

                    {
                        flights.map((val, id) => {
                            return <tr >
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '100px' }}>{val.idflight}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>{val.name}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>{val.fromlocation}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>{val.tolocation}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>{date}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>{val.time}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>{val.numberofseats}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>{val.cost}</td>
                                <td className='text-center' style={{ color: 'black', marginRight: '20px', fontSize: '25px', width: '200px' }}>




                                    <Link  to={`/showseats/${val.idflight}/${date}/${from}/${to}/${val.name}/${username}`} className='  btn btn-small  me-5'>
                                    <button style={{ marginLeft: '30px', color: '#00ffaf', backgroundColor: '#0b0c0d' }}>
                                        Book
                                    </button>
                                    </Link>
                                    





                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
};

export default Bookflights;