import cssLogo from '@/assets/images/skills/css.svg';
import dockerLogo from '@/assets/images/skills/docker.webp';
import figmaLogo from '@/assets/images/skills/figma.webp';
import gitLogo from '@/assets/images/skills/git.png';
import goLogo from '@/assets/images/skills/go.png';
import graphqlLogo from '@/assets/images/skills/graphql.png';
import htmlLogo from '@/assets/images/skills/html.png';
import javascriptLogo from '@/assets/images/skills/javascript.png';
import linuxLogo from '@/assets/images/skills/linux.png';
import mysqlLogo from '@/assets/images/skills/mysql.png';
import nestjsLogo from '@/assets/images/skills/nestjs.svg';
import nextjsLogo from '@/assets/images/skills/nextjs.svg';
import nuxtjsLogo from '@/assets/images/skills/nuxtjs.svg';
import reactLogo from '@/assets/images/skills/react.png';
import tailwindcssLogo from '@/assets/images/skills/tailwindcss.png';
import typescriptLogo from '@/assets/images/skills/typescript.png';
import viteLogo from '@/assets/images/skills/vite.png';
import vueLogo from '@/assets/images/skills/vue.png';
import { StaticImageData } from 'next/image';

export enum Skill {
  HTML = 'HTML',
  CSS = 'CSS',
  JavaScript = 'JavaScript',
  Next = 'Next',
  Nuxt = 'Nuxt',
  Vite = 'Vite',
  React = 'React',
  Vue = 'Vue',
  TypeScript = 'TypeScript',
  TailwindCSS = 'TailwindCSS',
  Figma = 'Figma',
  GraphQL = 'GraphQL',
  Linux = 'Linux',
  Git = 'Git',
  Docker = 'Docker',
  NestJS = 'NestJS',
  Go = 'Go',
  MySQL = 'MySQL',
}

export const SkillMap: Record<Skill, StaticImageData> = {
  [Skill.HTML]: htmlLogo,
  [Skill.CSS]: cssLogo,
  [Skill.JavaScript]: javascriptLogo,
  [Skill.Next]: nextjsLogo,
  [Skill.Nuxt]: nuxtjsLogo,
  [Skill.Vite]: viteLogo,
  [Skill.React]: reactLogo,
  [Skill.Vue]: vueLogo,
  [Skill.TypeScript]: typescriptLogo,
  [Skill.TailwindCSS]: tailwindcssLogo,
  [Skill.Figma]: figmaLogo,
  [Skill.GraphQL]: graphqlLogo,
  [Skill.Linux]: linuxLogo,
  [Skill.Git]: gitLogo,
  [Skill.Docker]: dockerLogo,
  [Skill.NestJS]: nestjsLogo,
  [Skill.Go]: goLogo,
  [Skill.MySQL]: mysqlLogo,
};

export const SkillIconMap: Record<Skill, string> = {
  [Skill.HTML]: 'devicon-html5-plain',
  [Skill.CSS]: 'devicon-css3-plain',
  [Skill.JavaScript]: 'devicon-javascript-plain',
  [Skill.Next]: 'devicon-nextjs-plain',
  [Skill.Nuxt]: 'devicon-nuxtjs-plain',
  [Skill.Vite]: 'devicon-vitejs-plain',
  [Skill.React]: 'devicon-react-original',
  [Skill.Vue]: 'devicon-vuejs-plain',
  [Skill.TypeScript]: 'devicon-typescript-plain',
  [Skill.TailwindCSS]: 'devicon-tailwindcss-original',
  [Skill.Figma]: 'devicon-figma-plain',
  [Skill.GraphQL]: 'devicon-graphql-plain',
  [Skill.Linux]: 'devicon-linux-plain',
  [Skill.Git]: 'devicon-git-plain',
  [Skill.Docker]: 'devicon-docker-plain',
  [Skill.NestJS]: 'devicon-nestjs-original',
  [Skill.Go]: 'devicon-go-original-wordmark',
  [Skill.MySQL]: 'devicon-mysql-original',
};
