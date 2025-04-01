'use client';

import d9nielNotion from '@/assets/images/d9niel-notion.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = (link: Link) => {
    if (link.status === TabStatus.Enabled) {
      router.push(link.path);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed left-1/2 top-0 z-20 mx-auto flex w-full max-w-screen-lg -translate-x-1/2 items-center justify-between rounded-b-lg bg-background px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src={d9nielNotion} alt="D9niel" width={28} height={28} />
          <h1 className="font-funnel text-xl font-bold">D9niel</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-md font-bold">
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
                <button className="rounded-lg bg-primary px-3 py-1 text-foreground">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={twMerge(
              'h-0.5 w-6 bg-white transition-transform duration-300',
              isMenuOpen && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={twMerge(
              'h-0.5 w-6 bg-white transition-opacity duration-300',
              isMenuOpen && 'opacity-0'
            )}
          />
          <span
            className={twMerge(
              'h-0.5 w-6 bg-white transition-transform duration-300',
              isMenuOpen && '-translate-y-2 -rotate-45'
            )}
          />
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={twMerge(
          'fixed inset-0 z-10 bg-background pt-16 transition-transform duration-300 md:hidden',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav className="mt-4 px-8">
          <ul className="flex flex-col text-lg font-bold">
            {links.map(link => (
              <li key={link.path}>
                <span
                  className={twMerge(
                    'block w-fit cursor-pointer py-2',
                    link.path === pathname && activeStyle,
                    link.status === TabStatus.Disabled && disabledStyle
                  )}
                  onClick={() => onClick(link)}
                >
                  {link.label}
                </span>
              </li>
            ))}
            <li className="flex">
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-lg bg-primary px-6 py-2 text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
