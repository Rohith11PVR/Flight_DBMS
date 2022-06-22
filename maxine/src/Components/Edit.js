import Axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Edit() {

    const [newflightname, setnewflightname] = useState('')
	const [newfrom, setnewfrom] = useState('')
	const [newto, setnewto] = useState('')
	const [newcapacity, setnewcapacity] = useState(0)
    const [arrivaltime, setarrivaltime] = useState('')
    const [cost, setcost] = useState(0)
    const [date, setdate] = useState('')
    const {id}=useParams();

    const handlesave=(e)=>{
        if(newflightname==='' || newfrom==='' ||newto==='' ||date===''|| newcapacity==='' ||arrivaltime==='' || cost==='' )
		{
			alert('Please Fill all fields')
			return
		}
    
        Axios.post('http://localhost:3001/admin/updatebus',{
          id:parseInt(id),
            name:newflightname,
            from:newfrom,
            to:newto,
            cap:newcapacity,
            date:date,
            arrivaltime:arrivaltime,
            cost:cost
           

        }).then((resp)=>{
            if(resp.data.ff==='s')
            {
                alert('Updated')
            }
            else
            {
                alert('Not Updated')
            }

        })
        e.preventDefault()

    }
  return (
    <>
    <div className="head">



    <div class="container-contact100">
		<div class="wrap-contact100">
			<form class="contact100-form validate-form">
				<span class="">
          <h3 className='hdd' style={{marginLeft:'60px'    }}>	 Edit flight with id :   {id}</h3>
				
				</span>

				<div class="wrap-input100 validate-input" data-validate="Name is required">
					
					<input class="input100" type="text"  name="name" onChange={e=>setnewflightname(e.target.value)} placeholder="               New Flight Name" required/>
					<span class="focus-input100"></span>
				
        </div>
        <div className="fc">
				<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					
					<input class="input100" type="text" name="email" onChange={e=>setnewfrom(e.target.value)}   placeholder="               From " required/>
					<span class="focus-input100"></span>
				</div>
        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					
					<input class="input100" type="time" name="email" onChange={e=>setarrivaltime(e.target.value)}   placeholder="Start Time" required/>
					<span class="focus-input100"></span>
				</div>
</div>
<div className="fc">
        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					
					<input class="input100" type="text" name="email" onChange={e=>setnewto(e.target.value)}   placeholder="               To Location" required/>
					<span class="focus-input100"></span>

				</div>
        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					
					<input class="input100" type="number" name="email" onChange={e=>setdate(e.target.value)}   placeholder="               Duration" required/>
					<span class="focus-input100"></span>
				</div>

        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					
					<input class="input100" type="number" name="email" onChange={e=>setcost(e.target.value)}   placeholder="               Cost" required/>
					<span class="focus-input100"></span>
				</div>
        </div>
        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					
					<input class="input100" type="number" name="email" onChange={e=>setnewcapacity(e.target.value)}  placeholder="               New Capacity" required/>
					<span class="focus-input100"></span>
				</div>
        

			

				


        <button  className = "nl" onClick={handlesave}>Update</button>
			</form>
		</div>
	</div>



	<div id="dropDownSelect1"></div>
    </div>

    </>
  )
}