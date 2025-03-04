import Tooltip from '@/components/Tooltip';
import LinktreeIcon from '@/components/icons/Linktree';
import {
  ChatBubbleIcon,
  CodeIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <div className="flex gap-4 my-8">
        <Tooltip description="Contact me as a developer">
          <Link href="mailto:daniel.cai09g@nctu.edu.tw">
            <div className="relative flex">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center">
                <EnvelopeClosedIcon className="h-4 w-4 text-white" />
              </span>
              <span className="relative z-10 flex h-8 w-8 items-center justify-center -ml-2">
                <CodeIcon className="h-4 w-4 text-white" />
              </span>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-14">
                <div className="absolute left-0 h-full w-8 rounded-full bg-primary" />
                <div className="absolute right-0 h-full w-8 rounded-full bg-primary" />
              </div>
            </div>
          </Link>
        </Tooltip>
        <Tooltip description="Contact me for other services">
          <Link href="mailto:d9niel.work@gmail.com">
            <div className="relative flex">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center">
                <EnvelopeClosedIcon className="h-4 w-4 text-white" />
              </span>
              <span className="relative z-10 flex h-8 w-8 items-center justify-center -ml-2">
                <ChatBubbleIcon className="h-4 w-4 text-white" />
              </span>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-14">
                <div className="absolute left-0 h-full w-8 rounded-full bg-primary" />
                <div className="absolute right-0 h-full w-8 rounded-full bg-primary" />
              </div>
            </div>
          </Link>
        </Tooltip>
        <Link href="https://linktr.ee/d9niel">
          <div className="flex justify-center items-center rounded-full bg-primary h-8 w-8">
            <LinktreeIcon className="w-4 h-4 text-white" />
          </div>
        </Link>
        <Link href="https://www.instagram.com/d9niel.work">
          <div className="flex justify-center items-center rounded-full bg-primary h-8 w-8">
            <InstagramLogoIcon className="w-4 h-4 text-white" />
          </div>
        </Link>
      </div>
      <p>© 2025 D9niel</p>
    </footer>
  );
};

export default Footer;
