// blog.js (Pages)
import React, { useState } from "react";
import styles from "@/styles/BlogItem.module.css";
// import Link from "next/link";
import * as fs from 'fs';
import Link from "next/link";

const Blog = (props) => {
  //this was the conditional rendering with the help of the javascirpt 
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((response) => response.json())
  //     .then((data) => setBlogs(data))
  //     .catch((error) => console.error("Error fetching blogs:", error));
  // }, []);

  // const [blogs, setBlogs] = useState(props.allBlogs);
  // console.log(props.allBlogs)
  // console.log(props);
  const[blogs] = useState(props.allBlogs);
  return (
    <div className={styles.blogs}>
      <main className={styles.blogItem}>
        {blogs.map((blogItem) => (
          <div className={styles.blogItem} key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3 className={styles.heading}>{blogItem.title}</h3>
            </Link>
            <p className={styles.blogItemp}>
              {blogItem.Summary || blogItem.content?.substring(0, 240)}...
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};
// Server side rendering
// export async function getServerSideProps({req, res}) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await data.json();
//   return {
//     props: {allBlogs},
//   }
// }

//this is the static side generation
export async function getStaticProps() {
  //here we will write full code logic to get all the data 
  let data = await fs.promises.readdir('blogdata')
  let myfile;
  let allBlogs = [];

  for(let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
    // let parsedContent = JSON.parse(myfile)
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: {allBlogs}
  }
}

export default Blog;
