import { NextApiRequest,NextApiResponse } from "next";
import * as fs from "fs";
export default async function handler(
    req : NextApiRequest,
    res : NextApiResponse 
) {
    if(req.method == 'POST'){
        
        const data = req.body; // extract the request body
        console.log(data)
        try{
            const files = await fs.promises.readdir('contactdata')
            const filename = `contactdata/${files.length + 1}.json`;
            await fs.promises.writeFile(filename, JSON.stringify(data, null,2), 'utf-8');
            // here in this, 2 is used for the indentation, like how many spaces, it will use when creat data in the json file
            // null : it is used to replacer, if we want to modify some data while putting in the json file then we can do so, with the help of the null here

            // response with a success message 
            res.status(200).json({success: true, message: 'Data saved Successfully!'});
        }
        catch(error) {
            console.error('File writing error:', error);
            res.status(500).json({success:"fail", message:"Errro occured in saving the data"});
        }
    }
    else{
    res.setHeader('Allow', ['POST']);
    res.status(405).json({success:false, error: 'Method Not allowed'});
    }
}
