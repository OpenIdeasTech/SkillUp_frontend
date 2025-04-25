import React from 'react'
import CardsCarousel from './CardsCarousel'

const  Resources = () => {
  return (
    <div id="resources" className='text-white py-4 w-screen'>
        <h2 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-instrumental-sans pl-4'>Diferencial</h2>
        <h3 className='text-xl mt-4 mb-4 lg:mt-10 lg:mb-10 sm:text-xl md:text-xl lg:text-3xl font-semibold font-inter pl-4'>
        Tudo que você precisa para criar um portifólio que impressiona.
        </h3>
        <CardsCarousel />
    </div>
  )
}

export default Resources