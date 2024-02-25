'use client'
import { useRouter } from 'next/router';
import React from 'react';
import { redirect, useSearchParams } from 'next/navigation'

export default function Page() { 
    
    const searchParams = useSearchParams()
    const groupId = searchParams.get('groupid')
    
    if(!groupId) {
        redirect('/wedding/rsvp')
    }
    
    
    return (
  <div>
    <h1>Response</h1>
    <div>{groupId}</div>
  </div>
)
};
