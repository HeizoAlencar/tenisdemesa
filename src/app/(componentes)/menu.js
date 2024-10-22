"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useEffect,useState } from "react";
import { useCallback } from "react";
const poppins = Poppins({ subsets: ["latin"], weight: "900" });

export const Menu = () => {
            

   


    const [isMenuTrasparent, setMenuTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const homePageHeight = window.innerHeight;
        if (scrollPosition > 0) {
        setMenuTransparent(false)
        
        }else{
            setMenuTransparent(true)
        }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
        }, []);

  return (
    <div className={`shadow-md  z-40 top-0 fixed transition-all left-0 right-0 h-auto border-b border-violet-500 ${isMenuTrasparent ? "  backdrop-blur" : " bg-violet-950" } p-2`}>
      <nav className="text-violet-600 text-xl w-full flex justify-between items-center flex-row  h-15 mx-5 rounded-lg ">
        <div
          id="logo" className="flex flex-row poppins-bold md:text-lg items-center "
        >
          <img src="/imagens/logo.png" className="h-10 md:mx-6" ></img>Table Tennis
        </div>
        <ul className="flex flex-row pr-10 ">
          <li>
            <Link href="/" className="poppins-medium mx-5 text-sm lg: text:md text-violet-500 hover:text-violet-100   transition-all "  >
                Home
            </Link>
          </li>
          <li>
            <Link href="/history" className="poppins-medium mx-5 text-sm lg: text:md text-violet-500 hover:text-violet-100   transition-all "  >
                Historia
            </Link>
          </li>
          <li>
            <Link href="/atletas" className="poppins-medium text-sm mx-5 lg: text:md text-violet-500 hover:text-violet-100   transition-all "  >
                Atletas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
