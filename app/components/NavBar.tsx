import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='flex bg-sky-400 p-5 hover:bg-sky-500 text-white text-xl'>
            <Link className='mr-5' href={'/'}>NextWave</Link>
            <Link href={'/users/'}>Users</Link>
        </div>
    );
};

export default NavBar;