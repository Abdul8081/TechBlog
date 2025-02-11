// // slug.js (Pages)
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../../styles/Home.module.css";

// const Slug = () => {
//   const [blog, setBlog] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (!router.isReady) return;

//     const { slug } = router.query;
//     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//       .then((response) => response.json())
//       .then((data) => setBlog(data))
//       .catch((error) => console.error("Error fetching blog:", error));
//   }, [router.isReady]);

//   if (!blog) {
//     return <main className={styles.main}>Loading...</main>;
//   }

//   return (
//     <main className={styles.main}>
//       <h1>{blog.title}</h1>
//       <hr />
//       <div>{blog.content}</div>
//     </main>
//   );
// };

// export default Slug;


import { useState } from "react";
import styles from "../../styles/Home.module.css";
import * as fs from 'fs';
const Slug = (props) => {
  // this is the function for the MarckUp 
  function createMarkup (c) 
  {
    return {__html : c};
  }

  const[blog] = useState(props.myBlog);
  //this is the external modification I am doing here

  if (!blog) {
    return <main className={styles.main}>Loading...</main>; // Handle fallback state for ISR
  }


  return (
    <main className={styles.main}>
      <h1>{blog.title}</h1>
      <hr />
      {/* this I havr setted for the dangerously setup of the HTML */}
      {<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>} 
    </main>
  );
};

// Generate all possible paths for blog posts
export async function getStaticPaths() {
  return {
    paths: [
      {params : {slug: 'how-to-learn-javascript'}},
      {params : {slug: 'how-to-learn-nextjs'}},
      {params : {slug: 'how-to-learn-flask'}}
    ],
    fallback: true //false or 'bloking'
  };
}

// Fetch blog data for a specific slug
export async function getStaticProps(context) {
  const {slug} = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

  return {
    props : {myBlog : JSON.parse(myBlog)},
  }
}

export default Slug;
