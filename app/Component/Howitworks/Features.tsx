import { Urbanist, Varela } from 'next/font/google';
import React from 'react'
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { GrGoogleWallet, GrStatusGood } from 'react-icons/gr';
import { GrSecure } from "react-icons/gr";

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

const FeaturesArray = [
  {
    icon: <GrStatusGood size={30} />,
    bgColor: 'F3F7FF',
    title: 'Instant Payments',
    description: 'Send money to friends or family in real-time, for free.',
  },
  {
    icon: <RiSecurePaymentLine size={30} />,
    bgColor: 'FBF6EF', 
    title: 'No hidden fees',
    description: 'Clear and simple pricing. Always be aware of your costs.',
  },
  {
    icon: <FaWallet size={30} />,
    bgColor: 'EAF8FD',
    title: 'Digital Wallet',
    description: 'Store money securely and make fast transfers or purchases.',
  },
  {
    icon: <GrSecure size={30} />,
    bgColor: 'F4EDFC',
    title: 'Secure transactions',
    description: 'End-to-end encryption for all transactions.',
  },
];



const Features = (props: Props) => {
  return (
    <div className='xl:h-[65vh] md:h-[38vh] justify-center xl:flex flex-col  w-screen bg-features'>
      <div className={`w-[84%] mx-auto py-8 ${ptSans1.className}`}>
        <div className='flex flex-col gap-6'>
          {/* <div className={`text-center text-[#932EFA] font-bold tracking-[1px] ${ptSans2.className}`}>FEATURES</div> */}
          <div className={`font-bold md:w-[40%] w-[20rem]  mx-auto text-center text-[2rem] md:text-[2.05rem] text-center font-bold tracking-[1px]  ${ptSans1.className}`}>Why choose Monily for effortless payment</div>
          <div className='flex md:flex-row flex-col items-center'>
            {FeaturesArray.map((item, index) => (
              <div
                key={index}
                className="flex flex-col   shadow md:w-[38%] h-[13rem] w-[90%]  p-2 justify-center rounded-[10px] m-2  items-center gap-4"
                style={{ backgroundColor: `#${item.bgColor}` }}
              >
                <div>{item.icon}</div>
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