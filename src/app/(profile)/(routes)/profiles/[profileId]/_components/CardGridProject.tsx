import { useState } from "react";
import { CardProject } from "./cardproject";
import { Pagination } from "./pagination";

interface CardData {
    id: number;
    title: string;
    image: string;
}


interface CardGridProjectProps {
    cards: CardData[];
}

export default function CardGridProject({ cards }: CardGridProjectProps) {
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {currentCards.map((card) => (
                    <CardProject key={card.id} title={card.title} image={card.image} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
    );
}
