import React from 'react';

function TitleBar() {
    return (
        <div className='p-8 px-14 pl-[75px]'>
            <nav className='flex justify-between'>
                <div className='text-2xl font-semibold'>TAHMID</div>
                <ul className='flex text-xl font-medium'>
                    <li className='mx-6'><a href="#">HOME</a></li>
                    <li className='mx-6'><a href="#">ABOUT</a></li>
                    <li className='mx-6'><a href="#">WORK</a></li>
                    <li className='mx-6'><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default TitleBar;
