import classNames from "classnames";
import {
    FC,
    memo,
    UIEventHandler,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { isApple, isMobile } from "../../config";
import { SectionId, testimonial } from "../../data/data";
import type { Testimonial } from "../../data/types";
import type { StaticImageData } from "next/image";
import useInterval from "../../hooks/useInterval";
import useWindow from "../../hooks/useWindow";
import QuoteIcon from "../Icon/QuoteIcon";
import Section from "../Layout/Section";
import Image from "next/image";

export const Testimonials: FC = memo(() => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [scrollValue, setScrollValue] = useState(0);
    const [parallaxEnabled, setParallaxEnabled] = useState(false);

    const itemWidth = useRef(0);
    const scrollContainer = useRef<HTMLDivElement>(null);

    const { width } = useWindow();
    const { imageSrc, testimonials } = testimonial;

    const resolveSrc = useMemo(() => {
        if (!imageSrc) return undefined;
        return typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    }, [imageSrc]);

    useEffect(() => {
        setParallaxEnabled(!(isMobile && isApple));
    }, []);

    useEffect(() => {
        itemWidth.current = scrollContainer.current
            ? scrollContainer.current.offsetWidth
            : 0;
    }, [width]);

    useEffect(() => {
        if (scrollContainer.current) {
            const newIndex = Math.round(
                scrollContainer.current.scrollLeft / itemWidth.current
            );
            setActiveIndex(newIndex);
        }
    }, [itemWidth, scrollValue]);

    const setTestimonial = useCallback(
        (index: number) => () => {
            if (scrollContainer !== null && scrollContainer.current !== null) {
                scrollContainer.current.scrollLeft = itemWidth.current * index;
            }
        },
        []
    );

    const next = useCallback(() => {
        if (activeIndex + 1 === testimonials.length) {
            setTestimonial(0)();
        } else {
            setTestimonial(activeIndex + 1)();
        }
    }, [activeIndex, setTestimonial, testimonials.length]);

    const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(
        (event) => {
            setScrollValue(event.currentTarget.scrollLeft);
        },
        []
    );

    useInterval(next, 10000);

    if (!testimonials.length) return null;

    return (
        <Section noPadding sectionId={SectionId.Testimonials}>
            <div
                className={classNames(
                    "flex w-full flex-col items-center justify-center bg-cover bg-center px-4 py-8 lg:px-8",
                    parallaxEnabled && "bg-fixed",
                    { "bg-neutral-700": !imageSrc }
                )}
                style={
                    imageSrc
                        ? { backgroundImage: `url(${resolveSrc})` }
                        : undefined
                }
            >
                <h2 className="z-10 text-white text-heading font-bold text-center mb-8">
                    What people are saying
                </h2>

                <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
                    <div className="flex flex-col items-center gap-y-6 rounded-xl bg-cyan-800/60 p-6 shadow-lg overflow-visible">
                        <div
                            className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto overflow-y-visible scroll-smooth"
                            onScroll={handleScroll}
                            ref={scrollContainer}
                        >
                            {testimonials.map((testimonial, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <TestimonialCard
                                        isActive={isActive}
                                        key={`${testimonial.name}-${index}`}
                                        testimonial={testimonial}
                                    />
                                );
                            })}
                        </div>
                        <div className="flex gap-x-4">
                            {[...Array(testimonials.length)].map((_, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button
                                        className={classNames(
                                            "h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4",
                                            isActive
                                                ? "scale-100 opacity-100"
                                                : "scale-75 opacity-60"
                                        )}
                                        disabled={isActive}
                                        key={`select-button-${index}`}
                                        onClick={setTestimonial(index)}
                                    ></button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
});

export const TestimonialCard: FC<{
    testimonial: {
        text: string;
        name: string;
        image?: string | StaticImageData;
    };
    isActive: boolean;
}> = memo(({ testimonial: { text, name, image }, isActive }) => {
    const [imageError, setImageError] = useState(false);
    const hideImage = imageError || image === undefined;

    return (
        <div
            className={classNames(
                "flex w-full shrink-0 snap-start snap-always p-2 transition-opacity duration-1000",
                isActive ? "opacity-100" : "opacity-0",
                "items-start gap-x-6"
            )}
        >
            {/* Image + Opening Quote */}
            <div
                className={classNames(
                    "flex items-start gap-x-4 shrink-0",
                    hideImage && "justify-center"
                )}
            >
                {!hideImage && (
                    <div className="relative rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                        <Image
                            src={typeof image === "string" ? image : image}
                            alt={`Photo of ${name}`}
                            fill
                            className="object-cover rounded-full"
                            onError={() => setImageError(true)}
                        />
                    </div>
                )}
            </div>

            {/* Quote Text Block */}
            <div
                className={classNames(
                    "flex flex-col gap-y-4 text-white",
                    hideImage && "items-center text-center"
                )}
            >
                {/* Combined Quote Container */}
                <div className="flex items-start gap-x-3 sm:gap-x-4 md:gap-x-5 max-w-full justify-start">
                    {/* Opening Quote */}
                    <QuoteIcon className="h-6 w-6 text-white stroke-black flex-shrink-0" />

                    {/* Quote Text */}
                    <p className="text-body italic font-medium">{text}</p>

                    {/* Closing Quote */}
                    <QuoteIcon className="h-6 w-6 text-white stroke-black rotate-180 flex-shrink-0 self-end" />
                </div>

                {/* Name */}
                <p className="text-label lg:text-lg italic">-- {name}</p>
            </div>
        </div>
    );
});
