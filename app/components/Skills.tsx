import React from "react";
import Image from "next/image";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiJupyter,
  SiPlotly,
} from "react-icons/si";
import { FaMandalorian,FaDatabase, FaTerminal, FaVuejs, FaTools,FaBrain,FaLanguage } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { MdDataThresholding,MdOutlineSupportAgent } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";



interface Skill {
  name: string;
  icon: React.ElementType;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

// const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
//   <div  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2">
//     <h3 className="text-lg font-semibold text-blue-600 mb-4">{title}</h3>
//     <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110"
//         >
//           {React.createElement(skill.icon, {
//             className: "text-4xl text-gray-800 hover:text-blue-600",
//           })}
//           <span className="text-sm text-center mt-2">{skill.name}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <div className="flex flex-col items-center p-6 bg-white bg-opacity-90 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-100">
    <h3 className="text-xl font-bold text-blue-700 mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110 hover:bg-blue-100 rounded-lg p-2"
        >
          {typeof skill.icon === 'string' ? (
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            React.createElement(skill.icon, {
              className: 'text-4xl text-blue-600',
            })
          )}
          <span className="mt-2 text-sm text-center font-medium text-gray-700">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const dataScienceSkills: Skill[] = [
    { name: "Machine Learning", icon: FaBrain },
    { name: "Deep Learning", icon: BiNetworkChart },
    { name: "Reinforcement Learning", icon: FaMandalorian },
    { name: "NLP", icon: FaLanguage },
    { name: "LLM", icon: FaLanguage },
    { name: "AI", icon: GiBrain },
    // Add more data science skills as needed
  ];

  const programmingSkills: Skill[] = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Python", icon: SiPython },
    { name: "Flask", icon: SiFlask },
    { name: "Django", icon: SiDjango },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Vue.js", icon: FaVuejs },
    { name: "Next.js", icon: TbBrandNextjs },
    { name: "Java", icon: SiHtml5 },
    { name: "SQL", icon: FaDatabase },
    { name: "Shell Scripting", icon: FaTerminal },
    { name: "PostgreSQL", icon: SiPostgresql },
    // Add more programming skills as needed
  ];

  const toolsTechSkills: Skill[] = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Numpy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
    { name: "NLTK", icon: FaTools },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Plotly", icon: SiPlotly },
    { name: "Seaborn", icon: SiPlotly },
    { name: "Matplotlib", icon: SiPlotly },
    { name: "Jupyter", icon: SiJupyter },
    // Add more tools and technology skills as needed
  ];

  return (
    <section id="skills" className="py-20 md:py-32 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 text-white">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p>Here are a few skills I possess</p>
        </div>
        <div className="py-5 md:py-12 lg:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard title="Data Science" skills={dataScienceSkills} />
          <SkillCard title="Programming" skills={programmingSkills} />
          <SkillCard title="Tools & Technologies" skills={toolsTechSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
