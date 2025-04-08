import React from 'react'
import CardList from './CardList'

const Community = () => {
  return (
    <div className='flex flex-col w-full h-full'>
        <h2 className='text-5xl font-bold font-instrumental-sans text-black'>
            Comunidade
        </h2>
        <h3 className='mt-[30px] mb-[30px] text-3xl font-semibold font-inter text-[#757575]'>
             Aqui, você pode compartilhar ideias, colaborar com pessoas de diversas áreas e construir um portfólio sólido.
        </h3>
        <CardList />
    </div>
  )
}

export default Community