'use client';
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
    <div className="flex flex-col mt-2">
      <div className="flex gap-10 h-[450px] p-6 rounded-3xl">
        <div
          id="left-column"
          className="flex flex-col w-1/3 p-4 justify-center"
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
          className={`flex flex-col gap-10 w-2/3 h-full rounded-xl justify-center items-center p-10 transition-all duration-300 ease-in-out ${
            selectedWork ? 'shadow-[0_0_25px_rgba(82,82,82,0.6)]' : ''
          }`}
        >
          {selectedWork ? (
            <ul className="flex flex-col gap-2">
              {selectedWork.detail.bulletPoints.map((point, index) => (
                <li
                  key={`${selectedWork.preview.companyName}-${index}`}
                  className="text-neutral-300 flex gap-2"
                >
                  <div className="text-neutral-600 bg-primary mt-2 w-2 h-2 rounded-full shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <h1 className="text-2xl font-bold text-neutral-600">
              Work Experience
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
