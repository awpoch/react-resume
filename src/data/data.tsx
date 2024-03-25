/* eslint-disable simple-import-sort/imports */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/Delicate.jpg';
import porfolioImage1 from '../images/portfolio/EndangeredAnimalsAnimation.gif'
import porfolioImage2 from '../images/portfolio/SpriteEditorAnimation.gif'
import porfolioImage3 from '../images/portfolio/PythonProxy.png';
import porfolioImage4  from '../images/portfolio/TankWarsAnimation.gif'
import porfolioImage5 from '../images/portfolio/ReactResume.png';
import porfolioImage6 from '../images/portfolio/HomeAssistant.png';
import porfolioImage7 from '../images/portfolio/Proxmox.png';
import porfolioImage8 from '../images/portfolio/pfsense.png';
import porfolioImage9 from '../images/portfolio/SecuritySystem.png';
import porfolioImage10 from '../images/portfolio/HomeOffice.jpg';
import porfolioImage11 from '../images/portfolio/ElectronicsLab.jpg';
import profilepic from '../images/ProfilePicture.jpg';
import background from '../images/circuitBoard.jpg';
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
  title: 'Austin\'s Web Portfolio',
  description: "Austin Poch's react web portfolio",
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
        I'm a student at <strong className="text-stone-100">University of Utah</strong> with few remaining credits to get a Bachelor's Degree in Comupter Science. I'm currently looking
        for a <strong className="text-stone-100">Job</strong> or an <strong className="text-stone-100">Internship</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you might catch me playing my <strong className="text-stone-100">Bass Guitar</strong>, camping and hiking all over 
        <strong className="text-stone-100"> Utah</strong>, fixing <strong className="text-stone-100">Electronics</strong>, 
        and even working on cars.
      </p>
    </>
  ),
  actions: [
    {
      href: 'Resume.pdf',
      text: 'Resume PDF',
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
  description: `I'm finishing up a Computer Science Degree at the University of Utah and am looking for an opportunity
  to learn and work with a skilled team. I'm a problem solver, self starter, organized, and I'm easy to get along with.`,
  aboutItems: [
    {label: 'Location', text: 'Sandy, Utah', Icon: MapIcon},
    {label: 'Nationality', text: 'American / White', Icon: FlagIcon},
    {label: 'Interests', text: 'Exciting activities, Good Food, Good People', Icon: SparklesIcon},
    {label: 'Studying at', text: 'University of Utah', Icon: AcademicCapIcon},
  ],
};

/**
 * Video section
 */
export const videoData: Video = {
  imageSrc: background,
  description: `Video of my Bass Skills`,
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages, Frameworks, and Libraries',
    skills: [
      {
        name: 'C/C++/C#/Java',
        level: 10,
      },
      {
        name: 'Python/PHP',
        level: 7,
      },
      {
        name: 'React/Javascript/Typescript',
        level: 5,
      },
      {
        name: 'MySQL/MariaDB',
        level: 4,
      },
    ],
  },
  {
    name: 'Development Tools',
    skills: [
      {
        name: 'VS Code',
        level: 10,
      },
      {
        name: 'Linux CLI',
        level: 9,
      },
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Docker/Docker Compose',
        level: 7,
      },
    ],
  },
  {
    name: 'Platforms and Networking Tools',
    skills: [
      {
        name: 'PfSense',
        level: 10,
      },
      {
        name: 'Wireshark',
        level: 8,
      },
      {
        name: 'Home Assistant',
        level: 8,
      },
      {
        name: 'Proxmox',
        level: 7,
      },
      {
        name: 'Amazon Web Services',
        level: 5,
      },
    ],
  },
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
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Tank Wars Game',
    description: 'I created an online multiplayer tank game with computer players using C#.',
    url: 'https://github.com/awpoch/TankWars',
    image: porfolioImage4,
  },
  {
    title: 'Endangered Animal Slide Game!',
    description: 'I created a slide game featuring endangerd animals using Qt and C++.',
    url: 'https://github.com/awpoch/EndangeredAnimalsSlideGame.git',
    image: porfolioImage1,
  },
  {
    title: 'Home Security System',
    description: 'I setup a home security system using Blue Iris and multiple cameras.',
    url: 'securitySystem',
    image: porfolioImage9,
  },
  {
    title: 'Sprite Editor',
    description: 'I created a multi-frame sprite image editor using Qt and C++.',
    url: 'https://github.com/awpoch/Sprite-Editor',
    image: porfolioImage2,
  },
  {
    title: 'React Portfolio',
    description: 'I created this react protfolio website showcasing myself and my acomplishments.',
    url: 'https://github.com/awpoch/react-resume',
    image: porfolioImage5,
  },
  {
    title: 'Python Proxy',
    description: 'I created 3 python scripts, a client, a proxy, and server.',
    url: 'https://github.com/awpoch/PythonProxy',
    image: porfolioImage3,
  },
  {
    title: 'Home Assistant',
    description: 'I created a smart home with Home Assistant, Zwave and Zigbee.',
    url: 'homeAssistant',
    image: porfolioImage6,
  },
  {
    title: 'PfSense',
    description: 'I setup a firewall and router for home use which uses multiple subnets to seperate untrusted devices on my network.',
    url: 'pfsense',
    image: porfolioImage8,
  },
  
  {
    title: 'Proxmox',
    description: 'I setup a virtual environment with Proxmox to run all of my home services.',
    url: 'proxmox',
    image: porfolioImage7,
  },
  {
    title: 'Home Office',
    description: 'I setup a comfortable home office to make working from home much easier.',
    url: 'homeOffice',
    image: porfolioImage10,
  },
  {
    title: 'Electronics Lab',
    description: 'I setup an electrinics repair lab in my office for ease of access and functionality.',
    url: 'electronicsLab',
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
    content: <p>U of U was great for teaching a broad understanding computers, not just how to code. Things like networking, compilers, interpreters, algorithms, memory allocation, Boolean logic, and advanced math.</p>,
  },
  {
    date: 'September 2018 - August 2020',
    location: 'Salt Lake Community College',
    title: 'Associate\'s in Information Systems',
    content: <p>SLCC was great for getting the majority of my generals completed and learning basic programming skills like how loops work, binary numbering, floating point values, data structures, and basic web development.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2016 - March 2018',
    location: 'Romac Services',
    title: 'Team Member, then Crew Chief',
    content: (
      <p>
        I directed a team of associates in completing services. I
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
  imageSrc: background,
  testimonials: [
    //To add section to nav bar add SectionId.Testimonials to navSections in Header.tsx

    //{
    //  name: 'John Doe',
    //  text: 'Personal quote here.',
    //  image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    //},
    //{
    //  name: 'Jane Doe',
    //  text: 'Personal quote here.',
    //  image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    //},
    //{
    //  name: 'Someone else',
    //  text: 'Personal quote here.',
    //  image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    //},
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
