import React from "react";
import styles from "../styles/Blog.module.css"
import Link from "next/link";
const Blogs = () => {
  return (
    <>
      <style jsx>
        {`
          div {
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
      <div className={styles.main}>
        <div>
          <Link href={"/blogposts/for-students"}>
            <h3 className={styles.blogitemh3}>For Students &rarr;</h3>
          </Link>

          <p>
            Keep it Up and make them powerfully web developer and learn more
            skills fro your luck to prove you
          </p>

          <Link href={"/blogposts/for-teacher"}>
            <h3 className={styles.blogitemh3}>For Teachers &rarr;</h3>
          </Link>
          <p>
            You have a degree is deos`nt matter, just yoy have any skill and
            hapyy for tour life and doing best
          </p>

          <Link href={"/blogposts/for-builder"}>
            <h3 className={styles.blogitemh3}>For Builder &rarr;</h3>
          </Link>
          <p>
            Discover and deploy boilerplate example Next.js projects. Your Life
            is journy for your happoness
          </p>

          <Link href={"/blogposts/for-developer"}>
            <h3 className={styles.blogitemh3}>For Developer &rarr;</h3>
          </Link>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel. are
            you sure about your self-confident.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
