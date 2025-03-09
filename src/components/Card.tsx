interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col rounded-xl bg-neutral-900 px-8 pt-6 pb-10 border-2 border-neutral-700 w-full gap-4">
      <h3 className="text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
