import React from 'react'
import { Button } from './ui/button'
import { TrendingUp } from 'lucide-react'

const MainHome = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full text-white gap-6 md:text-left  py-16">
      
      <h1 className="text-8xl font-bold font-instrumental-sans leading-tight">
        Destaque seu trabalho com <br className="hidden md:block" />
        um portfólio profissional
      </h1>

      <h2 className="text-3xl font-inter">
        Crie um portfólio colaborativo, conecte-se com outras pessoas.
      </h2>

      <div className="flex justify-center md:justify-start">
        <Button className="w-full sm:w-[250px] py-6 rounded-xl flex gap-2 items-center justify-center text-lg md:text-xl mt-4">
          <TrendingUp width={20} height={20} />
          Começar Agora
        </Button>
      </div>
    </div>
  )
}

export default MainHome
