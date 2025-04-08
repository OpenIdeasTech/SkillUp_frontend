import { useState } from "react";
import { Pagination } from "./pagination";
import { CardPerson } from "./CardPerson";

interface Person {
  id: number;
  name: string;
  projectName: string;
  description: string;
  image: string;
}

interface CardGridPersonProps {
  cards: Person[];
}

export default function CardGridPerson({ cards }: CardGridPersonProps) {
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  return (
    <>
      <div className="grid gap-4">
        {currentCards.map((person) => (
          <CardPerson key={person.id} person={person} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
