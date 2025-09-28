"use server"
import React from 'react'
import Trackerpage from './Trackerpage'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const page = async () => {

const session = await auth();

  if (!session) {
    redirect("/auth/signin")
  };

  return (
    <div>
      <Trackerpage/>
    </div>
  )
}

export default page
