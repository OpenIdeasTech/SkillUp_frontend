"use client";

import CardList from "@/components/CardList";
import NavHome from "../../_components/NavHome";
import Footer from "@/components/Footer";

export default function HomeAfterLogin() {
  return (
   <div>
     <div className="flex flex-col px:10 lg:px-28">
        <div className="flex flex-col w-full h-[320px] bg-[#FCFBFF] mb-20">
            <NavHome />
            <div className="flex flex-col h-full items-center justify-center text-center gap-4">
              <h1 className="font-bold text-4xl md:text-6xl font-[Instrument_Sans]">Experimente novas experiências</h1>
              <p className="text-3xl font-[Inter]">Crie um portfólio colaborativo, conecte-se com outras pessoas.</p>
            </div>
        </div>
        <div className=" px-10 lg:px-0">
          <h2 className="font-bold text-4xl font-[Inter] mb-[30px]">Comunidade</h2>
          <CardList />
        </div>
    </div>
    <Footer />
   </div>
  )
}


