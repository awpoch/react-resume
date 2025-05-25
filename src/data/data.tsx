import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import background from "../images/circuitBoard.jpg";
import heroImage from "../images/Delicate.jpg";
import automatedAutoCare from "../images/portfolio/AutomatedAutoCare.gif";
import drawingApp from "../images/portfolio/DrawingApp.gif";
import electronicsLab from "../images/portfolio/ElectronicsLab.jpg";
import endangeredAnimals from "../images/portfolio/EndangeredAnimalsAnimation.gif";
import homeAssistant from "../images/portfolio/HomeAssistant.png";
import pfsense from "../images/portfolio/pfsense.png";
import proxmox from "../images/portfolio/Proxmox.png";
import pythonProxy from "../images/portfolio/PythonProxy.png";
import reactResume from "../images/portfolio/ReactResume.png";
import spriteEditor from "../images/portfolio/SpriteEditorAnimation.gif";
import tankWars from "../images/portfolio/TankWarsAnimation.gif";
import profilePic from "../images/ProfilePicture.jpg";
import richardGhersi from "../images/richardGhersi.jpg";
import {
    About,
    ContactSection,
    ContactType,
    Hero,
    HomepageMeta,
    ProjectItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
    Video,
} from "./types";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: "Austin's Web Portfolio",
    description: "Austin Poch's React Web Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: "hero",
    About: "about",
    Resume: "resume",
    Skills: "skills",
    Projects: "projects",
    Video: "video",
    Testimonials: "testimonials",
    Contact: "contact",
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
            <p className="text-body text-stone-200">
                {`I'm a student at `}
                <strong className="text-stone-100">
                    University of Utah
                </strong>{" "}
                with
                {` one remaining class to get a Bachelor's Degree in Computer Science. I'm currently looking for a `}
                <strong className="text-stone-100">
                    full-time job or internship
                </strong>
                {`.`}
            </p>
            <p className="text-body text-stone-200">
                In my free time, you might catch me playing my bass guitar,
                fixing electronics, working on cars, camping and hiking all over
                Utah, or spending time with family and friends.
            </p>
        </>
    ),

    actions: [
        {
            href: "Resume.pdf",
            text: "Resume PDF",
            primary: true,
            Icon: ArrowDownTrayIcon,
        },
        {
            href: `#${SectionId.Contact}`,
            text: "Contact",
            primary: false,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilePic,
    description: `I'm finishing up a Computer Science Degree at the University of Utah and am looking for a full-time opportunity
  to learn and work with a skilled team. I'm a problem solver, self starter, organized, and I'm easy to get along with.`,
    aboutItems: [
        { label: "Location", text: "Sandy, Utah", Icon: MapIcon },
        { label: "Nationality", text: "American", Icon: FlagIcon },
        {
            label: "Interests",
            text: "Exciting activities, Good Food, Good People",
            Icon: SparklesIcon,
        },
        {
            label: "Studying at",
            text: "University of Utah",
            Icon: AcademicCapIcon,
        },
    ],
};

/**
 * Education
 */
export const education: TimelineItem[] = [
    {
        date: "September 2020 - May 2025 (Expected)",
        location: "University of Utah",
        title: "Bachelor's in Computer Science",
        content: (
            <p>
                U of U has been great for teaching a broad understanding
                computers, not just how to code. Things like networking,
                compilers, interpreters, algorithms, memory allocation, Boolean
                logic, and advanced math.
            </p>
        ),
    },
    {
        date: "September 2018 - August 2020",
        location: "Salt Lake Community College",
        title: "Associate's in Information Systems",
        content: (
            <p>
                SLCC was great for getting the majority of my generals completed
                and learning basic programming skills like how loops work,
                binary numbering, floating point values, data structures, and
                basic web development.
            </p>
        ),
    },
];

/**
 * Work
 */
export const experience: TimelineItem[] = [
    {
        date: "May 2024 - Dec 2024",
        location: "Sorenson Communications",
        title: "Network Operations Center Intern",
        content: (
            <p>
                Sorenson communications provides video to telephone interpretive
                services for the deaf. I monitored and maintained their
                on-prem/cloud infrastructure, tested their apps/services, and
                facilitated incident management. I was offered a full time
                position but decided to finish up my CS degree at University of
                Utah.
            </p>
        ),
    },
    {
        date: "July 2016 - March 2018",
        location: "Romac Services",
        title: "Team Member, then Crew Chief",
        content: (
            <p>
                I directed a team of associates in completing services. I
                performed multiple tasks for local businesses, and fixed various
                mechanical and industrial equipment.
            </p>
        ),
    },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: "Languages, Frameworks, and Libraries",
        skills: [
            { name: "C, C++, C#", level: 8 },
            { name: "Kotlin (Mobile)", level: 7 },
            { name: "React, React Native, Next.js, Node.js", level: 9 },
            { name: "Javascript, Typescript, HTML, CSS, JSON", level: 8 },
            { name: "Rest APIs, MySQL, Express.js Prisma ORM", level: 8 },
        ],
    },
    {
        name: "Development Tools",
        skills: [
            { name: "Linux & Windows CLIs", level: 8 },
            { name: "VS Code", level: 10 },
            { name: "Git Version Control", level: 8 },
            { name: "Docker, Docker Compose", level: 9 },
            { name: "CI/CD Pipelines", level: 7 },
        ],
    },
    {
        name: "Platforms and Networking Tools",
        skills: [
            { name: "Amazon Web Services & Terraform", level: 7 },
            { name: "DNS, Certificates, and Nginx", level: 8 },
            { name: "VMware's ESXi & Proxmox (Virtualization)", level: 8 },
            { name: "Home Assiatant Automations, MQTT, Node Red", level: 8 },
            {
                name: "Subnetting, CIDR Notation, Wireshark, Nmap, Traceroute",
                level: 9,
            },
        ],
    },
    {
        name: "Personal Strengths",
        skills: [
            { name: "Communication", level: 9 },
            { name: "Problem Solving", level: 9 },
            { name: "Dedication & Reliability", level: 9 },
            { name: "Team Collaboration", level: 9 },
            { name: "People Skills", level: 9 },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: ProjectItem[] = [
    {
        title: "React Portfolio",
        description: `I created this react protfolio website showcasing myself and my 
			accomplishments. It uses Typesctipt and is hosted on AWS.`,
        url: undefined,
        image: reactResume,
    },
    {
        title: "Endangered Animal Slide Game!",
        description: `I created a slide game featuring endangered animals using Qt and C++.`,
        url: undefined,
        image: endangeredAnimals,
    },
    {
        title: "Home Assistant",
        description: `I created a smart home with Home Assistant, Zigbee, MQTT, and Node Red.
			I Installed and setup Home Assistant, an opensource fully featured
            smart home operating system. I utilize Wifi, Zwave, and Zigbee to
            communicate with all my smart home devices. I can securly control my
            many smart home devices easily from any internet enabled device
            using a cloudflare tunnel or my wireguard VPN.`,
        url: undefined,
        image: homeAssistant,
    },
    {
        title: "Automated Auto Care",
        description: `I created a full stack mobile application using React Native, 
			NodeJS, MySQL, Terraform and Amazon Web Services. It uses google 
			oAuth for authentication, has a fully functional backend REST API, 
			and sends notifications using Firebase! This is still a work in progress.`,
        url: "https://grider1.github.io/aacweb/",
        image: automatedAutoCare,
    },
    {
        title: "Sprite Editor",
        description: `I created a multi-frame sprite image editor using Qt and C++.`,
        url: "https://github.com/awpoch/Sprite-Editor",
        image: spriteEditor,
    },
    {
        title: "Proxmox",
        description: `I setup a virtual environment with Proxmox to run all of my home services.
			I setup a home lab using proxmox to run all my home services. With
            proxmox I'm able to virutalize my router/firewall with pfsense, run
            home assistant for my all my smart home devices and automations, run
            Windows and Blue Iris for my Security System, and run Docker in
            Linux for to create a Cloudflare tunnel. Below is a link to a
            proxmox overview page and a picture of my setup.`,
        url: undefined,
        image: proxmox,
    },
    {
        title: "Tank Wars Game",
        description: `I created an online multiplayer tank game with AI players using C#.`,
        url: "https://github.com/awpoch/TankWars",
        image: tankWars,
    },
    {
        title: "Drawing App",
        description: `This Android app uses kotlin. It connects to a backend server for 
			user account creation, login, and secure authentication. Once logged in, 
			users can draw pictures and access a community feed to view and share content 
			with others.`,
        url: undefined,
        image: drawingApp,
    },
    {
        title: "PfSense",
        description: `I setup a firewall and router for home use which uses multiple subnets to seperate untrusted devices on my network.
			I Installed and setup pfSense, a firewall/router. I set up multiple
            vlans and implemented well thought out firewall rules. I also have
            Wireguard tunnel running so I can securly access my network from
            outside my home.`,
        url: undefined,
        image: pfsense,
    },
    {
        title: "Python Proxy",
        description: `I created 3 python scripts, a client, a proxy, and server.`,
        url: "https://github.com/awpoch/PythonProxy",
        image: pythonProxy,
    },
    {
        title: "Electronics Lab/Home Office",
        description: `I setup an electronics repair lab in my office for ease of 
        	access and functionality. I setup an electronic repair lab with a full size toolbox a vented    
			locker to hold my desktop pc. I have lots of tools and electrical
            components to fix just about anything. I like to design custom pcbs
            for various projects I have going on and solder on all the
            components myself. One of my favorite things to make are my custom
            led lights that ramp the brightness and color output so it's easy to
            just set it and forget it. Large toolbox makes is easy to stay organized which
			makes for a great learning environment.
			I setup a comfortable organized Home Office with a sit/stand desk
            that raises and lowers at the push of a button. My pc is hidden away
            from view in a vented locker which gives my office a clean
            aesthetic.`,
        url: undefined,
        image: electronicsLab,
    },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
    imageSrc: background,
    testimonials: [
        {
            name: "Tracy Evans - Sorenson Communications Manager",
            text: "You are absolutely amazing and were everything we could have hoped for in an intern. While I am very sad to see you go, I wish you only the best as you work to complete your schooling.",
            image: undefined,
        },
        {
            name: "Richard Ghersi - Sorenson Communications Manager",
            text: "Thank you so much for being a part of our team! Your hard work and dedication have not gone unnoticed.",
            image: richardGhersi,
        },
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
 * Contact section
 */
export const contact: ContactSection = {
    headerText: "Get in touch.",
    description: "Feel free to contact me by phone or by email.",
    items: [
        {
            type: ContactType.Phone,
            text: "801-403-7292",
            href: "tel:+18014037292",
        },
        {
            type: ContactType.Email,
            text: "awpoch@gmail.com",
            href: "mailto:awpoch@gmail.com",
        },
        {
            type: ContactType.Location,
            text: "Sandy, Utah",
            href: "https://maps.app.goo.gl/4HzAmJ3BekVTHVmT9",
        },
    ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    { label: "Github", Icon: GithubIcon, href: "https://github.com/awpoch" },
    {
        label: "LinkedIn",
        Icon: LinkedInIcon,
        href: "https://linkedin.com/in/austin-poch-739134285",
    },
];
