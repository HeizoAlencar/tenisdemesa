"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "900" });

export const Footer = () => {
  const [isFooterVisible, setFooterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const footerHeight = 100; // altura fictícia para o footer
      const windowHeight = window.innerHeight;
      
      if (scrollPosition + windowHeight >= document.body.offsetHeight - footerHeight) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`relative  bottom-0 w-full transition-all bg-violet-950 text-white p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="poppins-bold text-sm">
          © {new Date().getFullYear()} Table Tennis. Todos os direitos reservados.
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/privacy-policy" className="poppins-medium text-sm text-violet-300 hover:text-violet-100 transition-all">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="poppins-medium text-sm text-violet-300 hover:text-violet-100 transition-all">
              Termos de Serviço
            </Link>
          </li>
          <li>
            <Link href="/contact" className="poppins-medium text-sm text-violet-300 hover:text-violet-100 transition-all">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
