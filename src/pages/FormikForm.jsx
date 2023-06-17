import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
const FormikForm = () => {
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit : (values)=>{
        console.log(values)    
    },
    validationSchema : Yup.object({
        firstname : Yup.string().required("you must fill this, it is required"),
        lastname : Yup.string().required("you must fill this, it is required"),
        email : Yup.string().required("you must fill this, it is required").email("you must enter an email address"),
        password :  Yup.string().required("you must fill this, it is required")
    })
  });
  console.log(formik.touched);
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-6 mx-auto">
            <form action="" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className={formik.touched.firstname && formik.errors.firstname ? 'form-control my-2 is-invalid' : 'form-control my-2'}
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small className="text-danger">{formik.touched.firstname && formik.errors.firstname }</small>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control my-2"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small  className="text-danger">{formik.touched.lastname && formik.errors.lastname}</small>
            <input
              type="text"
              placeholder="Email"
              className="form-control my-2"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
              <small  className="text-danger">{formik.touched.email && formik.errors.email}</small>
            <input
              type="text"
              placeholder="Password"
              className="form-control my-2"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
              <small  className="text-danger">{formik.touched.password && formik.errors.password}</small>
            <button type="submit" className="btn btn-info w-100 py-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormikForm;
