// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';
import { error } from "console";
import { isUtf8 } from "buffer";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  
) {
  // console.log(req)
 
  // await fs.readFile("blogpost/how-to-learn-flask.json",'utf-8',(err,data)=>{
  //   console.log(data)
  // })
  //reading the folder 
    let data = await fs.promises.readdir("blogdata")
        let myfile = [];
        let allblogs = [];
        // console.log(data)
       for (let index = 0; index < data.length; index++) {
          const item = data[index];
          //  console.log(item)
           myfile = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
          //  console.log(myfile)
          //  sinc coming content in the myfile in the text, so we are required them to parse in the string
           allblogs.push(JSON.parse(myfile));
          
         }
         res.status(200).json(allblogs)
       }
*/

// blog.ts (API route)
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs/promises";

type Blog = {
  title: string;
  content: string;
  slug: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[] | { error: string }>
) {
  try {
    const fileNames = await fs.readdir("blogdata");
    const allBlogs: Blog[] = [];

    for (const fileName of fileNames) {
      const fileContent = await fs.readFile(`blogdata/${fileName}`, "utf-8");
      const blog = JSON.parse(fileContent);
      const slug = fileName.replace(".json", "");
      allBlogs.push({ ...blog, slug });
    }

    res.status(200).json(allBlogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
}
