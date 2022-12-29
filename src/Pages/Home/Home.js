import { useFormik, Form, Formik, Field } from 'formik'
import React from 'react'
// import { Helmet } from 'react-helmet'
function Home() {
  const { handleSubmit, handleChange, values } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values) => { console.log(values); }
    }
  )
  return (
    <>
      {/* <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='React project'/>
      </Helmet>
      <Navbar></Navbar>
      Home
    </> */}
<Formik
initialValues={{
    username:"",
    password:""
  }}
  onSubmit={(values)=>{console.log(values);}
}
>
 
 {({value})=>{
  <Form>
    <Field name="username"/>
    <Field name="password" type="password"/>
    <button type="submit">Sign in</button>
  </Form>;
 }}


  
</Formik>








    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" value={values.username} onChange={handleChange}/>
      <label htmlFor="password">Password</label>
      <input id="password" value={values.password} onChange={handleChange}/>
      <button type="submit">Sign in</button>
    </form>
  </>
  );
}

export default Home