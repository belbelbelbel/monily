'use client'
import Image from 'next/image';
import React from 'react';
import { Urbanist, Varela_Round, Varela } from 'next/font/google';
import { FaApple } from "react-icons/fa";
import Logo from '../../public/Logo.svg';
import heroimg2 from '../../public/heroimg2.svg';
import { GrStatusGood } from "react-icons/gr"
import { Button } from '@/components/ui/button';
import './style.css';
import { usePathname } from 'next/navigation';
import Hamburger from './Hamburger';
type Props = {};
export const NavItems = ['Features', 'Pricing', 'Settings', 'Benefits'];
const ptSans = Urbanist({
    subsets: ['latin'],
    weight: '700',
});

const ptSans1 = Varela({
    subsets: ['latin'],
    weight: '400',
});

export default function NavBar({ }: Props) {
    const location = usePathname();

    const handleActiveLocation = (itemHref: string) => {
        return location === itemHref ? 'text-black font-extrabold' : 'text-black font-medium';
    };

    return (
        <div className={`w-screen md:p-10`}>
            <div className="flex md:shadow xl:h-[48vw] md:h-[56vw] h-[30rem]  relative bg md:rounded-[1rem] md:px-16 xl:px-24 py-8 px-6 gap-10 flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <Image
                            src={Logo}
                            alt="asc"
                            width={160}
                            height={200}
                            priority={true}
                        />
                    </div>

                    {/* Apply the font styles correctly */}
                    <div className={`flex items-center font-black gap-4 md:flex hidden ${ptSans.className}`}>
                        {NavItems.map((item, index) => (
                            <div key={index} className={`xl:p-2 cursor-pointer xl:text-[1.1rem] font-medium ${handleActiveLocation(item)}`}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className='hidden xl:block' >
                        <Button size={'lg'} className='text-[1.06rem] font-bold bg-[#2E68FD]'>Contact Us</Button>
                    </div>
                    <div className='md:hidden'>
                        <Hamburger />
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className='flex items-center  md:flex-row flex-col md:gap-0 gap-4  justify-between'>
                        <div className='relative flex flex-col gap-2 md:gap-4 '>
                            <div className='flex md:text-left text-center flex-col gap-2 xl:gap-3'>
                                <div className="text-[#932EFA]  font-bold">Easy Payment</div>
                                <div
                                    className={` flex tracking-[0.1px] xl:w-[91%] font-bold text-[2.05rem]  xl:text-[3.1rem] md:text-[36.5px] leading-tight ${ptSans1.className}`}
                                >
                                    Pay fast and smarter from anywhere
                                </div>
                                <div className='md:text-[0.7rem] text-[0.95rem] xl:text-[1.1rem]'>
                                    Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.
                                </div>
                            </div>
                            <div className='xl:flex hidden flex gap-4'>
                                <div className='bg-black cursor-pointer text-white rounded-[8px] md:px-3  md:py-[5px] xl:py-[6px] xl:px-4  gap-1 flex items-center'>
                                    <div><FaApple color='white' size={26} className='' /></div>
                                    <div className='flex flex-col md:leading-[0.7rem] xl:leading-[0.8rem]'>
                                        <div className='xl:text-[0.6rem] md:text-[0.5rem] text-white text-opacity-[0.8]'>Download on the</div>
                                        <div className={`xl:text-[1rem] md:text-[0.9rem] tracking-[1.1px] font-medium flex gap-[0.8px] ${ptSans1}`}> <div>App</div> <div>Store</div></div>
                                    </div>
                                </div>
                                <div className='bg-black cursor-pointer text-white rounded-[8px] md:px-3  md:py-[5px] xl:py-[6px] xl:px-4  gap-1 flex items-center'>
                                    <div><FaApple color='white' size={26} className='' /></div>
                                    <div className='flex flex-col md:leading-[0.7rem] xl:leading-[0.8rem]'>
                                        <div className='xl:text-[0.6rem] md:text-[0.5rem] text-white text-opacity-[0.8]'>Download on the</div>
                                        <div className={`xl:text-[1rem] md:text-[0.9rem] tracking-[1.1px] font-medium flex gap-[0.8px] ${ptSans1}`}> <div>App</div> <div>Store</div></div>
                                    </div>
                                </div>

                            </div>
                            <div className={`flex items-center gap-3 md:text-[1rem] md:w-auto justify-center md:justify-start text-[0.8rem] text-center xl:text-left text-gray-500 ${ptSans1.className}`}>
                                <div className='flex items-center gap-2'>
                                    <div><GrStatusGood className=''/></div>
                                    <div className=''>No Card reqiured</div> 
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div><GrStatusGood className=''/></div>
                                    <div className=''>Fast acceptance</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={heroimg2}
                                alt="heroimg1"
                                priority={true}
                                width={910}
                                height={400}
                                className='xl:w-[46rem] md:w-[45rem]'
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
