import cssLogo from '@/assets/images/css.svg';
import dockerLogo from '@/assets/images/docker.webp';
import figmaLogo from '@/assets/images/figma.webp';
import gitLogo from '@/assets/images/git.png';
import goLogo from '@/assets/images/go.png';
import graphqlLogo from '@/assets/images/graphql.png';
import htmlLogo from '@/assets/images/html.png';
import javascriptLogo from '@/assets/images/javascript.png';
import linuxLogo from '@/assets/images/linux.png';
import mysqlLogo from '@/assets/images/mysql.png';
import nestjsLogo from '@/assets/images/nestjs.svg';
import nextjsLogo from '@/assets/images/nextjs.svg';
import nuxtjsLogo from '@/assets/images/nuxtjs.svg';
import reactLogo from '@/assets/images/react.png';
import tailwindcssLogo from '@/assets/images/tailwindcss.png';
import typescriptLogo from '@/assets/images/typescript.png';
import viteLogo from '@/assets/images/vite.png';
import vueLogo from '@/assets/images/vue.png';
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
