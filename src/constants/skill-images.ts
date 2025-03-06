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

export const SkillLogo1: Record<string, StaticImageData> = {
  HTML: htmlLogo,
  CSS: cssLogo,
  JavaScript: javascriptLogo,
  NextJS: nextjsLogo,
  NuxtJS: nuxtjsLogo,
  Vite: viteLogo,
};

export const SkillLogo2: Record<string, StaticImageData> = {
  React: reactLogo,
  Vue: vueLogo,
  TypeScript: typescriptLogo,
  TailwindCSS: tailwindcssLogo,
  Figma: figmaLogo,
  GraphQL: graphqlLogo,
};

export const SkillLogo3: Record<string, StaticImageData> = {
  Linux: linuxLogo,
  Git: gitLogo,
  Docker: dockerLogo,
  NestJS: nestjsLogo,
  Go: goLogo,
  MySQL: mysqlLogo,
};
