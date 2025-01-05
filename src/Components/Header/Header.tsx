import React from 'react';
import { HeaderInput } from './HeaderInput';
import appIcon from '/favicon.png';

const Header = React.memo(() => {
  return (
    <header className="flex justify-between bg-slate-100 h-16 rounded-sm shadow-lg position-sticky">
        <section className='flex gap-4 p-3 '>
          <img src={appIcon} alt='Music Reddit Icon' className='w-10 h-10'/>
          <h2 className='text-3xl'>Music Reddit</h2>
        </section>
        <HeaderInput />
        <div/>
    </header>
  )
});

export default Header
