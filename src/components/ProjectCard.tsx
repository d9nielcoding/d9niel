import { ProjectCardProps } from '@/constants/projects';
import { SkillIconMap } from '@/constants/skill-images';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  roles,
  techStack,
}) => {
  return (
    <div className="group flex flex-col rounded-xl bg-neutral-900 border-2 border-neutral-700 w-full max-w-[340px] overflow-hidden">
      <div className="relative h-[150px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div id="project-card-content" className="px-6 pt-4 pb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-2 mt-2">
          {roles.map(role => (
            <Badge key={role} text={role} />
          ))}
        </div>
        <p className="text-md text-neutral-400 mt-3">{description}</p>
        <div className="flex gap-2 mt-6">
          {techStack.map(skill => (
            <i key={skill} className={`${SkillIconMap[skill]} text-lg`} />
          ))}
        </div>
        {link && (
          <Link
            href={link}
            className="mt-4 flex justify-end items-center gap-2 text-white"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            <p>Demo</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
