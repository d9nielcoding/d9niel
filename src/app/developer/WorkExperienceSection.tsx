'use client';
import SectionTitle from '@/components/SectionTitle';
import {
  WorkContent,
  WorkExperienceContent,
} from '@/constants/work-experience';
import { useState } from 'react';
import NavCard from './NavCard';
const WorkExperienceSection: React.FC = () => {
  const [selectedWork, setSelectedWork] =
    useState<WorkExperienceContent | null>(null);

  const handleSelect = (work: WorkExperienceContent) => {
    setSelectedWork(work);
  };

  const handleDeselect = () => {
    setSelectedWork(null);
  };

  return (
    <div className="mb-10 mt-20 flex flex-col">
      <SectionTitle title="Work Experience" />
      <div className="mt-10 flex h-[450px] gap-10 rounded-3xl bg-opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B2365] to-transparent to-70% p-6">
        <div
          id="left-column"
          className="flex w-1/3 flex-col justify-center p-4"
        >
          {WorkContent.map(work => (
            <NavCard
              key={work.preview.companyName}
              work={work}
              onSelect={() => handleSelect(work)}
              onDeselect={handleDeselect}
            />
          ))}
        </div>
        <div
          id="right-column"
          className={`flex h-full w-2/3 flex-col items-center justify-center gap-10 rounded-xl p-10 transition-all duration-300 ease-in-out ${
            selectedWork ? 'shadow-[0_0_25px_rgba(82,82,82,0.6)]' : ''
          }`}
        >
          {selectedWork ? (
            <ul className="flex flex-col gap-2">
              {selectedWork.detail.bulletPoints.map((point, index) => (
                <li
                  key={`${selectedWork.preview.companyName}-${index}`}
                  className="flex gap-2 text-neutral-100"
                >
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary text-neutral-600" />
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <h3 className="text-xl font-bold text-neutral-100">
              Hover or press the row to check things out!
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
