import React,{useEffect, useState} from 'react'

const Effect = () => {


    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    const [number, setnumber] = useState(1)
    const [firstname, setfirstname] = useState("Kunle")
    useEffect(()=>{
        console.log("hello")
    },[])
 
  return (
    <>
        effect page
        <h1>{number}</h1>
        <h1>{firstname}</h1>
        <button onClick={()=>setnumber(number+1)}>increase</button>
        <button onClick={()=>setfirstname("Abolade")}>CHANGE NAME</button>
    </>
  )
}

export default Effect