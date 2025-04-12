interface TecProps {
  name: string;
  icon: React.ReactNode;
}

const TecCard: React.FC<TecProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-16 h-16 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
    </div>
  );
};

export default TecCard;
