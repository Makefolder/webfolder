import sections from './sections';
import type { LinkType } from '@/types';

import linkedinIcon from '@/assets/Linkedin.svg';
import githubIcon from '@/assets/Github.svg';
import leetcodeIcon from '@/assets/Leetcode.svg';
import emailIcon from '@/assets/Email.svg';

export const name = 'Artemii Fedotov';
export const subtitle = 'Fullstack Developer';
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
  'Proficient in solving complex coding challenges and creating software solutions. Proven ability to adapt and thrive in professional environments despite the absence of a formal degree. Highly adaptable and dedicated to delivering high-quality results under tight deadlines.',
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
