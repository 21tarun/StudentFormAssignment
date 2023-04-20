import React from 'react'

function Form() {
    const [fname,setFname]=React.useState("")
    const [lname,setLname]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [phone,setPhone]=React.useState("")
    const [flag,setFlag]=React.useState(false)
  return (
    <>
    <div>
          <label for="fname">First name:</label><br/>
          <input type="text" onChange={(e)=>setFname(e.target.value)}/><br/>
          <label for="lname">Last name:</label><br/>
          <input type="text" onChange={(e)=>setLname(e.target.value)}/><br/>
          <label for="lname">Email Id:</label><br/>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label for="lname">Phone No:</label><br/>
          <input type="text" onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
          <input type="submit" onClick={()=>{setFlag(true);console.log("hello")}}></input>
    </div>
    {
        flag?
        <table style={{margin:"auto"}}>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            <tr>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>

        </table>:<></>
    }
    </>
  )
}

export default Form