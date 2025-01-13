import { Urbanist, Varela } from 'next/font/google';
import React, { ReactNode } from 'react'
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { GrGoogleWallet, GrStatusGood } from 'react-icons/gr';
import { GrSecure } from "react-icons/gr";
import { FeaturesArray } from '@/constants';

type Props = {

}
const ptSans1 = Varela({
  subsets: ['latin'],
  weight: '400',
});
const ptSans2 = Urbanist({
  subsets: ['latin'],
  weight: '700',
});




const Features = (props: Props) => {
  return (
    <div className='xl:h-[65vh] md:h-[38vh]  justify-center md:flex flex-col  w-screen bg-features'>
      <div className={`lg:w-[87%] w-[87%] md:w-[90%] mx-auto py-8 ${ptSans1.className}`}>
        <div className='flex flex-col gap-6'>
          {/* <div className={`text-center text-[#932EFA] font-bold tracking-[1px] ${ptSans2.className}`}>FEATURES</div> */}
          <div className={`font-bold md:w-[60%] sm:w-[40%] xl:w-[40%]   mx-auto text-center text-[1.4rem] md:text-[2.05rem] text-center font-bold tracking-[1px]  ${ptSans1.className}`}>Why choose Monily for effortless payment</div>
          <div className='flex md:flex-row flex-col items-center'>
            {FeaturesArray.map((item:{
              icon:any,
              title: string,
              description: string,
              bgColor: string,
            }, index) => ( 
              <div
                key={index}
                className="flex flex-col   shadow md:w-[50%]  lg:w-[60%]  xl:w-[38%] h-[13rem] xl:h-[13rem] lg:h-[15rem] w-[90%]  p-2 justify-center rounded-[10px] m-2  items-center gap-4"
                style={{ backgroundColor: `#${item.bgColor}` }}
              >
                <div><item.icon size={30}/></div>
                <div className="flex text-center flex-col gap-2">
                  <div className="font-bold text-[1.1rem]  text-center">{item.title}</div>
                  <div className='font-medium text-[0.92rem]'>{item.description}</div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features