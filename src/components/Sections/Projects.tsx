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

const imageScaleTransition = {
    duration: 0.5,
    ease: "easeIn",
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

// 🔧 Predictive scroll calculation after layout settles
const scrollToItem = (index: number) => {
    setTimeout(() => {
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
    }, 200);
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
                "w-full bg-cover bg-center px-4 sm:px-6 lg:px-8",
                parallaxEnabled && "bg-fixed",
                !imageSrc && "bg-neutral-100"
            )}
            style={
                imageSrc ? { backgroundImage: `url(${resolveSrc})` } : undefined
            }
        >
            <div className="w-full mx-auto max-w-6xl bg-neutral-800 shadow-xl p-10 border-l border-r border-neutral-700 rounded-b-xl">
                <div className="flex flex-col gap-4">
                    <h2 className="self-center text-heading font-bold text-white mb-8 text-center">
                        Projects
                    </h2>

                    {portfolioItems.map((item, index) => (
                        <motion.div key={index} className="mb-6 last:mb-0">
                            <ExpandableItem
                                item={item}
                                index={index}
                                isOpen={openIndex === index}
                                scrollDirection={scrollDirection}
                                onClick={() => {
                                    const isClosing = openIndex === index;
                                    const newIndex = isClosing ? null : index;

                                    if (openIndex !== null && !isClosing) {
                                        const goingUp = index < openIndex;
                                        setOpenIndex(null);

                                        setTimeout(() => {
                                            scrollToItem(index);
                                            setTimeout(
                                                () => setOpenIndex(index),
                                                goingUp ? 400 : 100
                                            );
                                        }, 250);
                                        return;
                                    }

                                    setOpenIndex(newIndex);
                                    if (!isClosing) {
                                        setTimeout(
                                            () => scrollToItem(index),
                                            250
                                        );
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
			className="rounded-xl bg-gray-600 shadow-md overflow-hidden relative z-10"
			style={{ backgroundClip: "padding-box" }}
		>
			<motion.div
				layout
				transition={textTransition}
				onClick={onClick}
				className={classNames(
					"relative w-full cursor-pointer px-4 py-3 gap-4",
					isOpen
						? "grid grid-cols-1 sm:grid-cols-[auto,1fr] sm:auto-rows-min"
						: "grid grid-cols-[auto,1fr] items-center"
				)}
			>
				{/* Title */}
				<div className={classNames(isOpen ? "order-1 sm:order-2 w-full text-center sm:text-left" : "order-2")}>
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
					className={classNames(
						"relative transition-all bg-gray-600 flex justify-start",
						isOpen
							? "order-2 sm:order-1 w-full max-w-[90vw] sm:w-[300px] sm:row-span-2"
							: "order-1 w-[6rem] h-[6rem] shrink-0"
					)}
				>
					<motion.img
						src={typeof image === "string" ? image : image.src}
						alt={`${title} icon`}
						initial={false}
						animate={{ scale: isOpen ? 1 : 0.9 }}
						transition={imageScaleTransition}
						className={classNames("object-contain", isOpen ? "max-h-[40vh] w-full" : "h-full w-full")}
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
						className="order-3 w-full flex flex-col items-start text-left gap-y-2"
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
									className="w-full flex flex-col gap-y-2 text-gray-300 items-center text-center sm:items-start sm:text-left"
								>
									{description && <p className="text-body w-full">{description}</p>}
									{url && (
										<div className="w-full">
											<a
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-x-1 text-blue-400 hover:underline"
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
