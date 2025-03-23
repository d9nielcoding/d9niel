import Card from '@/components/Card';
import { roles } from '@/constants/roles';

const IntroCardSection: React.FC = () => {
  return (
    <div className="flex gap-10">
      {roles.map(role => (
        <Card key={role.name} title={role.name}>
          <p>{role.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default IntroCardSection;
