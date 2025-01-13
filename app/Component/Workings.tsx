import { Button } from '@/components/ui/button'
import { Varela } from 'next/font/google';
import downloadimg from '../../public/downloadimg.avif'
import linkaccimg from "../../public/linkaccimg.png"
import paymentimg from "../../public/ paymentimg.webp"
import Image from 'next/image';
import React from 'react'

type Props = {}
const ptSans1 = Varela({
    subsets: ['latin'],
    weight: '400',
});
const Workings = (props: Props) => {
    return (
        <div className='w-screen '>
            <div className='flex flex-col gap-20 w-[84%] mx-auto'>
                <div className='flex md:flex-row flex-col justify-between w-full items-center'>
                    <div className='text-[#932EFA] text-center font-bold'>HOW IT WORKS</div>
                    <div className={` ${ptSans1.className} md:w-[40rem] md:text-right text-center text-[1.5rem] md:text-[2.2rem] lg:text-[2.5rem]`}>Make payments, transfers, and more in 3 simple steps</div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col md:flex-row justify-between items-center w-[78%] mx-auto'>
                        <div className='flex'>
                            <div className={`text-[2.5rem] text-gray-400 font-bold ${ptSans1.className}`}>01</div>
                            <div>
                                <Image src={downloadimg} width={260} priority={true} height={50} alt='downloadingpic' />
                            </div>
                        </div>
                        <div className={`  p-6 ${ptSans1.className} `}>
                            <div className='text-[1.2rem] font-bold'>Download The App</div>
                            <div className='text-[1rem] w-[20rem] font-normal'>Get the Monks Pay app today from the App Store or Google Play hassle free.</div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-col md:flex-row flex-col-reverse justify-between items-center w-[78%] mx-auto'>
                        <div className={`  p-6 ${ptSans1.className} `}>
                            <div className='text-[1.2rem] font-bold'>Link your bank or card</div>
                            <div className='text-[1rem] w-[20rem] font-normal'>Easily connect your account in seconds with advanced security for peace of mind.</div>
                        </div>
                        <div className='flex'>
                            <div className={`text-[2.5rem] text-gray-400 font-bold ${ptSans1.className}`}>02</div>
                            <div>
                                <Image src={linkaccimg} width={260} priority={true} height={50} alt='downloadingpic' />
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className='flex flex-col md:flex-row f md:flex-row justify-between items-center w-[78%] mx-auto'>
                        <div className='flex'>
                            <div className={`text-[2.5rem] text-gray-400 font-bold ${ptSans1.className}`}>03</div>
                            <div className=''>
                                <Image src={paymentimg} width={300} priority={true} height={50} alt='downloadingpic' />
                            </div>
                        </div>
                        <div className={`  p-6 ${ptSans1.className} `}>
                            <div className='text-[1.2rem] font-bold'>Start Paying</div>
                            <div className='text-[1rem] w-[20rem] font-normal'>Easily split bills, send money to friends, and make smooth online payments instantly.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workings