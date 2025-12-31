import classNames from "classnames";
import { FC, memo, useEffect, useMemo, useState } from "react";
import {
    ChevronDownIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { isApple, isMobile } from "../../config";
import { portfolioItems, SectionId, testimonial } from "../../data/data";
import { ProjectItem } from "../../data/types";
import Section from "../Layout/Section";

// Animation Config
const animationEasings = {
    linear: "linear",
    easeIn: "easeIn",
    easeOut: "easeOut",
    easeInOut: "easeInOut",
    circInOut: "circInOut",
    backInOut: "backInOut",
    anticipate: "anticipate",
    customBezier: [0.4, 0, 0.2, 1],
};

const chevronRotateTransition = {
    duration: 0.5,
    ease: "easeIn",
};

const textAnimationSpeedS = 0.5;
const textTransition = {
    duration: 0.4,
    ease: animationEasings.customBezier,
};

// Predictive scroll calculation aligned with layout changes.
const scrollToItem = (index: number) => {
    requestAnimationFrame(() => {
        const item = document.getElementById(`portfolio-item-${index}`);
        const navbar = document.getElementById("site-header");

        if (!item) return;

        const collapsedSample = Array.from(
            document.querySelectorAll("[id^='portfolio-item-']")
        ).find((el, i) => i !== index && el.clientHeight < 200) as HTMLElement;

        const collapsedHeight = collapsedSample?.offsetHeight ?? 96;
        const navbarHeight = navbar?.offsetHeight ?? 0;
        const itemTop = item.getBoundingClientRect().top + window.scrollY;
        const buffer = 40;

        const targetScroll =
            itemTop - 2.5 * navbarHeight - 0.5 * collapsedHeight - buffer;

        window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
        });
    });
};

const Projects: FC = memo(() => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">(
        "down"
    );

    const { imageSrc } = testimonial;
    const [parallaxEnabled, setParallaxEnabled] = useState(false);

    const resolveSrc = useMemo(() => {
        if (!imageSrc) return undefined;
        return typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    }, [imageSrc]);

    useEffect(() => {
        setParallaxEnabled(!(isMobile && isApple));
    }, []);

    return (
        <Section
            sectionId={SectionId.Projects}
            noPadding
            className={classNames(
                "relative w-full bg-cover bg-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8",
                parallaxEnabled && "bg-fixed",
                !imageSrc && "bg-neutral-100"
            )}
            style={
                imageSrc ? { backgroundImage: `url(${resolveSrc})` } : undefined
            }
        >
            <div className="w-full mx-auto max-w-6xl rounded-2xl border border-white/10 bg-neutral-900/80 px-6 py-10 shadow-2xl shadow-black/40 backdrop-blur sm:px-8 sm:py-12">
                <div className="flex flex-col gap-2 text-center sm:gap-3">
                    <h2 className=" pb-8 text-heading font-semibold tracking-tight text-white">
                        Projects
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className="mt-8 flex flex-col gap-6">
                    {portfolioItems.map((item, index) => (
                        <motion.div key={index} className="last:mb-0">
                            <ExpandableItem
                                item={item}
                                index={index}
                                isOpen={openIndex === index}
                                scrollDirection={scrollDirection}
                                onClick={() => {
                                    const isClosing = openIndex === index;
                                    const newIndex = isClosing ? null : index;

                                    if (openIndex !== null && !isClosing) {
                                        setOpenIndex(index);
                                        scrollToItem(index);
                                        return;
                                    }

                                    setOpenIndex(newIndex);
                                    if (!isClosing) {
                                        scrollToItem(index);
                                    }
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
});

Projects.displayName = "Projects";
export default Projects;

const ExpandableItem: FC<{
    item: ProjectItem;
    isOpen: boolean;
    onClick: () => void;
    index: number;
    scrollDirection: "up" | "down";
}> = ({ item, isOpen, onClick, index }) => {
    const { title, description, url, image } = item;

    return (
        <motion.div
            id={`portfolio-item-${index}`}
            layoutId={`project-${index}`}
            className={classNames(
                "relative z-10 overflow-hidden rounded-2xl border bg-gradient-to-br shadow-lg shadow-black/30 transition-all",
                isOpen
                    ? "border-white/20 from-neutral-800 via-neutral-800 to-neutral-900"
                    : "border-white/10 from-neutral-800/80 to-neutral-900/80 hover:border-white/20 hover:shadow-black/50"
            )}
            style={{ backgroundClip: "padding-box" }}
        >
            <motion.div
                layout
                transition={textTransition}
                onClick={onClick}
                className={classNames(
                    "relative w-full cursor-pointer gap-4 px-5 py-4 sm:px-6 sm:py-5",
                    isOpen
                        ? "grid grid-cols-1 sm:grid-cols-[auto,1fr] sm:auto-rows-min"
                        : "grid grid-cols-[auto,1fr] items-center"
                )}
            >
                {/* Title */}
                <div
                    className={classNames(
                        isOpen
                            ? "order-1 sm:order-2 w-full text-center sm:text-left"
                            : "order-2"
                    )}
                >
                    <motion.h3
                        layout="position"
                        transition={textTransition}
                        className="text-subheading font-semibold text-white"
                    >
                        {title}
                    </motion.h3>
                </div>

                {/* Image */}
				<motion.div
					layout
					transition={textTransition}
					className={classNames(
						"relative flex justify-start rounded-xl bg-black/20 p-2",
						isOpen
							? "order-2 sm:order-1 w-full max-w-[90vw] sm:w-[320px] sm:row-span-2"
                            : "order-1 w-[6rem] h-[6rem] shrink-0"
                    )}
                >
                    <motion.img
                        src={typeof image === "string" ? image : image.src}
                        alt={`${title} icon`}
                        className={classNames(
                            "object-contain",
                            isOpen ? "max-h-[40vh] w-full" : "h-full w-full"
                        )}
                        style={{
                            transformOrigin: "top left",
                            borderRadius: "inherit",
                            position: isOpen ? "relative" : "absolute",
                            top: 0,
                            left: 0,
                        }}
                    />
                </motion.div>

                {/* Text (description + URL) */}
                {isOpen && (
                    <motion.div
                        layout
                        transition={textTransition}
                        className="order-3 w-full flex flex-col items-start gap-y-2 text-left"
                    >
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key="wrapper"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    duration: textAnimationSpeedS,
                                    ease: animationEasings.easeInOut,
                                }}
                                className="overflow-hidden w-full"
                            >
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        duration: textAnimationSpeedS,
                                        ease: animationEasings.easeInOut,
                                    }}
                                    className="w-full flex flex-col gap-y-3 text-neutral-200 items-center text-center sm:items-start sm:text-left"
                                >
                                    {description && (
                                        <p className="text-body w-full">
                                            {description}
                                        </p>
                                    )}
                                    {url && (
                                        <div className="w-full">
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-x-1 text-emerald-300 transition-colors hover:text-emerald-200"
                                            >
                                                View project
                                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};
