// pages/api/sampleData.ts

import { type NextRequest } from 'next/server'
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {

  // const searchParams = request.nextUrl.searchParams
  // const query = searchParams.get('groupid')
  
  // if(query === 'test') {
  //     return new Response('Error', {
  //       status: 400,
  //     })
  // }
  
  const filePath = path.resolve(process.cwd(), 'mockData', 'rsvpGet.json');
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  return new Response(JSON.stringify(data), {
    status: 200
  })
}

export async function POST(request: Request) {

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