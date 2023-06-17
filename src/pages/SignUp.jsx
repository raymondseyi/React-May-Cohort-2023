import React,{useState} from 'react'
import axios from "axios";
const SignUp = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let url = "http://localhost:5000/user/register"
    const register = ()=>{
        axios.post(url,{firstname,lastname,email,password})
        // console.log(firstname,lastname,email,password)
    }
  return (
    <>
        <input type="text" placeholder='First Name' onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text" placeholder='Last Name' onChange={(e)=>setlastname(e.target.value)}/>
        <input type="text" placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={register}>Sign UP</button>
    </>
  )
}

export default SignUp