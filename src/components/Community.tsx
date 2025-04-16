import React from 'react'
import CardList from './CardList'

const Community = () => {
  return (
    <div id="community" className='flex flex-col w-full h-full px-4 md:pl-6'>
        <h2 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-instrumental-sans text-black'>
            Nossa comunidade em números
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-10 font-poppins">
            <div className="bg-[#EDE8FB] rounded-lg p-6 md:p-8 flex flex-col items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#424243] mb-2">20+</h3>
                <p className="text-[#424243] text-lg lg:text-xl">Membros ativos</p>
            </div>
            <div className="bg-[#EDE8FB] rounded-lg p-6 md:p-8 flex flex-col items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#424243] mb-2">5</h3>
                <p className="text-[#424243] text-lg lg:text-xl">Projetos</p>
            </div>
            <div className="bg-[#EDE8FB] rounded-lg p-6 md:p-8 flex flex-col items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-bold text-[#424243] mb-2">3</h3>
                <p className="text-[#424243] text-lg lg:text-xl">Contribuições</p>
            </div>
        </div>
        <h2 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-instrumental-sans text-black mt-10'>
            Principais projetos
        </h2>
        <h3 className='text-xl mt-4 mb-4 lg:mt-10 lg:mb-10 sm:text-xl md:text-xl lg:text-3xl mt-[10px] mb-[10px] 
        lg:mt-[30px] lg:mb-[30px] text-3xl font-semibold font-inter text-[#757575]'>
             Aqui, você pode compartilhar ideias, colaborar com pessoas de diversas áreas e construir um portfólio sólido.
        </h3>
        <CardList isProfile={true} />
    </div>
  )
}

export default Community