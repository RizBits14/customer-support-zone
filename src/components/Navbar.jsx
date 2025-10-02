import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-white shadow-md text-black'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    <div className='flex-shrink-0 text-2xl font-bold text-black'>
                        CS --- Ticket System
                    </div>

                    <div className='hidden md:flex gap-6 items-center'>
                        <h3 className='cursor-pointer'>Home</h3>
                        <h3 className='cursor-pointer'>FAQ</h3>
                        <h3 className='cursor-pointer'>Changelog</h3>
                        <h3 className='cursor-pointer'>Blog</h3>
                        <h3 className='cursor-pointer'>Download</h3>
                        <h3 className='cursor-pointer'>Contact</h3>
                        <button className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-2 rounded-sm text-white hover:from-[#9F62F2] hover:to-[#632EE3]'>
                            + New Ticket
                        </button>
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden px-2 pt-2 pb-4 space-y-2 bg-white shadow-md'>
                    <h3 className='cursor-pointer'>Home</h3>
                    <h3 className='cursor-pointer'>FAQ</h3>
                    <h3 className='cursor-pointer'>Changelog</h3>
                    <h3 className='cursor-pointer'>Blog</h3>
                    <h3 className='cursor-pointer'>Download</h3>
                    <h3 className='cursor-pointer'>Contact</h3>
                    <button className='w-full bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-2 rounded-sm text-white hover:from-[#9F62F2] hover:to-[#632EE3]'>
                        + New Ticket
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;