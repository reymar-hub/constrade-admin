import React from 'react';

import { MdDashboard } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { GrDocumentPerformance } from "react-icons/gr";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoPerson } from "react-icons/go";
const DashboardMenu = () => {
    return (
        <div className="h-full bg-[#FAFAFA]">
            <p className='text-center font-bold text-lg'>ADStudio</p>
            <div>
                <p className='font- text-md text-[#8a8888] ml-4 mt-8'>MAIN MENU</p>
                <div className='flex place-items-center w-full mt-4'>
                    <MdDashboard size={20} />
                    <input className='rounded text-[#625f5f] left-0' type="button" value="Dashboard" />
                </div>
                <div className='flex place-items-center w-full mt-4' >
                    <FaPaperPlane size={20} />
                    <input className='rounded text-[#625f5f] left-0' type="button" value="Campaign" />
                </div>
                <div className='flex place-items-center w-full mt-4'>
                    <IoMdWallet size={20} />
                    <input className='rounded text-[#625f5f] left-0' type="button" value="My Wallet" />
                </div>
                <div className='flex place-items-center w-full mt-4'>
                    <GrDocumentPerformance size={20} />
                    <input className='rounded text-[#625f5f] left-0' type="button" value="Performance" />
                </div>
                <div className="flex-grow border-t mt-8 border-gray-300">
                </div>
                <p className='font- text-md text-[#8a8888] ml-4 mt-8'>PREFERENCES</p>
                <div className='flex place-items-center w-full mt-4'>
                    <IoMdSettings size={20} />
                    <input className='rounded text-[#625f5f] left-0' type="button" value="Settings" />
                </div>
                <div className='flex place-items-center w-full mt-4'>
                    <TfiHeadphoneAlt size={20} />
                    <input className='rounded text-[#625f5f] left-0' type="button" value="Help Center" />
                </div>
                <div className='flex place-items-center absolute bottom-16 w-full'>
                    <GoPerson size={20} />
                    <input className='rounded text-[#625f5f] left-0' type="button" value="Admin User" />
                </div>
            </div>
        </div >
    );
};

export default DashboardMenu;