'use client';
import Modal from '@/components/Modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (work: WorkExperienceContent) => {
    setSelectedWork(work);

    if (window.innerWidth < 768) {
      setIsModalOpen(true);
    }
  };

  const handleMouseOver = (work: WorkExperienceContent) => {
    setSelectedWork(work);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setSelectedWork(null);
    }
  };

  return (
    <>
      <div className="mb-4 mt-10 flex flex-col md:mt-20">
        <SectionTitle title="Work Experience" />
        <div className="mt-0 flex rounded-3xl bg-opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B2365] to-transparent to-70% p-6 sm:mt-10 md:h-[600px] md:gap-6 lg:h-[450px]">
          <div
            id="left-column"
            className="flex w-full flex-col justify-center pt-4 sm:p-4 md:w-[340px] md:min-w-[310px]"
          >
            {WorkContent.map(work => (
              <NavCard
                key={work.preview.companyName}
                work={work}
                onClick={() => handleClick(work)}
                onMouseOver={() => handleMouseOver(work)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <div
            id="right-column"
            className={`hidden h-full min-h-[360px] flex-col items-center justify-center gap-10 rounded-xl p-4 transition-all duration-300 ease-in-out md:flex md:w-2/3 lg:p-10 ${
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-4 p-2">
          {selectedWork && (
            <>
              <h3 className="text-xl font-bold text-neutral-100">
                {selectedWork.preview.companyName}
              </h3>
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
            </>
          )}
          <button
            onClick={() => setIsModalOpen(false)}
            className="rounded-lg bg-primary px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default WorkExperienceSection;
