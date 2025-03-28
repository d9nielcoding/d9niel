import { twMerge } from 'tailwind-merge';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col rounded-xl bg-neutral-900 px-8 py-6 border-2 border-neutral-700 w-full gap-4',
        className
      )}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
