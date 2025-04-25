import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent } from '@mui/material'
import { ChartColumn, Code, Palette, Users } from 'lucide-react'
import { Badge } from './ui/badge'

const Groups = () => {

    const groups = [
        {
          title: "Desenvolvimento",
          description: "Desenvolvimento web, mobile com as tecnologias mais recentes do mercado.",
          icon: <Code className="h-6 w-6 text-[#2D1D59]" />,
          techs: ["Dev Frontend", "Dev Backend"]
        },
        {
            title: "Gestão",
            description: "Foco em Metodologias ágeis e coordenação.",
            icon: <Users className="h-6 w-6 text-[#2D1D59]" />,
          techs: ["Product Owner", "Scrum Master"]
          },
        {
            title: "QA",
            description: "Time focado na qualidade do software.",
            icon: <Code className="h-6 w-6 text-[#2D1D59]" />,
            techs: ["Engenheiro de Testes"]
        },
        {
            title: "UX/UI",
            description: "Construção do design e melhorias para experiência do usuário.",
            icon: <Palette className="h-6 w-6 text-[#2D1D59]" />,
            techs: ["UX", "UI"]
        },
        {
            title: "Dados",
            description: "Transformação de  dados em insights para apoiar decisões e gerar valor para o negócio.",
            icon: <ChartColumn className="h-6 w-6 text-[#2D1D59]" />,
            techs: ["Analista de Dados", "Engenheiro de Dados"]
        },
        
      ]

  return (
    <div className="w-full px-4 py-16 overflow-hidden">
    <h2 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-instrumental-sans text-black mb-20'>Grupos de interesse</h2>
    <Carousel className="w-full">
      <CarouselContent>
        {groups.map((group, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 lg:basis-1/3 px-4"
          >
            <Card className="bg-[#F8F8F8] border-none w-full h-full">
              <CardContent className="py-2 md:py-4 lg:py-6">
                <div className="flex flex-col gap-4">
                    <div className='flex gap-2 items-center'>
                        <div>{group.icon}</div>
                        <h3 className="text-2xl font-semibold text-[#434343]">{group.title}</h3>
                    </div>
                    <p className="text-[#434343] text-xl">{group.description}</p>
                </div>
                <div className='flex gap-2 mt-4'>
                {group.techs?.map((tech, index) => (
                    <Badge key={index} className='bg-[#D9D9D9] text-[#434343] text-md'>{tech}</Badge>
                ))}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
    )
}

export default Groups