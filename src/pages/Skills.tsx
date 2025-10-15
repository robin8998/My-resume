import { InfiniteMovingIcons } from "@/components/ui/infinite-moving-cards";
import { SiReact,SiNextdotjs,SiTailwindcss,SiJavascript,SiAppwrite,SiMongodb,SiSocketdotio,} from "@icons-pack/react-simple-icons";

function Skills() {
  const skills = [
    {
      icon: <SiReact color="#61DAFB" size={40} title="React" />,
      name: "React",
    },
    {
      icon: <SiNextdotjs color="#000000" size={40} title="Next.js" />,
      name: "Next.js",
    },
    {
      icon: <SiAppwrite color="#FD366E" size={40} title="Appwrite" />,
      name: "Appwrite",
    },
    {
      icon: <SiJavascript color="#F7DF1E" size={40} title="Javascript" />,
      name: "Javascript",
    },
    {
      icon: <SiMongodb color="#47A248" size={40} title="Mongodb" />,
      name: "Mongodb",
    },
    {
      icon: <SiTailwindcss color="#06B6D4" size={40} title="Tailwind" />,
      name: "Tailwind",
    },
    {
      icon: <SiSocketdotio color="#010101" size={40} title="Socket" />,
      name: "Socket.io",
    },
  ];

  return (
    <div className="text-white text-center text-5xl w-full space-y-4 mt-10 flex flex-col px-10 py-20">
      SKILLS TO OFFER

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingIcons
          items={skills}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Skills;
