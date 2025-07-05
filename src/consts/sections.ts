import { Section } from '@/types';

const baseLink = import.meta.env.VITE_GITHUB_LINK || 'https://github.com';

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
        'Next.js',
        'GoLang',
        'gRPC',
        'Microservices',
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
      title: 'Olywka',
      description:
        'We developed Olywka Shop from scratch into a production-ready online clothing store.',
      tags: ['Bun', 'Elysia.js', 'SQLite', 'Caddy', 'Docker', 'Backend'],
    },
  ],
};

const education: Section = {
  title: 'Education',
  id: 'education',
  cards: [
    {
      date: {
        start: new Date('2024'),
        end: new Date('2025'),
      },
      title: 'Technical University of Košice',
      description:
        'Enrolled in Cyber Security BSc program; withdrew early to pursue professional web development opportunities.',
      href: 'https://www.fei.tuke.sk/en',
      tags: ['C11', 'Software'],
    },
    {
      date: {
        start: new Date('2022'),
        end: new Date('2022'),
      },
      title: 'Self-Directed Learning',
      description:
        "CS61A: Structure and Interpretation of Computer Programs (UC Berkeley) Online lectures + assignments",
      href: 'https://www.ocf.berkeley.edu/~shidi/cs61a/61a-fa13-website/index.html',
      tags: ['Python', 'Software'],
    },
  ],
};

const petProjects: Section = {
  title: 'Pet projects',
  id: 'pet-projects',
  cards: [
    {
      date: {
        start: new Date('2025'),
        end: new Date('2025'),
      },
      title: 'Web3 Coinflip',
      description:
        'A coin-flip-like game written in Solidity for two players, where their bets influence the chances of winning.',
      href: `${baseLink}/web3-coinflip`,
      tags: ['Solidity', 'Hardhat', 'TypeScript', 'Web3'],
    },
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
        'Tracks Github repository, pulls latest commits, creates svc files and builds executables on VPS.',
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
        'Standard (“STD”) lib. Anything you might need while programming in C.',
      href: `${baseLink}/studlib`,
      tags: ['C99', 'Library'],
    },
    {
      date: {
        start: new Date('2024'),
        end: new Date('2024'),
      },
      title: 'IRC lib',
      description: 'Simple Internet Relay Chat library written.',
      href: `${baseLink}/irclib`,
      tags: ['C99', 'Library'],
    },
  ],
};

const sections = [experience, education, petProjects];

export default sections;
