import ProfileLinksSection from './ProfileLinksSection';
import ProjectSection from './ProjectSection';
import SkillsStackSection from './SkillSection';
import WorkExperienceSection from './WorkExperienceSection';

export default function Developer() {
  return (
    <div className="flex flex-col gap-10">
      <WorkExperienceSection />
      <SkillsStackSection />
      <ProjectSection />
      <ProfileLinksSection />
    </div>
  );
}
