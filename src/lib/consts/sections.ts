import { Section } from '@/types';

const education: Section = {
  title: 'Education',
  id: 'education',
  cards: [
    {
      date: {
        start: new Date('2022'),
        end: new Date('2022'),
      },
      title: 'CS61A Fall 2013 (online lectures)',
      description:
        "I gained a solid foundation in programming by completing UC Berkeley's CS61A course, using recorded lectures and assignments from the Fall 2013 semester.",
      href: 'https://www.ocf.berkeley.edu/~shidi/cs61a/61a-fa13-website/staff.html',
      tags: ['Python', 'Software'],
    },
    {
      date: {
        start: new Date('2020'),
        end: new Date('2021'),
      },
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

const experience: Section = {
  title: 'Experience',
  id: 'experience',
  cards: [
    {
      date: {
        start: new Date('2024'),
      },
      title: 'TheBuidl.io',
      description:
        'Working as a Fullstack Developer with a team of Web3 builders on bunch of interesting projects.',
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
      date: {
        start: new Date('2024'),
        end: new Date('2024'),
      },
      title: 'Best Košice',
      description:
        'I have been a member of international organisation for students called BEST.',
      href: 'https://best.tuke.sk/',
      tags: [],
    },
    {
      date: {
        start: new Date('2024'),
        end: new Date('2024'),
      },
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

const petProjects: Section = {
  title: 'Pet projects',
  id: 'pet-projects',
  cards: [
    {
      date: {
        start: new Date('2025'),
        end: new Date('2025'),
      },
      title: 'Webfolder',
      description:
        'A modern personal portfolio website built with a robust tech stack. Features a clean, responsive design showcasing my projects and skills.',
      href: `${baseLink}/webfolder`,
      tags: ['TypeScript', 'Solid.js', 'Hono', 'SQLite', 'Fullstack'],
    },
    {
      date: {
        start: new Date('2024'),
        end: new Date('2024'),
      },
      title: 'Deployer',
      description:
        'This tool eliminates manual intervention by automatically pulling repositories, building projects and managing server deployments.',
      href: `${baseLink}/deployer`,
      tags: ['Rust', 'CI/CD', 'Software'],
    },
    {
      date: {
        start: new Date('2024'),
        end: new Date('2024'),
      },
      title: 'STUD lib',
      description:
        'Standard (aka “STD”) lib. Anything you might need while programming in C.',
      href: `${baseLink}/studlib`,
      tags: ['C99', 'Library'],
    },
    {
      date: {
        start: new Date('2024'),
        end: new Date('2024'),
      },
      title: 'IRC lib',
      description:
        'Simple Internet Relay Chat library written in C (standard 99).',
      href: `${baseLink}/irclib`,
      tags: ['C99', 'Library'],
    },
    {
      date: {
        start: new Date('2024'),
        end: new Date('2024'),
      },
      title: 'LMDB',
      description: 'LMDB is a local movie database.',
      href: `${baseLink}/lmdb`,
      tags: ['Svelte', 'TypeScript', 'GoLang', 'SQLite', 'Fullstack'],
    },
  ],
};

const sections = [education, experience, petProjects];

export default sections;
