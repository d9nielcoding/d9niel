import easyWallet from '@/assets/images/projects/easy-wallet.png';
import poklist from '@/assets/images/projects/poklist.png';
import ramenMove from '@/assets/images/projects/ramen-move.png';
import { StaticImageData } from 'next/image';
import { Skill } from './skill-images';

export enum ProjectRole {
  Frontend = 'Frontend',
  Backend = 'Backend',
  ProductManager = 'Product Manager',
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
  roles: ProjectRole[];
  techStack: Skill[];
}

export const projects: ProjectCardProps[] = [
  {
    title: 'Poklist',
    description:
      'Turn thoughts into lists, discover fresh finds, and follow inspiration',
    image: poklist,
    roles: [ProjectRole.Frontend, ProjectRole.Backend],
    techStack: [Skill.React, Skill.TypeScript, Skill.TailwindCSS, Skill.Go],
  },
  {
    title: 'Ramen Move',
    description:
      'Ramen Move is a mobile application that allows you to find the best ramen in your area.',
    image: ramenMove,
    roles: [ProjectRole.ProductManager],
    techStack: [],
  },
  {
    title: 'Easy Wallet',
    description: 'A demo application for a web3 wallet.',
    image: easyWallet,
    roles: [ProjectRole.Frontend],
    techStack: [Skill.React, Skill.Next, Skill.TypeScript, Skill.TailwindCSS],
    link: 'https://easy-wallet-six.vercel.app/',
  },
];
