interface SkillSquareProps {
  skill: string;
  children: React.ReactNode;
}

const SkillSquare = ({ skill, children }: SkillSquareProps) => {
  return (
    <div className="flex flex-col items-center justify-center">{children}</div>
  );
};

export default SkillSquare;
