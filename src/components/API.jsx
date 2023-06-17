import React, {useState,useEffect} from 'react'
import axios from 'axios'

const API = () => {
  let url = "https://api.github.com/users"
  const [data, setdata] = useState([])
  const [isloading, setisloading] = useState(true)
  useEffect(() => {
    getData()
  },[])
  
  const getData = ()=>{
     axios.get(url)
     .then((response)=>{
        setisloading(false)
        console.log(response.data)
        setdata(response.data)
     })  
  }
  return (
    <>
        {/* <button onClick={getData}>Get Data from an API</button> */}
        {
            isloading==true ? "loading..." :
            data.map((users,index)=>(
                <div key={index}>
                     <h1>{users.login}</h1>
                </div>
               
            ))
        }
    </>
  )
}

export default API