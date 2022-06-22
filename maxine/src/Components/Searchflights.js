// import React, { useState } from "react";
// import { Link, useParams } from 'react-router-dom';
// import Axios from "axios";
// import NavBaru from "./Users/navbaru";



// const Searchflights = () => {
//     const [from, setfrom] = useState("");
//     const [to, setto] = useState("");
//     const [date, setdate] = useState("");
//     const {username}=useParams();


//     Axios.defaults.withCredentials = true;



//     return (
//     <> <NavBaru/>
//         <div className="searchflight">
//             <h1>SEARCH FLIGHT</h1>
//             <br />
//             <h3> Fill the following fields : </h3>
//             <label>From location</label>
//             <input
//                 type="text"
//                 onChange={(e) => {
//                     setfrom(e.target.value);
//                 }}
//             />
//             <br />
//             <label>To location</label>
//             <input
//                 type="text"
//                 onChange={(e) => {
//                     setto(e.target.value);
//                 }}
//             />
//             <br />
//             <label>Date</label>
//             <input
//                 type="date"
//                 onChange={(e) => {
//                     setdate(e.target.value);
//                 }}
//             />
//             <br />

//             <br />
//             <Link  to={`/book/${from}/${to}/${date}/${username}`} className='  btn btn-small  me-5'>
//                 <button>
//                     Search
//                 </button>
//             </Link>
//         </div>
//         </>
//     );
// };

// export default Searchflights;

















import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Axios from "axios";
import './Search.css';
import NavBaru from "./Users/navbaru";



const Searchflights = () => {
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");
    const [date, setdate] = useState("");
    const {username}=useParams();


    Axios.defaults.withCredentials = true;



    return (
        <> <NavBaru/>
        <div className = 'baz'>
        <div className="searchflight">
            <h1 style={{ color:'skyblue' }}>SEARCH FLIGHT</h1>
            <br />
            <label>From location</label>
            <input
                type="text"
                onChange={(e) => {
                    setfrom(e.target.value);
                }}
            />
            <br />
            <label>To location</label>
            <input
                type="text"
                onChange={(e) => {
                    setto(e.target.value);
                }}
            />
            <br />
            <label>Date</label>
            <input
                type="date"
                onChange={(e) => {
                    setdate(e.target.value);
                }}
            />
            <br />

            <br />
            <Link  to={`/book/${from}/${to}/${date}/${username}`} className='  btn btn-small  me-5'>
                <button className="l">
                    Search
                </button>
            </Link>
        </div>
        </div>
        </>

       
    );
};

export default Searchflights;