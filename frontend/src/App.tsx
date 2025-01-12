import type { CardProps, LinkType } from './types';
import LeftPart from './ui-kit/LeftPart';
import RightPart from './ui-kit/RightPart';

import linkedinIcon from './assets/Linkedin.svg';
import githubIcon from './assets/Github.svg';
import leetcodeIcon from './assets/Leetcode.svg';
import emailIcon from './assets/Email.svg';

import ellipse from './assets/Ellipse.svg';

export default function App() {
  const NAME = 'Artemii Fedotov';
  const SUBTITLE = 'Fullstack Developer';
  const SLOGAN = undefined; // replace with string if needed

  const LINKS: LinkType[] = [
    { text: 'About me', href: '#about-me' },
    { text: 'Education', href: '#education' },
    { text: 'Experience', href: '#experience' },
    { text: 'Pet projects', href: '#pet-projects' },
  ];

  const SOCIALS = [
    { icon: githubIcon, href: 'https://github.com/Makefolder' },
    { icon: leetcodeIcon, href: 'https://leetcode.com/u/makefolder/' },
    {
      icon: linkedinIcon,
      href: 'https://www.linkedin.com/in/artemii-fedotov/',
    },
    { icon: emailIcon, href: 'mailto:artemii.fedotov@tutamail.com' },
  ];

  const ABOUT_ME = [
    'Proficient in solving complex coding challenges and creating software solutions. Proven ability to adapt and thrive in professional environments despite the absence of a formal degree. Highly adaptable and dedicated to delivering high-quality results under tight deadlines.',
    'I am open-minded, responsible, good in English and Slovak, fluent in Ukrainian and Russian.',
  ];

  const CARD_DATA: CardProps[] = [
    {
      date: '2024',
      title: 'Technical University of Košice',
      description:
        'I am currently enrolled to study Cyber Security, where I hope to further develop my skills and contribute to the field.',
    },
    {
      date: '2020 – 2021',
      title: '3D Maya Artist',
      description:
        'I’ve got experience of working in such programs as Maya, UE4, Rizom UV, Marmoset Toolbag and Substance Painter.',
      tags: [
        'Maya',
        'UE4',
        'Rizom UV',
        'Marmoset Toolbag',
        'Substance Painter',
      ],
    },
  ];

  return (
    <>
      <div class="bg-noise"></div>
      <div class="fixed top-0 right-0 -z-10">
        <img src={ellipse} alt="ellipse" />
      </div>
      <main class="flex justify-between min-h-screen max-w-[1154px] mx-auto px-[10px]">
        <LeftPart
          name={NAME}
          subtitle={SUBTITLE}
          slogan={SLOGAN}
          links={LINKS}
          socials={SOCIALS}
        />
        <div class="mt-[140px] max-w-[475px] flex-1">
          <RightPart aboutMe={ABOUT_ME} cardData={CARD_DATA} />
        </div>
      </main>
    </>
  );
}
