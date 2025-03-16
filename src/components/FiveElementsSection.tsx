
import React from 'react';
import { Flame, TreeDeciduous, Mountain, Circle, Droplet } from 'lucide-react';

interface ElementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const ElementCard = ({ title, description, icon, color, bgColor }: ElementCardProps) => (
  <div 
    className={`rounded-2xl p-6 flex flex-col items-center transition-transform hover:scale-105 ${bgColor}`}
  >
    <div className={`rounded-full p-4 mb-4 ${color} bg-white`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
    <p className="text-center text-sm opacity-80">{description}</p>
  </div>
);

const FiveElementsSection = () => {
  const elements = [
    {
      title: "Fire",
      description: "Energizing & Uplifting",
      icon: <Flame size={24} className="text-red-500" />,
      color: "text-red-500",
      bgColor: "bg-red-500/20",
    },
    {
      title: "Wood",
      description: "Growth & Vitality",
      icon: <TreeDeciduous size={24} className="text-green-600" />,
      color: "text-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Earth",
      description: "Grounding & Centering",
      icon: <Mountain size={24} className="text-amber-600" />,
      color: "text-amber-600",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Metal",
      description: "Clarity & Precision",
      icon: <Circle size={24} className="text-gray-600" strokeDasharray="4 4" />,
      color: "text-gray-600",
      bgColor: "bg-gray-300/20",
    },
    {
      title: "Water",
      description: "Flow & Tranquility",
      icon: <Droplet size={24} className="text-blue-500" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-sm text-white/80 mb-4">
          Five Elements Philosophy
        </span>
        <h2 className="text-4xl font-bold mb-6">Find Your Elemental Balance</h2>
        <p className="max-w-3xl mx-auto text-lg text-white/70">
          According to ancient wisdom, health and harmony emerge when the 
          five elements are in balance. Discover products tailored to your element.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        {elements.map((element, index) => (
          <ElementCard
            key={index}
            title={element.title}
            description={element.description}
            icon={element.icon}
            color={element.color}
            bgColor={element.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default FiveElementsSection;
