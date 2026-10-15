import React from 'react'
import Link from 'next/link'
import LogoutButton from './logoutButton';
import { getSession } from '../_lib/session';

async function Navbar() {
    const session = await getSession(); 


    return (
        <div>

            <nav className='bg-white shadow-sm'>

                <div className='container mx-auto p-4 flex justify-between items-center'>
                    
                    <Link href="#" className="text-xl font-bold text-blue-600">
                        Contact Manager
                    </Link>

                    <div className='flex items-center space-x-4'>
                        {session ? (

                            <>
                                <Link href="/contact" className="hover:text-blue-800 mr-8">
                                    Contacts
                                </Link>
                                <LogoutButton />
                                
                            </>

                        ) : (

                            <>
                                <Link href="/login" className="hover:text-blue-800 mr-5">
                                    Login
                                </Link>
                                <Link href="/Register" className="hover:text-blue-800">
                                    Register
                                </Link>

                            </>

                        )}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

