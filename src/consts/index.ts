import sections from './sections';
import type { LinkType } from '@/types';

import githubIcon from '@/assets/Github.svg';
import emailIcon from '@/assets/Email.svg';

const env = import.meta.env;

export const NAME = env.VITE_FULL_NAME || 'No name provided';
export const TITLE = env.VITE_TITLE || 'No title provided';
export const GITHUB_REPO = env.VITE_GITHUB_LINK || 'https://github.com';
export const EMAIL = env.VITE_EMAIL || 'No email provided';

export const socials = [
  { icon: githubIcon, href: GITHUB_REPO },
  { icon: emailIcon, href: `mailto:${EMAIL}` },
];

export const aboutMe = [
  'Experienced backend developer skilled in Node.js, Nest.js, Next.js, and React. Adept at solving complex coding challenges. Proficient in solving complex coding challenges and creating software solutions.',
];

export const navLinks: LinkType[] = [
  { text: 'About me', href: '#about-me' },
  ...sections.map((section) => ({
    text: section.title,
    href: `#${section.id}`,
  })),
];

const PageConsts = {
  name: NAME,
  subtitle: TITLE,
  navLinks,
  socials,
  aboutMe,
  sections,
};

export default PageConsts;
