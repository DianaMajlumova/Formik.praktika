import React from 'react'
import { Helmet } from 'react-helmet'
// import Navbar from '../../Layouts/Navbar/Navbar'
import { useFormik, Form, Formik, Field } from 'formik'


function Contact() {
  return (
    // <>
    //   <Helmet>
    //     <title>Contact</title>
    //     <meta name='description' content='React project'/>
    //   </Helmet>
    //   <Navbar></Navbar>
    //   Contact
    // </>
<Formik
initialValues={{
  name:"Diana",
  about:"",
  accept:false,
  gender:1,
  skills:["javascript","css"],
}}
onSubmit={(values)=>{console.log(values);
}}
>
  {({values})=>(

 
<Form>
  <Field name="name"/><br/>
  <Field components="textarea"name="about"/>
  <br/>
  <button type="submit">Send</button>

  <label>
    <Field type="checkbox" name="accept"/>
  </label>
  <button disabled={!values.accept} type="submit">Send</button>
</Form>
 )}

</Formik>
  )
}

export default Contact