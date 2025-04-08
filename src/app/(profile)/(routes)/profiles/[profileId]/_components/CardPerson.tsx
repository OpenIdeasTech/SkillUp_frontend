import Image from "next/image";

interface Person {
  id: number;
  name: string;
  projectName: string;
  description: string;
  image: string;
}

interface CardPersonProps {
  person: Person;
}

export function CardPerson({ person }: CardPersonProps) {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow hover:shadow-lg transition gap-4">
      <div className="w-16 h-16 rounded-full overflow-hidden relative">
        <Image
          src={person.image}
          alt={person.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-lg">{person.name}</h3>
        <p className="text-sm text-gray-600">{person.description}</p>
      </div>

      <div className="text-right">
        <span className="font-semibold text-sm">{person.projectName}</span>
      </div>
    </div>
  );
}
