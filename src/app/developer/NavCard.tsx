import { WorkExperienceContent } from '@/constants/work-experience';
import React, { useState } from 'react';

interface NavCardProps {
  work: WorkExperienceContent;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

const NavCard: React.FC<NavCardProps> = ({
  work,
  onClick,
  onMouseOver,
  onMouseLeave,
}) => {
  const [isLocked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    if (!isLocked) {
      setIsActive(true);
      onMouseOver();
    }
  };

  const handleMouseLeave = () => {
    if (!isLocked) {
      setIsActive(false);
      onMouseLeave();
    }
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className="flex min-w-[260px] items-center justify-between gap-1 rounded-xl p-4 transition-all duration-300 ease-in-out hover:bg-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <h5
          className={`text-lg font-bold transition-all duration-300 ease-in-out ${isActive ? 'text-secondary' : ''}`}
        >
          {work.preview.companyName}
        </h5>
        <p
          className={`text-sm font-bold transition-all duration-300 ease-in-out ${isActive ? 'text-foreground' : 'text-neutral-400'}`}
        >
          {work.preview.jobTitle}
        </p>
      </div>
      <p
        className={`text-sm font-bold transition-all duration-300 ease-in-out ${isActive ? 'text-foreground' : 'text-neutral-400'}`}
      >
        {work.preview.period}
      </p>
    </div>
  );
};

export default NavCard;
