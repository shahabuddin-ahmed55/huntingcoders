import React from 'react'
import styles from "../styles/Home.module.css"
import Link from "next/link";


const Navbar = () => {
  return (
    <>
    <style jsx>
      {`
      #mainnav{
        font-size: 20px;
        font-weight: bold;
      }
      #mainnav ul li a:hover{
        color: blue
      }

      #mainnav ul li a:focus:{
        color: red
      }
      `}
    </style>
<div className={styles.mainNav} id="mainnav">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
      </div>  
      </>
      )
}

export default Navbar