import Link from 'next/link';
import React from 'react';

const BottomNavigation = () => {
  return (
    <nav className='fixed bottom-0 z-20 flex w-full gap-2 border-t border-gray-300 bg-white p-2 text-center sm:hidden md:relative'>
      {/* <button className='bottom-nav-buttons' aria-label='Sudarshan Kriya'>
        Join Sudarshan Kriya
      </button> */}
      <button className='bottom-nav-buttons' aria-label='Sahaj Samadhi'>
      <Link href={'mailto:info@nisheetabajaj.com'}>Connect Nisheeta</Link>
      </button>
    </nav>
  );
};

export default BottomNavigation;
