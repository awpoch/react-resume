import classNames from "classnames";
import { FC, memo, useEffect, useMemo, useRef, useState } from "react";

import { isApple, isMobile } from "../../config";
import { SectionId, videoData } from "../../data/data";
import Section from "../Layout/Section";

const Video: FC = memo(() => {
    const { imageSrc, description } = videoData;
    const [parallaxEnabled, setParallaxEnabled] = useState(false);
    const [width, setWidth] = useState(0);

    const elementRef = useRef<HTMLDivElement | null>(null);

    const resolveSrc = useMemo(() => {
        if (!imageSrc) return undefined;
        return typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    }, [imageSrc]);

    useEffect(() => {
        setParallaxEnabled(!(isMobile && isApple));

        const handleResize = () => {
            if (elementRef.current) {
                setWidth(elementRef.current.offsetWidth);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // initial run
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const videoWrapperStyle = {
        width: `${width * 0.8}px`,
        height: `${width * 0.5625 * 0.8}px`,
    };

    return (
        <Section noPadding sectionId={SectionId.Video}>
            <div
                ref={elementRef}
                className={classNames(
                    "flex flex-col items-center justify-center w-full bg-center bg-cover px-4 py-8 lg:px-8",
                    parallaxEnabled && "bg-fixed",
                    !imageSrc && "bg-neutral-700"
                )}
                style={
                    imageSrc
                        ? { backgroundImage: `url(${resolveSrc})` }
                        : undefined
                }
            >
                <div className="text-center text-white font-bold pb-5 text-base sm:text-lg md:text-xl lg:text-2xl">
                    {description}
                </div>

                <div className="mt-8 mb-8" style={videoWrapperStyle}>
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/v0FnmTTD3ek"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
        </Section>
    );
});

Video.displayName = "Video";
export default Video;
