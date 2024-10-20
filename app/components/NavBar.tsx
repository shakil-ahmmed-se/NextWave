'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const {status, data: session} = useSession();

    return (
        <div className='flex space-x-4 bg-sky-400 p-5 hover:bg-sky-500 text-white text-xl'>
            <Link  href={'/'}>NextWave</Link>
            <Link  href={'/users/'}>Users</Link>
            {/* { status === 'loading' && <div>Loading...</div> } */}
            { status === 'authenticated' && <div>
                {session.user?.name}
                <Link href="/api/auth/signout" className='ml-3'>Sing Out</Link>
                </div>}
            { status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Login</Link>}
        </div>
    );
};

export default NavBar;