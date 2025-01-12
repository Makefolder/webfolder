import { Section } from '@/types';

export const education: Section = {
  title: 'Education',
  id: 'education',
  cards: [
    {
      date: '2024',
      title: 'Technical University of Košice',
      description:
        'I am currently enrolled to study Cyber Security, where I hope to further develop my skills and contribute to the field.',
      href: 'https://www.fei.tuke.sk/en',
      tags: [],
    },
    {
      date: '2020 – 2021',
      title: '3D Maya Artist',
      description:
        'I’ve got experience of working in such programs as Maya, UE4, Rizom UV, Marmoset Toolbag and Substance Painter.',
      tags: [
        'Marmoset Toolbag',
        'Substance Painter',
        'Rizom UV',
        'Maya',
        'UE4',
      ],
      certificate: true,
    },
  ],
};

export const experience: Section = {
  title: 'Experience',
  id: 'experience',
  cards: [
    {
      date: '2025 – Present',
      title: 'Columbia University project',
      description:
        'Project for Colombian University (NYC). Still in development.',
      href: 'https://www.columbia.edu/',
      tags: ['Python', 'Solid.js', 'TypeScript', 'Software'],
    },
    {
      date: '2024 – Present',
      title: 'TheBuidl.io',
      description:
        'Web3 Buidlers that ships products in a matter of weeks. I am a fullstack developer on ineresting projects.',
      href: 'https://thebuidl.io/',
      tags: [
        'React',
        'Next.js',
        'Express.js',
        'TypeScript',
        'MongoDB',
        'PostgreSQL',
        'Fullstack',
      ],
    },
    {
      date: '2024',
      title: 'Best Košice',
      description:
        'I have been a member of international organisation for students called BEST.',
      href: 'https://beshttps://best.tuke.sk/tkosice.com/',
      tags: [],
    },
    {
      date: '2024',
      title: 'Olywka',
      description:
        'We developed Olywka Shop from scratch into a production-ready online clothing store The platform now serves over 1,000 daily visitors.',
      href: 'https://olywka-shop.com.ua/',
      tags: [
        'GoLang',
        'TypeScript',
        'Elysia.js',
        'SQLite',
        'Caddy',
        'Docker',
        'Backend',
      ],
    },
  ],
};

const baseLink = `https://github.com/Makefolder`;

export const petProjects: Section = {
  title: 'Pet projects',
  id: 'pet-projects',
  cards: [
    {
      date: '2024',
      title: 'Deployer',
      description:
        'This tool eliminates manual intervention by automatically pulling repositories, building projects and managing server deployments.',
      href: `${baseLink}/deployer`,
      tags: ['Rust', 'CI/CD', 'Software'],
    },
    {
      date: '2024',
      title: 'STUD lib',
      description:
        'Standard (aka “STD”) lib. Anything you might need while programming in C.',
      href: `${baseLink}/studlib`,
      tags: ['C99', 'Library'],
    },
    {
      date: '2024',
      title: 'IRC lib',
      description:
        'Simple Internet Relay Chat library written in C (standard 99).',
      href: `${baseLink}/irclib`,
      tags: ['C99', 'Library'],
    },
    {
      date: '2024',
      title: 'LMDB',
      description: 'LMDB is a local movie database.',
      href: `${baseLink}/lmdb`,
      tags: ['Svelte', 'TypeScript', 'GoLang', 'SQLite', 'Fullstack'],
    },
  ],
};
