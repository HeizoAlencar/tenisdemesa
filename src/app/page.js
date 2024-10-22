import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <img src="/imagens/banners/banner-home.png" className="fixed z-0 h-screen w-full opacity-15 saturate-150 object-cover   " />
      <div className="  z-10 absolute w-screen h-screen  flex-cols  ">
        <div className=" flex flex-col justify-center container mx-auto md flex  items-center h-screen w-full ">
          <div className="poppins-medium text-center  text-align-center md:text-6xl text-4xl text-slate-100   md:text-md">
            Welcome to{" "}
            <span className="poppins-extrabold  bg-gradient-to-r  from-violet-500 to-purple-500 pb-6 bg-clip-text text-transparent inline-block">
              Table Tennis
            </span>{" "}
            World.
          </div>
          <Link
            className="text-sm motion-safe:animate-bounce poppins-bold text-slate-200  transition-all p-3 bg-gradient-to-r rounded-md  from-violet-500 to-purple-500 "
            href="/history"
          >
            Descobrir
          </Link>
        </div>
      </div>
    </div>
  );
}
