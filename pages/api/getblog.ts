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
    // fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8', (err, data)=>{
    //   if(err){
    //     res.status(500).json({error : "No such blog found"})
    //   }
    //   console.log(req.query.slug)
    //   res.status(200).json(JSON.parse(data));   
    // });

    let data = await fs.promises.readdir("blogdata")
    let myfile = [];
    let allblogs = [];
   for (let index = 0; index < data.length; index++) {
       const item = data[index];
       console.log(item)
       myfile = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
      //  console.log(myfile)
      //  sinc coming content in the myfile in the text, so we are required them to parse in the string
       allblogs.push(JSON.parse(myfile));
       res.status(200).json(allblogs)
     }
     
   }
   */

// getblog.ts (API route)
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs/promises";

type Blog = {
  title: string;
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog | { error: string }>
) {
  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Slug is required and must be a string" });
  }

  try {
    const filePath = `blogdata/${slug}.json`;
    const fileContent = await fs.readFile(filePath, "utf-8");
    const blog = JSON.parse(fileContent);

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(404).json({ error: "Blog not found" });
  }
}
