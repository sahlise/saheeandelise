// pages/api/sampleData.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {

    const filePath = path.resolve(process.cwd(), 'mockData', 'rsvpGet.json');
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
   
    return new Response(JSON.stringify(data), {
      status: 200
    })
  }


// export async function GET() {
//     return new Response("This is a new API route");
//   }