"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { PenLine, BarChart3, Users, PanelsTopLeft, Workflow } from "lucide-react"

const CardsCarousel = () => {
  const resources = [
    {
      title: "Projetos profissionais",
      description: "Escolha entre os projetos disponíveis para começar a fazer seu portfólio.",
      icon: <PenLine className="h-6 w-6 text-white" />,
    },
    {
      title: "Analytics integrado",
      description: "Acompanhe visitantes, interações e conversas diretamente do seu perfil.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
    },
    {
      title: "Expanda",
      description: "Construa um portfólio colaborativo, conecte-se com pessoas ao redor do mundo e amplie sua rede de contatos.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Projetos ilimitados",
      description: "Adicone quantos projetos quiser ao seu portfólio e mostre todo o seu talento de forma ilimitada.",
      icon: <PanelsTopLeft className="h-6 w-6 text-white" />,
    },
    {
      title: "Conecte-se com oportunidades",
      description: "Amplie sua rede se conectando com recrutadores e aumente suas chances de conseguir um primeiro emprego.",
      icon: <Workflow className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <div className="w-full py-16">
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {resources.map((resource, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-[#231458] border-none h-full">
                  <CardContent className="py-6">
                    <div className="flex flex-col gap-4">
                      <div className="bg-[#3b2180] w-12 h-12 rounded-md flex items-center justify-center">
                        {resource.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                      <p className="text-white/80">{resource.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}


export default CardsCarousel
