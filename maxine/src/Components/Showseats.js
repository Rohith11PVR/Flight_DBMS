import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useParams } from 'react-router-dom';
import NavBaru from './Users/navbaru';
import StripeCheckout from "react-stripe-checkout";
import {toast} from "react-toastify";

const Showseats = () => {
    const { id } = useParams();
    const { date } = useParams();
    const {username} = useParams();
    const {name}=useParams();
    const {from}=useParams();
    const {to} = useParams();
    const [seats, setseats] = useState([])
    Axios.defaults.withCredentials = true;
    const getseats = () => {
        Axios.post('http://localhost:3001/showseats', {
            flightid: id,
            date: date

        }).then((response) => {
            setseats(response.data)
            console.log(response.data)
        })

    }


    useEffect(() => {
        getseats()
        console.log("called")
    }, [])
    const handleclick = (seatno) => {
        console.log(seatno)

        Axios.post('http://localhost:3001/updateseat', {

            username: username,
            flightid: id,
            date: date,
            number: seatno,
        }).then((response) => {

        }
        )
    }

    return (
        <><NavBaru/>
           <div className="showseats" style={{textalign: 'centre' , marginLeft:'400px'}}>
           <h1>
                <span style={{ color: 'royalblue'  }}>
                    Flight Name : 
                </span>
                <span> {name}</span>
            </h1>
            <h1>
                <span style={{ color: 'royalblue' }}>
                From  :
                </span>
                <span> {from}</span>
            </h1>
            <h1>
                <span style={{ color: 'royalblue' }}>
                To  :
                </span>
                <span> {to}</span>
            </h1>
            <h1>
                <span style={{ color: 'royalblue' }}>
                Flight scheduled for the date :
                </span>
                <span> {date}</span>
            </h1>
            <br /><br />
                <h1 className='text-center' style={{ color: 'red' }}>List of the available seats : </h1>
                <br /><br />
           </div>
            <>
                

                <table style={{ border: '1px solid white', marginLeft: '30%', marginRight: '50%', width: '500px' }}>
                    <tbody>
                        <tr>
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>seat Number</th>
                            {/* <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Flight Name</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>From location</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>To location</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Date</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Time</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Capacity</th>
                        <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Cost of seat</th> */}
                            <th className='text-center' style={{ color: 'green', fontSize: '20px' }}>Action</th>
                        </tr>

                        {
                            seats.map((val, id) => {
                                return <tr >
                                    <td className='text-center' style={{ color: 'black', marginRight: '-20px', fontSize: '15px', width: '100px' }}>{val.seatno}</td>


                                    <td className='text-center' style={{ color: 'white', marginRight: '20px', fontSize: '25px', width: '200px' }}>





                                        {/* <button style={{ marginLeft: '30px', color: '#00ffaf', backgroundColor: '#0b0c0d' }} onClick={() => handleclick(val.seatno)}>
                                            Book
                                        </button> */}
                                        <button style={{ marginLeft: '100px', color: '#00ffaf', backgroundColor: '#0b0c0d' , borderRadius:'10px',width:'200px',height:'25px' }} onClick={() => handleclick(val.seatno)}>
                                            Book
                                        </button>
                                        <Link to={`/seatdisplay/${id}/${date}/${username}/${name}/${from}/${to}`} >
                                             <button className="btn btn-contact"> NEXT </button>
                                        </Link>

                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
                
            </>
        </>
    )
};

export default Showseats;