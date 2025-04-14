import React from 'react'
import { Button } from './ui/button'

const  Subscribe = () => {
  return (
    <div className='bg-gradient-to-r from-[#9233E9] to-[#5045E5] py-20 px-32 justify-center flex flex-col items-center gap-4 text-white'>
        <h2 className='text-4xl font-bold'>Pronto para aumentar suas habilidades?</h2>
        <h3 className='text-2xl'>Junte-se à nossa comunidade e faça parte de projetos interessantes.</h3>
        <Button className='px-10 py-6 text-lg rounded-xl'>Inscreva-se agora</Button>
    </div>
  )
}

export default Subscribe