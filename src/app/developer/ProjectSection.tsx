import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/constants/projects';
const ProjectSection: React.FC = () => {
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex gap-6 flex-wrap justify-start mt-10">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
