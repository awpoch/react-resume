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
import homeOffice from "../images/portfolio/HomeOffice.jpg";
import endangeredAnimals from "../images/portfolio/EndangeredAnimalsAnimation.gif";
import homeAssistant from "../images/portfolio/HomeAssistant.png";
import proxmox from "../images/portfolio/Proxmox.png";
import pythonProxy from "../images/portfolio/PythonProxy.png";
import reactResume from "../images/portfolio/ReactResume.png";
import spriteEditor from "../images/portfolio/SpriteEditorAnimation.gif";
import tankWars from "../images/portfolio/TankWarsAnimation.gif";
import profilePic from "../images/ProfilePicture.jpg";
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
                <strong className="text-stone-100">University of Utah</strong>
                {` with one remaining class to get a Bachelor's Degree in Computer Science. I'm currently looking for a `}
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
    description: `I'm one elective away from completing my Computer Science Degree at the 
        University of Utah and am currently looking for a full-time opportunity
        where I can improve my skills while contributing to a strong development team. 
        I'm a problem solver, self-starter, and highly organized. 
        I work well with others, adapt quickly, stay focused on finding solutions, and deliver quality work.`,
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
        date: "September 2020 - December 2025 (Expected, 1 elective class remaining)",
        location: "University of Utah",
        title: "Bachelor's in Computer Science",
        content: (
            <p>
                U of U has been great for teaching a broad understanding of
                computers, not just how to code. I learned things like
                networking, compilers, interpreters, algorithms, memory
                allocation, boolean logic, and advanced math.
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
        date: "May 2024 - December 2024",
        location: "Sorenson Communications",
        title: "Network Operations Center Intern",
        content: (
            <p>
                Sorenson provides video to telephone interpretive services for
                the deaf. I monitored and maintained their on-prem/cloud
                infrastructure, tested their apps and services, and facilitated
                incident management.
            </p>
        ),
    },
    {
        date: "July 2016 - March 2018",
        location: "Romac Services",
        title: "Team Member, then Crew Chief",
        content: (
            <p>
                Romac performed multiple tasks for local businesses. I directed
                a team of associates fixing various mechanical and industrial
                equipment.
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
            { name: "Rest APIs, MySQL, Express.js, Prisma ORM", level: 8 },
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
                name: "Subnetting, CIDR Notation, Nmap, Traceroute",
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
        description: `I created THIS web portfolio using React, TypeScript, Next.js, and Tailwind. I use it to showcase my skills and experience. It's fully responsive and hosted on AWS. It features a clean modern UI, easy navigation, and custom animations. This site serves as a personal branding tool and a central hub for everything I’m building.`,
        url: undefined,
        image: reactResume,
    },
    {
        title: "Automated Auto Care",
        description: `A full-stack mobile app built using React Native, Node.js, MySQL, Firebase, and AWS. It provides car owners automated maintenance tracking and reminders. It utalizes Google OAuth for login, a custom backend REST API, and push notifications. To simplify development, the infrastructure is provisioned with Terraform and there is a CI/CD pipeline. This is still a work in progress, but the foundation is solid and could easily scale.`,
        url: "https://grider1.github.io/aacweb/",
        image: automatedAutoCare,
    },
    {
        title: "Tank Wars Game",
        description: `An online multiplayer tank game developed in C# with support for both human and AI-controlled players. Players navigate a battlefield with real-time action and competitive mechanics. Built with a focus on game logic, collision detection, and multiplayer networking.`,
        url: undefined,
        image: tankWars,
    },
    {
        title: "Drawing App",
        description: `An Android app built with Kotlin and Jetpack Compose. Users can create accounts, log in securely, and draw on a canvas. Drawings are saved to a backend server, and users can view and engage with a community feed. Authentication is JWT-based, and the app demonstrates full integration with backend storage and user-generated content.`,
        url: undefined,
        image: drawingApp,
    },
    {
        title: "Endangered Animal Slide Game",
        description: `A slide puzzle game built with C++/Qt that features endangered animals. The game’s goal is to raise awareness while providing a fun educational challenge. Each puzzle piece features an image of an endangered species. The image gets scrambled, and the player must slide the pieces around to restore the original image.`,
        url: undefined,
        image: endangeredAnimals,
    },
    {
        title: "Home Assistant",
        description: `I built a complete smart home setup using Home Assistant, Zigbee, Z-Wave, MQTT, and Node-RED. Devices are controlled remotely using a WireGuard VPN. I’ve automated lighting, climate control, and security with custom flows. Everything runs on a locally hosted Home Assistant instance, giving me total control and privacy.`,
        url: undefined,
        image: homeAssistant,
    },
    {
        title: "Home Lab",
        description: `I built a home lab and I use Proxmox to run multiple virtural machines and containers. I also configured a secure network utilizing smart firewall rules, VLANs, local DNS, custom domains, and valid certificates for a fully-featured, enterprise-style lab.`,
        url: undefined,
        image: proxmox,
    },
    {
        title: "Sprite Editor",
        description: `I created this C++/Qt application to allows users to create and manage animated images for 2D games. Frame-by-frame animations can easily be created and exported. I built it to learn about graphics manipulation, user input handling, and real-time rendering techniques.`,
        url: undefined,
        image: spriteEditor,
    },
    {
        title: "Python Proxy",
        description: `A network project involving three Python scripts: a client, a proxy, and a server. The proxy intercepts traffic, allowing for debugging, logging, or modifying requests. This project helped deepen my understanding of sockets, data streams, and TCP/IP communication.`,
        url: undefined,
        image: pythonProxy,
    },
    {
        title: "Home Office",
        description: `I built a high-performance workspace designed for productivity and comfort. The office features a motorized sit/stand desk, clean cable management, and a hidden PC tower for a minimalist aesthetic. It’s a space optimized for focus, remote work, and creative projects.`,
        url: undefined,
        image: homeOffice,
    },
    {
        title: "Electronics Lab",
        description:
            "Alongside my office, I've set up a fully functional electronics lab. It includes a soldering station, oscilloscope, custom PCB tools, and a large tool chest stocked for repairs and prototyping. I regularly design and assemble LED lighting systems and small-scale electronics projects, creating a space that supports both learning and hands-on experimentation.",
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
            image: undefined,
        },
    ],
};

/**
 * Video section
 */
export const videoData: Video = {
    imageSrc: background,
    url: "https://www.youtube.com/embed/v0FnmTTD3ek",
    description: `Bonus Video`,
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
    //{ label: "Github", Icon: GithubIcon, href: "https://github.com/awpoch" },
    {
        label: "LinkedIn",
        Icon: LinkedInIcon,
        href: "https://linkedin.com/in/austin-poch-739134285",
    },
];
