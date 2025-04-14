"use client";

import { MapPin, Pencil, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../../../../components/ui/button';
import CardGridPerson from './_components/CardGridPerson';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import CardList from '@/components/CardList';


const persons = [
    {
        id: 1,
        name: "Thiago Silva",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto A",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem1.jpg",
    },
    {
        id: 2,
        name: "Lucas Silva",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto B",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem2.jpg",
    },
    {
        id: 3,
        name: "Joao Henrique",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto C",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem3.jpg",
    },
    {
        id: 4,
        name: "Lucas Lima",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto D",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem4.jpg",
    },
    {
        id: 5,
        name: "Guilhreme Souza",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto E",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem5.jpg",
    },
    {
        id: 6,
        name: "Bruno Henrique",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto F",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem6.jpg",
    },
    {
        id: 7,
        name: "Rafael Tavares",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto G",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem7.jpg",
    },
];



export default function Profile() {

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row w-full  items-center bg-gradient-to-b from-[#5045E5] to-[#9233E9] text-white py-[50px] gap-6 px-50">
                <div className="w-40 h-40 rounded-full overflow-hidden relative border-4 border-white">
                    <Image
                        src="/images/mulher.jpg"
                        alt="Foto do usuário"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                        <h1 className="font-bold text-4xl">Nome</h1>
                        <Button className='bg-[#2D1C7F] text-white px-4 py-2 rounded-lg flex items-center gap-2'>
                            <Pencil className="w-4 h-4" />
                            Editar Perfil
                        </Button>
                    </div>
                    <h2 className="mb-2 text-xl">Business Intelligence</h2>
                    <h3 className="mb-4 text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
                    </h3>
                    <h3 className="flex items-center gap-2 text-xl">
                        <MapPin className="w-7 h-7 text-white/80" />
                        Pernambuco, Brasil
                    </h3>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-50 py-10 gap-6">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-between mb-2">
                        <h1 className="font-bold text-4xl">Sobre mim</h1>
                        <h2 className="py-8 text-xl">
                            Lorem ipsum dolor sit amet. Ut cumque obcaecati qui commodi provident aut voluptatem illum et velit laudantium est facere maiores et earum ipsum.  
                            Lorem ipsum dolor sit amet. Ut cumque obcaecati qui commodi provident aut voluptatem illum et velit laudantium est facere maiores et earum ipsum. 
                            <br></br>
                            Lorem ipsum dolor sit amet. Ut cumque obcaecati qui commodi provident aut voluptatem illum et velit laudantium est facere maiores et earum ipsum. 
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-50 py-10 gap-6">
                <div className="flex flex-col w-full">
                    <div className="w-full flex justify-between items-center mb-4">
                        <h1 className="font-bold text-4xl">Projetos</h1>
                        <Button className='bg-[#2D1C7F] text-white px-4 py-2 rounded-lg flex items-center gap-2'>
                            <PlusCircle className="w-4 h-4" />
                            Novo Projeto
                        </Button>
                    </div>
                    <h2 className='text-xl font-semibold mb-4 text-[#6C6C6C]'>Principais habilidades:</h2>
                    <CardList isProfile={true}/>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-50 py-10 gap-6">
                <div className="flex flex-col w-full">
                    <div className="w-full flex justify-between items-center mb-4">
                        <h1 className="font-bold text-4xl">Feedbacks</h1>
                    </div>
                    <CardGridPerson cards={persons} />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center bg-gradient-to-r from-[#5045E5] to-[#9233E9] text-white px-32 py-10 gap-6">
                <div className="flex flex-col mr-16">
                    <div className="flex flex-col justify-between mb-2">
                        <h1 className="font-bold text-2xl mb-4">Contato</h1>
                        <h2>Interessado em colaborar em um projeto ou discutir oportunidades?</h2>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-4 mb-2">
                        <FaGithub className="text-2xl" />
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-2">GitHub</h1>
                            <h2>github.com/nome</h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 mb-2">
                        <FaLinkedin className="text-2xl" />
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-2">Linkedin</h1>
                            <h2>linkedin.com/in/nome</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
