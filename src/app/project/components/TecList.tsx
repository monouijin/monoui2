import TecCard from "./TecCard";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import {FaReact} from "react-icons/fa";

const technologies = [
  {
    name: "Next.js 15.2.5(App Router)",
    icon: <RiNextjsFill size={40}/>,
  },
  {
    name: "TypeScript@5.7.2",
    icon: <SiTypescript size={40}/>,
  },
  {
    name: "Tailwind CSS@3.4.13",
    icon: <SiTailwindcss size={40}/>,
  },
  {
    name: "React 19",
    icon: <FaReact size={40}/>,
  },
];

const TecList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {technologies.map((tech) => (
        <TecCard
          key={tech.name}
          name={tech.name}
          icon={tech.icon}
        />
      ))}
    </div>
  );
};

export default TecList;
