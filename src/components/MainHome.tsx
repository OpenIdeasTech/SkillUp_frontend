import React from 'react'
import { Button } from './ui/button'
import { TrendingUp } from 'lucide-react'

const MainHome = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full text-white gap-[49px] text-left lg:gap-6">
      <h1
        className="px-6 text-5xl sm:text-6xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-instrumental-sans leading-tight md:leading-none"
      >
        Destaque seu trabalho com <br className="hidden md:block" />
        um portfólio profissional
      </h1>

      <h2 className="px-6 text-xl sm:text-xl md:text-3xl font-inter font-semibold">
        Crie um portfólio colaborativo, conecte-se com outras pessoas.
      </h2>

      <div className="px-6 flex justify-center justify-start">
        <Button className="w-full w-[200px] sm:w-[180px] md:[180px] lg:w-[250px]
         py-6 rounded-xl flex gap-2 items-center justify-center text-lg md:text-lg lg:text-xl mt-4">
          <TrendingUp width={25} height={25} />
          Começar Agora
        </Button>
      </div>
    </div>
  )
}

export default MainHome
