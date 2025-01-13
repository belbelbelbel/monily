'use client'
import { imageArray } from "@/constants";
import Image from "next/image";
import React from "react";

export const Sponsors = () => {


    const doubledImageArray = [...imageArray, ...imageArray]
    return (
        <div className='flex relative  z-30 justify-center xl:mt-0 md:mt-[2.5vw] mt-[2.5vw] md:gap-[3vw] gap-[2vw] xl:text-[10px] items-center'>
            <div className='overflow-hidden  md:w-[55vw] w-[65vw]'>
                <div
                    className='flex gap-[6vw] scroll-container'
                    style={{
                        width: `${doubledImageArray.length * 100}px`,
                        animation: 'scroll 5s linear infinite',
                    }}
                >
                    {doubledImageArray.map((item, index) => (
                        <Image src={item.src} alt={item.alt} width={50} height={40} />
                    ))}
                </div>
            </div>
        </div>
    )
}
