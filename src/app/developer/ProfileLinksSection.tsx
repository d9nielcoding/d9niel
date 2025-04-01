import LeetcodeIcon from '@/components/icons/Leetcode';
import MediumIcon from '@/components/icons/Medium';
import Tooltip from '@/components/Tooltip';
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const ProfileLinksSection: React.FC = () => {
  return (
    <div
      id="social-links-container"
      className="mx-auto mt-10 flex w-[320px] flex-wrap justify-center gap-4 rounded-3xl border-2 border-primary px-6 py-4 sm:w-fit"
    >
      <Link href="https://github.com/d9nielcoding" target="_blank">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <GitHubLogoIcon className="h-8 w-8" />
        </div>
      </Link>
      <Link href="https://leetcode.com/u/d9nielcoding" target="_blank">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <LeetcodeIcon className="-mt-[2px] h-[18px] fill-white" />
        </div>
      </Link>
      {/* <Link href="https://medium.com/@d9niel" target="_blank"> */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700">
        <MediumIcon className="h-[22px] fill-neutral-300" />
      </div>
      {/* </Link> */}
      <Link
        href="https://drive.google.com/file/d/1tQQTO-LkhkGW86ymw6ObvigmewA7NmBK/view?usp=drive_link"
        target="_blank"
      >
        <button className="flex h-8 items-center justify-center rounded-full bg-primary px-4">
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
        <button className="flex h-8 items-center justify-center rounded-full bg-primary px-4">
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
