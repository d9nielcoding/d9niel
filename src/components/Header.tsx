'use client';

import d9nielNotion from '@/assets/images/d9niel-notion.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

enum TabStatus {
  Enabled = 'enabled',
  Disabled = 'disabled',
}

type Link = {
  path: string;
  label: string;
  status: TabStatus;
};

const links: Link[] = [
  { path: '/', label: 'Home', status: TabStatus.Enabled },
  { path: '/developer', label: 'Developer', status: TabStatus.Enabled },
  { path: '/consultant', label: 'Consultant', status: TabStatus.Disabled },
  { path: '/creator', label: 'Creator', status: TabStatus.Disabled },
];

const activeStyle = 'text-primary';
const disabledStyle = 'text-gray-400 cursor-default';

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const onClick = (link: Link) => {
    if (link.status === TabStatus.Enabled) {
      router.push(link.path);
    }
  };
  return (
    <header className="flex justify-between items-center py-3 fixed left-1/2 -translate-x-1/2 top-0 max-w-screen-lg mx-auto w-full bg-background rounded-b-lg px-4 z-10">
      <Link href="/" className="flex items-center gap-3">
        <Image src={d9nielNotion} alt="D9niel" width={28} height={28} />
        <h1 className="text-xl font-bold font-funnel">D9niel</h1>
      </Link>
      <nav>
        <ul className="flex gap-10 text-md font-bold items-center">
          {links.map(link => (
            <li key={link.path}>
              <span
                className={twMerge(
                  'cursor-pointer',
                  link.path === pathname && activeStyle,
                  link.status === TabStatus.Disabled && disabledStyle
                )}
                onClick={() => onClick(link)}
              >
                {link.label}
              </span>
            </li>
          ))}
          <li>
            <Link href="/contact">
              <button className="bg-primary text-foreground px-3 py-1 rounded-lg">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
