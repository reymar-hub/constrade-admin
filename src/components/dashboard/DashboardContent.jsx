import React from 'react';
import { MdWavingHand } from "react-icons/md";
const DashboardContent = () => {
    return (
        <div className="h-full bg-[#f3f3f3]">
            <div className='grid grid-cols-2'>
                <div className='flex'>
                    <div>
                        <p className='flex font-bold text-lg ml-4 place-items-center'>Hello Admin
                            <MdWavingHand size={20} /></p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <input className='rounded ' type="text" name="search" placeholder='Search' />
                        <MdWavingHand size={20} />
                    </div>

                </div>
            </div>
            <p className='font-light text-sm ml-4'>Let's check your stats today!</p>
            <div className='grid grid-rows-4 grid-flow-col gap-6 ml-4'>
                <div className='sm:w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96 h-40 lg:h-48 xl:h-48 2xl:h-48 rounded bg-[#ffffff] row-span-2'>
                    <p>Total Sessions</p>
                </div>
                <div className='sm:w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96  h-40 lg:h-48 xl:h-48 2xl:h-48 rounded bg-[#ffffff] row-span-2'>
                    <p>Total Viewers</p>
                </div>
                <div className='sm:w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96  h-40 lg:h-48 xl:h-48 2xl:h-48 rounded bg-[#ffffff] row-span-2'>
                    <p>Time Spent</p>
                </div>
                <div className='sm:w-32 md:w-48 lg:w-64 xl:w-80 2xl:w-96  h-40 lg:h-48 xl:h-48 2xl:h-48 rounded bg-[#ffffff] row-span-2'>
                    <p>AVG Requests Received</p>
                </div>
                <div className='sm:w-40 md:w-48 lg:w-72 xl:w-80 2xl:w-96 h-full rounded bg-[#ffffff] row-span-4'>
                    <p>Views by Browser</p>
                </div>

            </div>
        </div>
    );
};

export default DashboardContent;