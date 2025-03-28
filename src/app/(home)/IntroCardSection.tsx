import Card from '@/components/Card';
import { roles } from '@/constants/roles';

const IntroCardSection: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {roles.map(role => (
        <Card
          key={role.name}
          title={role.name}
          className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
        >
          <p>{role.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default IntroCardSection;
