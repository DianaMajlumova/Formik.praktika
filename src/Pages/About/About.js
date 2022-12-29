import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Layouts/Navbar/Navbar'

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name='description' content='React project'/>
      </Helmet>
      <Navbar></Navbar>
      About
    </>
  )
}

export default About