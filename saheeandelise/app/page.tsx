// pages/index.js
import { redirect } from 'next/navigation';
import React from 'react';

export default function Page() {
  redirect('/wedding')

  return (
    <div>
      <h1>Welcome to Sahee and Elise&apos;s website!</h1>
    </div>
  )
};
