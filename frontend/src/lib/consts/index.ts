import sections from './sections';
import type { LinkType } from '@/types';

import linkedinIcon from '@/assets/Linkedin.svg';
import githubIcon from '@/assets/Github.svg';
import leetcodeIcon from '@/assets/Leetcode.svg';
import emailIcon from '@/assets/Email.svg';

export const name = 'Artemii Fedotov';
export const subtitle = 'Backend Developer';
export const slogan: string | undefined = 'artemii.fedotov@tutamail.com';

export const socials = [
  { icon: githubIcon, href: 'https://github.com/Makefolder' },
  { icon: leetcodeIcon, href: 'https://leetcode.com/u/makefolder/' },
  {
    icon: linkedinIcon,
    href: 'https://www.linkedin.com/in/artemii-fedotov/',
  },
  { icon: emailIcon, href: 'mailto:artemii.fedotov@tutamail.com' },
];

export const aboutMe = [
  'Experienced backend developer skilled in Node.js, Next.js, and React. Adept at solving complex coding challenges and building robust software solutions. Proven ability to deliver high-quality results under tight deadlines.',
  'I am open-minded, responsible, good in English and Slovak, fluent in Ukrainian and Russian.',
];

export const navLinks: LinkType[] = [
  { text: 'About me', href: '#about-me' },
  ...sections.map((section) => ({
    text: section.title,
    href: `#${section.id}`,
  })),
];

const PageConsts = {
  name,
  subtitle,
  slogan,
  navLinks,
  socials,
  aboutMe,
  sections,
};

export default PageConsts;
