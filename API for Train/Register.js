import React, { useState } from 'react';

export default function Register() {
    const [company,setcompany]=useState("");
    const [owner,setOwner]=useState("");
    const [rollNo,setRollNo]=useState();
    const [email,setEmail]=useState("");
    const [access,setAccess]=useState("");

    const comp=(e)=>{
        setcompany(e.target.value);
    }

    const roll=(e)=>{
        setRollNo(e.target.value);
    }

    const OwnerName=(e)=>{
        setOwner(e.target.value);
    }

    const OwnerEmail=(e)=>{
        setEmail(e.target.value);
    }

    const accessCode=(e)=>{
        setAccess(e.target.value);
    }
 
        const handleSubmit=async(e)=>{
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/trains/register",{
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify({companyName:company,OwnerName:owner,RollNo:rollNo,ownerMail:email,AccessCode:access})
            });
      
            const json=await response.json();
            console.log(json);
        }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className='constainer'>
    <div className="form-group">
      <label for="exampleInputEmail1">Company Name</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={comp}/>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Owner Name</label>
      <input type="text" className="form-control" id="exampleInputPassword1" onChange={OwnerName}/>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Roll No</label>
      <input type="number" className="form-control" id="exampleInputPassword1" onChange={roll}/>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Owner Email</label>
      <input type="text" className="form-control" id="exampleInputPassword1" onChange={OwnerEmail}/>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">access Code</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={accessCode}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
  
  </div>
  )
}