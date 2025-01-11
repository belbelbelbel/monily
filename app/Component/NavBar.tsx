import Image from 'next/image';
import React from 'react';
import { Urbanist, Varela_Round,Varela } from 'next/font/google';
import Logo from '../../public/Logo.svg';
import heroimg2 from '../../public/heroimg2.svg';
import { Button } from '@/components/ui/button';
import './style.css';

const NavItems = ['Features', 'Pricing', 'Settings', 'Benefits'];

// Correctly define the font loader in the module scope
const ptSans = Urbanist({
    subsets: ['latin'], // Specify subsets
    weight: '700', // Specify weights if needed
});

type Props = {};

export default function NavBar({ }: Props) {
    return (
        <div className={`w-screen p-10`}>
            <div className="flex shadow bg rounded-[1rem] px-24 py-8 gap-10 flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <Image
                            src={Logo}
                            alt="asc"
                            width={140}
                            height={200}
                            className="rounded-full"
                            priority={true}
                        />
                    </div>

                    {/* Apply the font styles correctly */}
                    <div className={`flex items-center font-black gap-4 ${ptSans.className}`}>
                        {NavItems.map((item, index) => (
                            <div key={index} className="p-2 cursor-pointe text-[1.1rem] font-medium">
                                {item}
                            </div>
                        ))}
                    </div>

                    <div>
                        <Button>Contact Us</Button>
                    </div>
                </div>

                <div className="flex items-center  justify-between">
                    <div className='relative bottom-6'>
                        <div className="text-[#932EFA] font-bold">Easy Payment</div>
                        <div
                            className={`self-left flex  tracking-[0.1px] font-bold text-[2.5rem] xl:text-[3.6rem] leading-tight ${ptSans.className}`}
                        >
                            Pay fast and smarter <br /> from anywhere
                        </div>
                        <div className='w-[65%] text-MD'>
                            Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.
                        </div>
                    </div>
                    <div>
                        <Image
                            src={heroimg2}
                            alt="heroimg1"
                            priority={true}
                            width={710}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
