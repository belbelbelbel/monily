import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Hamburger.css"; // Import your CSS styles

import { NavItems } from "./NavBar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = usePathname()
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleActiveLocation = (itemHref: string) => {
        return location === itemHref ? 'text-black font-extrabold' : 'text-black font-medium';
    };


    // Variants for menu items with stagger effect
    const menuVariants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.2, ease: 'easeIn', type: 'spring', damping: 10, stiffness: 50 },
        },
        exit: {
            opacity: 0,
            y: 100,
            transition: { duration: 0.2, ease: 'easeIn', type: 'spring', damping: 10, stiffness: 50 },
        }

    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="">
            {/* Hamburger Icon */}
            <div className="hamburger-container relative " onClick={toggleMenu}>
                <svg
                    className={`hamburger ${isOpen ? 'open' : ''}`}
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                >
                    <line className="line top" x1="20" y1="30" x2="80" y2="30" />
                    <line className="line middle" x1="20" y1="50" x2="80" y2="50" />
                    <line className="line bottom" x1="20" y1="70" x2="80" y2="70" />
                </svg>
            </div>
            <AnimatePresence>
                {isOpen && (  
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="fixed bg z-50 h-[40vh] w-screen top-20 px-10 left-0"
                    >
                        {NavItems.map((item, index) => (
                            <motion.li key={index}
                                variants={itemVariants}
                                className="cursor-pointer hover:underline mt-6" >
                                <a
                                    href={item}
                                    className={handleActiveLocation(item)}
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;
