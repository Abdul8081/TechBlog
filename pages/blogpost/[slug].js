import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import parse from "html-react-parser";

// Default fallback component
const DefaultContent = () => <div>Content Not Available</div>;

// Mapping blog slugs to component filenames
const componentImports = {
  "how-to-learn-flask": "FlaskContentComponent",
  "how-to-learn-nextjs": "NextContentComponent",
  "how-to-learn-javascript": "JavaScriptContent",
};

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  useEffect(() => {
    console.log("Blog Data:", blog);
  }, [blog]);

  if (!blog) return <main className={styles.main}>Loading...</main>;

  // Check if the blog slug has a mapped component
  const BlogComponent = componentImports[blog.slug]
    ? dynamic(() => import(`../components/${componentImports[blog.slug]}`).catch(() => DefaultContent), {
        loading: () => <p>Loading...</p>,
        ssr: false, // Prevents server-side rendering issues
      })
    : DefaultContent;

  return (
    <main className={styles.main}>
      {/* <h1>{blog.title}</h1> */}
      {/* <hr /> */}
      <BlogComponent />
    </main>
  );
};

// DYNAMIC PATH GENERATION
export async function getStaticPaths() {
  const fs = require("fs"); // Import fs inside the function
  const blogFiles = await fs.promises.readdir("blogdata"); // Read all blog files

  const paths = blogFiles.map((file) => ({
    params: {
      slug: file.replace(".json", ""),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// FETCH BLOG DATA DYNAMICALLY
export async function getStaticProps(context) {
  const fs = require("fs"); // Import fs inside the function
  const { slug } = context.params;
  let myBlog;

  try {
    myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
    myBlog = JSON.parse(myBlog);
    console.log(`Fetched blog data for ${slug}:`, myBlog); // Debug log
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { notFound: true }; // Return 404 if file is missing
  }

  return {
    props: { myBlog: { ...myBlog, slug } },
  };
}

export default Slug;
