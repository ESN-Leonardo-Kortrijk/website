import Image from "next/image";
import board from "../../data/board.json";

export default function AboutUs() {
  return (
    <div className="w-4/5 max-w-[1920px] m-auto py-8">
      <h2 className="text-2xl font-bold font-kelson_sans pt-4 pb-2">Board:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {board.map((member) => (
          <li key={member.name} className="border rounded-md shadow-md">
            <div className="p-4">
              <h4 className="font-bold text-lg">{member.function}</h4>
              <p>{member.name}</p>
            </div>
            <Image
              className="rounded-b-md"
              src={`/images/board/${member.image}`}
              width={600}
              height={300}
              alt={`${member.name} - ${member.function}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}