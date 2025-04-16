import { Badge } from "@/components/ui/badge";
import { ReplyAll } from "lucide-react";

interface Person {
  id: number;
  name: string;
  position: string;
  projectName: string;
  description: string;
  image: string;
}

interface CardPersonProps {
  person: Person;
}

export function CardPerson({ person }: CardPersonProps) {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 border rounded-lg shadow hover:shadow-lg transition gap-4 justify-between">
      <div className="flex flex-col md:flex-row gap-4">
       <div className="w-[100px] h-full rounded-full overflow-hidden relative object-cover">
          <img
            src={person.image}
            alt={person.name}
            style={{ objectFit: "cover" }}
          />
        </div>
 
        <div className="flex flex-col gap-2 ">
          <h3 className="font-bold text-xl md:text-2xl">{person.name}</h3>
          <Badge className="bg-[#D9D9D9] text-[#000]">{person.position}</Badge>
          <p className="text-lg text-gray-600">{person.description}</p>
        </div>
      </div>
      <div className="text-right flex gap-4">
        <ReplyAll />
        <span className="font-bold text-lg">{person.projectName}</span>
      </div>
    </div>
  );
}
