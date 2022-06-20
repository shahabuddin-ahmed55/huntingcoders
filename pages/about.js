import Script from 'next/script'
import React from 'react'

const About = () => {
  return (
    <>
    <style jsx>
    {`
    h4{
      font-size: 75px;
      font-style: oblique;
      font-family: fantasy;
      text-transform: uppercase;
      display: flex;
      jsutify-content: space-around
    },
    p{

    }
    `}
    </style>
    <div>
      <h4 className='myh'>Shahabuddin Ahmed</h4>
      <p>I am a developer of <a href=""> NEXT.js </a>and also REACT.js</p>
      <p>I beleive on Skills not a degree</p>
    </div>

    </>
  )
}

export default About