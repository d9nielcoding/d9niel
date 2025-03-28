import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/constants/projects';

const ProjectSection: React.FC = () => {
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} className="w-full" />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
