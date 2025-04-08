"use client";

import { MapPin, Pencil, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../../../../components/ui/button';
import CardGrid from "./_components/CardGridProject";
import CardGridPerson from "./_components/cardgridperson";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const projects = [
    {
        id: 1,
        title: "Projeto A",
        image: "/images/1.jpg",
    },
    {
        id: 2,
        title: "Projeto B",
        image: "/images/2.jpg",
    },
    {
        id: 3,
        title: "Projeto C",
        image: "/images/3.jpg",
    },
    {
        id: 4,
        title: "Projeto D",
        image: "/images/4.png",
    },
    {
        id: 5,
        title: "Projeto E",
        image: "/images/5.png",
    },
    {
        id: 6,
        title: "Projeto F",
        image: "/images/6.jpg",
    },
    {
        id: 7,
        title: "Projeto G",
        image: "/images/7.png",
    },
];

const persons = [
    {
        id: 1,
        name: "Thiago Silva",
        projectName: "Projeto A",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem1.jpg",
    },
    {
        id: 2,
        name: "Lucas Silva",
        projectName: "Projeto B",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem2.jpg",
    },
    {
        id: 3,
        name: "Joao Henrique",
        projectName: "Projeto C",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem3.jpg",
    },
    {
        id: 4,
        name: "Lucas Lima",
        projectName: "Projeto D",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem4.jpg",
    },
    {
        id: 5,
        name: "Guilhreme Souza",
        projectName: "Projeto E",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem5.jpg",
    },
    {
        id: 6,
        name: "Bruno Henrique",
        projectName: "Projeto F",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem6.jpg",
    },
    {
        id: 7,
        name: "Rafael Tavares",
        projectName: "Projeto G",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "/images/homem7.jpg",
    },
];



export default function Profile() {

    return (
        <div className="flex flex-col w-full h-full">
            
            <div className="flex flex-row items-center justify-center bg-gradient-to-r from-[#5045E5] to-[#9233E9] text-white px-32 py-10 gap-6">
                <div className="w-28 h-28 rounded-full overflow-hidden relative border-4 border-white">
                    <Image
                        src="/images/mulher.jpg"
                        alt="Foto do usuário"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                        <h1 className="font-bold text-2xl">Nome</h1>
                        <Button>
                            <Pencil className="w-4 h-4" />
                            Editar Perfil
                        </Button>
                    </div>
                    <h2 className="mb-2">Business Intelligence</h2>
                    <h3 className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </h3>
                    <h3 className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-white/80" />
                        Pernambuco, Brasil
                    </h3>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-32 py-10 gap-6">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-between mb-2">
                        <h1 className="font-bold text-2xl">Sobre mim</h1>
                        <h2 className="py-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </h2>
                        <h2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-32 py-10 gap-6">
                <div className="flex flex-col w-full">
                    <div className="w-full flex justify-between items-center mb-4">
                        <h1 className="font-bold text-2xl">Projetos</h1>
                        <Button variant="green">
                            <PlusCircle className="w-4 h-4" />
                            Novo Projeto
                        </Button>
                    </div>
                    <h2 className="py-2 text-black/40">
                        Principais habilidades:
                    </h2>
                    <div className="flex flex-wrap gap-2 py-4">
                        <Button
                            variant="outline" className="text-sm px-3 py-1 gap-1 rounded-full">
                            JavaScript
                        </Button>
                        <Button
                            variant="outline" className="text-sm px-3 py-1 gap-1 rounded-full">
                            React
                        </Button>
                        <Button
                            variant="outline" className="text-sm px-3 py-1 gap-1 rounded-full">
                            PHP
                        </Button>
                    </div>
                    <CardGrid cards={projects} />
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-32 py-10 gap-6">
                <div className="flex flex-col w-full">
                    <div className="w-full flex justify-between items-center mb-4">
                        <h1 className="font-bold text-2xl">Feedbacks</h1>
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
                        <FaGithub className="text-xl" />
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-2">GitHub</h1>
                            <h2>github.com/nome</h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 mb-2">
                        <FaLinkedin className="text-xl" />
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
