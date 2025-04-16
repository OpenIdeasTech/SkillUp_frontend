"use client";

import { Pencil } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';
import CardGridPerson from './_components/CardGridPerson';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';



const persons = [
    {
        id: 1,
        name: "Thiago Silva",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto A",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "https://i.pravatar.cc",
    },
    {
        id: 2,
        name: "Maria Rodrigues",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto B",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "https://i.pravatar.cc",
    },
    {
        id: 3,
        name: "Joao Henrique",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto C",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "https://i.pravatar.cc",
    },
    {
        id: 4,
        name: "Lucas Lima",
        position: "Desenvolvedor Frontend",
        projectName: "Projeto D",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        image: "https://i.pravatar.cc",
    },
];



export default function Profile() {

    return (
        <div className="flex flex-col w-full h-full">
                <div className="flex flex-col md:flex-row w-full  items-center bg-[#FCFBFE] text-black py-[50px] gap-6 px-10 md:px-50">
                <div className="w-[150px] h-[150px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden flex-shrink-0">
                    <img
                    src="https://i.pravatar.cc"
                    alt="Foto de perfil"
                    width={260}
                    height={260}
                    className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                        <h1 className="font-bold text-4xl md:text-6xl">Nome</h1>
                    </div>
                    <h3 className="mb-4 text-xl md:text-3xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
                    </h3>
                    <h3 className="flex items-center gap-2 text-xl md:text-3xl">
                        Pernambuco, Brasil
                    </h3>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-10 md:px-50 py-10 gap-6">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-between mb-2">
                        <h1 className="font-bold text-4xl md:text-5xl">Sobre mim</h1>
                        <h2 className="py-8 text-xl md:text-3xl">
                            Lorem ipsum dolor sit amet. Ut cumque obcaecati qui commodi provident aut voluptatem illum et velit laudantium est facere maiores et earum ipsum.  
                            Lorem ipsum dolor sit amet. Ut cumque obcaecati qui commodi provident aut voluptatem illum et velit laudantium est facere maiores et earum ipsum. 
                            <br></br>
                            Lorem ipsum dolor sit amet. Ut cumque obcaecati qui commodi provident aut voluptatem illum et velit laudantium est facere maiores et earum ipsum. 
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-10 md:px-50 py-10 gap-6">
                <div className="flex flex-col w-full">
                    <div className="w-full flex justify-between items-center mb-4">
                        <h1 className="font-bold text-4xl md:text-5xl">Projetos</h1>
                        <Button className='bg-[#2D1C7F] text-white text-sm md:text-xl px-2 md:px-4 py-2 rounded-lg flex items-center gap-2'>
                            <Pencil className="w-4 h-4 md:w-6 md:h-6" />
                            Novo Projeto
                        </Button>
                    </div>
                    <h2 className='text-xl font-semibold mb-4 text-[#6C6C6C]'>Principais habilidades:</h2>
                    <CardList isProfile={true}/>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white text-black px-10 md:px-50 py-10 gap-6">
                <div className="flex flex-col w-full">
                    <div className="w-full flex justify-between items-center mb-4">
                        <h1 className="font-bold text-4xl md:text-5xl">Feedbacks</h1>
                    </div>
                    <CardGridPerson cards={persons} />
                </div>
            </div>
        </div>
    );
}
