import LeetcodeIcon from '@/components/icons/Leetcode';
import MediumIcon from '@/components/icons/Medium';
import Tooltip from '@/components/Tooltip';
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const ProfileLinksSection: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center mt-10 border-2 border-primary py-4 px-6 rounded-3xl w-fit mx-auto">
      <Link href="https://github.com/d9nielcoding" target="_blank">
        <div className="bg-primary rounded-full flex items-center justify-center h-8 w-8">
          <GitHubLogoIcon className="w-8 h-8" />
        </div>
      </Link>
      <Link href="https://leetcode.com/u/d9nielcoding" target="_blank">
        <div className="bg-primary rounded-full flex items-center justify-center h-8 w-8">
          <LeetcodeIcon className="h-[18px] -mt-[2px] fill-white" />
        </div>
      </Link>
      {/* <Link href="https://medium.com/@d9niel" target="_blank"> */}
      <div className="bg-neutral-700 rounded-full flex items-center justify-center h-8 w-8">
        <MediumIcon className="h-[22px] fill-neutral-300" />
      </div>
      {/* </Link> */}
      <Link
        href="https://drive.google.com/file/d/1tQQTO-LkhkGW86ymw6ObvigmewA7NmBK/view?usp=drive_link"
        target="_blank"
      >
        <button className="bg-primary rounded-full flex items-center justify-center h-8 px-4">
          <Tooltip description="Resume in Traditional Chinese">
            <div className="flex items-center gap-2">
              <span className="text-white"> Resume </span>
              <ExternalLinkIcon className="h-[22px] fill-white" />
            </div>
          </Tooltip>
        </button>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1t9yMjrmg-UzLr9BpHL514qcX1xuhWB4o/view?usp=drive_link"
        target="_blank"
      >
        <button className="bg-primary rounded-full flex items-center justify-center h-8 px-4">
          <Tooltip description="Resume in English">
            <div className="flex items-center gap-2">
              <span className="text-white"> Resume (Eng) </span>
              <ExternalLinkIcon className="h-[22px] fill-white" />
            </div>
          </Tooltip>
        </button>
      </Link>
    </div>
  );
};

export default ProfileLinksSection;
