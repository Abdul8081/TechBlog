import dynamic from "next/dynamic";
import { useEffect } from "react";
import fs from "fs/promises"; // ✅ Use import instead of require
import styles from "../../styles/Home.module.css";

// Default fallback component
const DefaultContent = () => <div>Content Not Available</div>;

// Mapping blog slugs to component filenames
const componentImports = {
  "how-to-learn-flask": "FlaskContentComponent",
  "how-to-learn-nextjs": "NextContentComponent",
  "how-to-learn-javascript": "JavaScriptContent",
};

const Slug = (props) => {
  const blog = props.myBlog;

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
      <BlogComponent />
    </main>
  );
};

// DYNAMIC PATH GENERATION
export async function getStaticPaths() {
  try {
    const blogFiles = await fs.readdir("blogdata"); // ✅ Removed require and used fs/promises

    const paths = blogFiles.map((file) => ({
      params: {
        slug: file.replace(".json", ""),
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error reading blog data:", error);
    return { paths: [], fallback: "blocking" };
  }
}

// FETCH BLOG DATA DYNAMICALLY
export async function getStaticProps(context) {
  const { slug } = context.params;

  try {
    const blogContent = await fs.readFile(`blogdata/${slug}.json`, "utf-8"); // ✅ Used fs.promises
    const myBlog = JSON.parse(blogContent);
    console.log(`Fetched blog data for ${slug}:`, myBlog); // Debug log

    return {
      props: { myBlog: { ...myBlog, slug } },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { notFound: true }; // Return 404 if file is missing
  }
}

export default Slug;
