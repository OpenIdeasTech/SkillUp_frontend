import React from 'react'
import CardsCarousel from './CardsCarousel'

const  Resources = () => {
  return (
    <div className='text-white'>
        <h2 className='text-5xl font-bold font-instrumental-sans'>Recursos poderosos</h2>
        <h3 className='mt-[30px] mb-[30px] text-3xl font-semibold font-inter'>
            Tudo que você precisa para criar um portifólio profissional que <br></br> impressiona visitantes e potenciais clientes.
        </h3>
        <CardsCarousel />
    </div>
  )
}

export default Resources