'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Urbanist, Varela_Round, Varela } from 'next/font/google';
import { FaApple } from "react-icons/fa";
import Logo from '../../../public/Logo.svg';
import heroimg2 from "../../../public/heroimg2.svg"
import { GrStatusGood } from "react-icons/gr"
import { Button } from '@/components/ui/button';
import { FaGooglePlay } from "react-icons/fa";
import './style.css';
import { usePathname } from 'next/navigation';
import Hamburger from './Hamburger';
type Props = {};
export const NavItems = ['About', 'Why Monily', 'FAQ'];
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
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleActiveLocation = (itemHref: string) => {
        return location === itemHref ? 'text-black font-extrabold' : 'text-black font-medium';
    };

    return (
        <div className={`w-screen h-[70vh]  md:p-10`}>
            <div className="flex md:shadow xl:h-[47vw] md:h-[56vw] h-[30rem]  relative bg md:rounded-[1rem] md:px-16 xl:px-20 py-8 xl:py-6 px-6 md:gap-10 gap-[75px] flex-col">
                <div className={`relative flex items-center md:py-6 justify-center mb-0 w-[100%] `}>
                    <div className={`flex  fixed w-full md:w-[90%] px-8 md:px-12 md:rounded-[0.8rem]   items-center h-[5rem] justify-between ${isScrolled ? "bg-gray-100/80 z-50 transition-all backdrop-blur-md" : "bg-gray-100/80 md:bg-transparent z-50 md:z-0"}  `}>
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
                        <div className={`flex   items-center font-bold gap-4 md:flex hidden ${ptSans1.className}`}>
                            {NavItems.map((item, index) => (
                                <div key={index} className={`xl:p-2 cursor-pointer xl:text-[1.1rem] font-medium ${handleActiveLocation(item)}`}>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className='hidden md:block' >
                            <Button size={'lg'} className='text-[1.06rem] shadow  font-bold bg-[#2E68FD]'>Contact Us</Button>
                        </div>
                        <div className='md:hidden'>
                            <Hamburger />
                        </div>
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
                            <div className='md:flex hidden flex gap-4'>
                                <div className='bg-black cursor-pointer text-white rounded-[8px] md:px-3 xl:w-[11rem] md:w-[9rem] shadow  md:py-[5px] xl:py-[6px] xl:px-7  gap-1 flex items-center'>
                                    <div><FaApple color='white' size={28} className='' /></div>
                                    <div className='flex flex-col md:leading-[0.7rem] xl:leading-[0.8rem]'>
                                        <div className='xl:text-[0.6rem] md:text-[0.5rem] text-white text-opacity-[0.8]'>Download on the</div>
                                        <div className={`xl:text-[1rem] md:text-[0.9rem] tracking-[1.1px] font-medium flex gap-[0.8px] ${ptSans1}`}> <div>App</div> <div>Store</div></div>
                                    </div>
                                </div>
                                <div className='bg-black cursor-pointer text-white rounded-[8px] md:px-3  xl:w-[11rem] md:w-[9rem]  shadow  md:py-[5px] xl:py-[6px] xl:px-6  gap-1 flex items-center'>
                                    <div><FaGooglePlay color='white' size={25} className='' /></div>
                                    <div className='flex flex-col md:leading-[0.7rem] xl:leading-[0.8rem]'>
                                        <div className='xl:text-[0.6rem] md:text-[0.5rem] text-white text-opacity-[0.8]'>Download on the</div>
                                        <div className={`xl:text-[1rem] md:text-[0.9rem] tracking-[1.1px] font-medium flex gap-[0.8px] ${ptSans1}`}> <div>Google</div> <div>Play</div></div>
                                    </div>
                                </div>

                            </div>
                            <div className={`flex items-center gap-3 md:text-[1rem] md:w-auto justify-center md:justify-start text-[0.8rem] text-center xl:text-left text-gray-600 ${ptSans1.className}`}>
                                <div className='flex items-center gap-1'>
                                    <div><GrStatusGood className='' /></div>
                                    <div className=''>No Card reqiured</div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div><GrStatusGood className='' /></div>
                                    <div className=''>Fast acceptance</div>
                                </div>
                            </div>
                        </div>
                        <div className='relative '>
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
