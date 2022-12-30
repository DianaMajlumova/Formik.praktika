import { useFormik, Form, Formik, Field } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Layouts/Navbar/Navbar'
function Home() {
  const [data, setData] = useState([])
  return (
    <>
      <Formik 
        initialValues={{
         username: "",
          name: "",
          password: "",
          email: "",
          about: "",
          phonenumber: "",
        }}
        onSubmit={(values) => {
          setData((prevState) => [...prevState, values])
        }}
      >
        {(props) => (
          <Form>
          <Field name="username" />
            <Field name="password" type="password" />
            <Field name="email" type="email" />
            <Field name="about" type="text" />
            <Field name="phonenumber" type="number" />
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>
      {

        <ol>
          {data.map((element, index) => {
            return (
              <li key={index}>
                <p>{element.username}</p>
                <p>{element.password}</p>
                <p>{element.email}</p>
                <p>{element.about}</p>
                <p>{element.phonenumber}</p>
              </li>
            )
          })}
        </ol>
      }
      <Helmet>
        <title>Home</title>
        <meta name='description' content='React project' />
      </Helmet>
      <Navbar />
    </>
  )
}
export default Home