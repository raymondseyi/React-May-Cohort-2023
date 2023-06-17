import React, { useState } from "react";

const Fish = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allStudents, setallStudents] = useState([]);

  const register = ()=>{
    // store into an object
    let student = {
      firstname,lastname,email,password
    }
    // push into an array
    setallStudents([...allStudents,student]);

  }
  const deleteStudent = (i)=>{
    let newStudents = [...allStudents]
    newStudents.splice(i,1);
    setallStudents(newStudents);
  }
  return (
    <>
      <h1>School Portal</h1>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setfirstname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setlastname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={register}>Sign Up</button>

      <hr />
      <h1>List of students</h1>

      <table className="table table-striped">
         <tr>
          <td>S/N</td>
          <td>Firstname</td>
          <td>Lastname</td>
          <td>Email</td>
          <td>Actions</td>
         </tr>
      
      {
         
        allStudents.map((student,index)=>(
          <tr>
            <td>{index +1 }</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>
            <td>
              <button className="btn btn-danger mx-2"  onClick={()=>deleteStudent(index)}>Delete</button>
              <button className="btn btn-warning">Edit</button>
            </td>
          </tr>
        ))
      }
      </table>
    </>
  );
};

export default Fish;
