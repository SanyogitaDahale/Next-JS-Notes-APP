'use client'
import React from 'react'
import { logoutAction } from '../actions/auth'

const logoutButton = () => {
  const handleLogout = async () => {
    try{
      await logoutAction();
      // Redirect happens in server action 
    }catch(error){}
  }
  return (
    <div>
      <div><button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors curser-pointer" onClick={handleLogout}>Logout</button></div>
    </div>
  )
}

export default logoutButton
