// pages/api/sampleData.ts

import { type NextRequest } from 'next/server'
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {

  const pictures = [
    "https://www.saheeandelise.com/images/collages/0.jpg",
    "https://www.saheeandelise.com/images/collages/3.jpg",
    "https://www.saheeandelise.com/images/collages/7.jpg",
    // Add more picture URLs as needed
  ];

  return new Response(JSON.stringify({images: pictures}), {
    status: 200
  })
}



export async function POST(request: Request) {

  return new Response(JSON.stringify({message: 'success'}), {
    status: 200
  })
}