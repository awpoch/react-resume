import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import videoImage from '../images/videoImage.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  Video,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Austin Poch's react resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Video: 'video',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Austin Poch`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student at <strong className="text-stone-100">University of Utah</strong> 28 credits away from a Bachelor's Degree in Comupter Science, currently looking
        for an <strong className="text-stone-100">Internship</strong> to gain relevant experiance in the field.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">Snowboarding</strong>,
        slapping my <strong className="text-stone-100">Bass Guitar</strong>, or camping all over{' '}
        <strong className="text-stone-100">Utah</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1egOluvgN48ZXSFaP71m6S75a8Jzice3y78zKORS6oBE/edit?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Sandy, Utah', Icon: MapIcon},
    {label: 'Nationality', text: 'American / White', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Bass Guitar, Snowboarding, Camping, Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Utah', Icon: AcademicCapIcon},
  ],
};

/**
 * Vidoe section
 */
export const videoData: Video = {
  imageSrc: videoImage,
  description: `Video description`,
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Languages, Frameworks, and Libraries',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Javascript/Typescript',
        level: 5,
      },
      {
        name: 'C/C++/C#/Java',
        level: 6,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'MySQL/MariaDB',
        level: 5,
      },
    ],
  },
  {
    name: 'Development Tools',
    skills: [
      {
        name: 'VS Code',
        level: 8,
      },
      {
        name: 'Docker',
        level: 5,
      },
      {
        name: 'Git',
        level: 5,
      },
      {
        name: 'Linux CLI',
        level: 6,
      },
    ],
  },
  {
    name: 'Platforms and Networking Tools',
    skills: [
      {
        name: 'PfSense',
        level: 6,
      },
      {
        name: 'Proxmox',
        level: 4,
      },
      {
        name: 'Home Assistant',
        level: 5,
      },
      {
        name: 'Wireshark',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2020 - December 2024 (Expected)',
    location: 'University of Utah',
    title: 'Bachelor\'s in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'September 2018 - August 2020',
    location: 'Salt Lake Community College',
    title: 'Associate\'s in Information Systems',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2016 - March 2018',
    location: 'Romac Services',
    title: 'Team Member, then Crew Chief',
    content: (
      <p>
        Directed a team of associates in completing services,
        performed multiple tasks for local businesses, and
        fixed various mechanical and industrial equipment.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me by phone or by email.',
  items: [
    {
      type: ContactType.Phone,
      text: '801-403-7292',
      href: 'tel:+18014037292',
    },
    {
      type: ContactType.Email,
      text: 'awpoch@gmail.com',
      href: 'mailto:awpoch@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Sandy, Utah',
      href: 'https://maps.app.goo.gl/4HzAmJ3BekVTHVmT9',
    },
    {
      type: ContactType.Github,
      text: 'awpoch',
      href: 'https://github.com/awpoch',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/awpoch'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/austin-poch-739134285'},
];
