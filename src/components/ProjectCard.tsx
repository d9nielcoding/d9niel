import { ProjectCardProps } from '@/constants/projects';
import { SkillIconMap } from '@/constants/skill-images';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Badge from './Badge';

const ProjectCard: React.FC<ProjectCardProps & { className?: string }> = ({
  title,
  description,
  image,
  link,
  roles,
  techStack,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'group flex w-full max-w-[320px] flex-col overflow-hidden rounded-xl border-2 border-neutral-700 bg-neutral-900',
        className
      )}
    >
      <div className="relative h-[150px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div id="project-card-content" className="px-6 pb-6 pt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 flex gap-2">
          {roles.map(role => (
            <Badge key={role} text={role} />
          ))}
        </div>
        <p className="mt-3 text-md text-neutral-400">{description}</p>
        <div className="mt-6 flex gap-2">
          {techStack.map(skill => (
            <i key={skill} className={`${SkillIconMap[skill]} text-lg`} />
          ))}
        </div>
        {link && (
          <Link
            href={link}
            className="mt-4 flex items-center justify-end gap-2 text-white"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            <p>Demo</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
