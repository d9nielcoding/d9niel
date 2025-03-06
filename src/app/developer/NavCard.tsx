import { WorkExperienceContent } from '@/constants/work-experience';
import React, { useState } from 'react';

interface NavCardProps {
  work: WorkExperienceContent;
  onSelect: () => void;
  onDeselect: () => void;
}

const NavCard: React.FC<NavCardProps> = ({ work, onSelect, onDeselect }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    if (!isLocked) {
      setIsActive(true);
      onSelect();
    }
  };

  const handleMouseLeave = () => {
    if (!isLocked) {
      setIsActive(false);
      onDeselect();
    }
  };

  const handleClick = () => {
    // setIsLocked(!isLocked);
  };

  return (
    <div
      className="flex gap-1 justify-between items-center min-w-[260px] hover:bg-neutral-800 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-xl p-4 transition-all duration-300 ease-in-out"
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
          className={`text-sm transition-all duration-300 ease-in-out font-bold ${isActive ? 'text-foreground' : 'text-neutral-400 '}`}
        >
          {work.preview.jobTitle}
        </p>
      </div>
      <p
        className={`text-sm transition-all duration-300 ease-in-out font-bold ${isActive ? 'text-foreground' : 'text-neutral-400'}`}
      >
        {work.preview.period}
      </p>
    </div>
  );
};

export default NavCard;
