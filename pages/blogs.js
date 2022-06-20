import React from 'react'
import styles from "../styles/Home.module.css"

const Blogs = () => {
  return (
    <>
    <style jsx>
      {`
      div{
        display: flex;
        // border: 1px red solid;
        flex-direction: column;
        max-width: 800px;
        align-items: center;
        justify-content: center;
        margin-left: 222px;
      }
      `}
    </style>
    <div >
      
        <a href="/" >
          <h2>For Students &rarr;</h2>
          <p>Keep it Up and make them powerfully web developer and learn more skills</p>
        </a>

        <a href="/" >
          <h2>For Developer &rarr;</h2>
          <p>You have a degree is deos`nt matter, just yoy have any skill and hapyy for tour life</p>
        </a>

        <a href="/" >
          <h2>For Builder &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects. Your Life is journy for your happoness</p>
        </a>

        <a href="/" >
          <h2>For Teacher &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel. are you sure about your self-confident.</p>
        </a>
      </div>
      </>
  )
}

export default Blogs