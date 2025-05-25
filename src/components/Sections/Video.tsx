import classNames from "classnames";
import { FC, memo, MutableRefObject, useEffect, useMemo, useRef, useState } from "react";

import { isApple, isMobile } from "../../config";
import { SectionId, videoData } from "../../data/data";
import Section from "../Layout/Section";

const Video: FC = memo(() => {
	const { imageSrc, description } = videoData;
	const [parallaxEnabled, setParallaxEnabled] = useState(false);

	const [width, setWidth] = useState(0);
	const elementRef = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

	const resolveSrc = useMemo(() => {
		if (!imageSrc) return undefined;
		return typeof imageSrc === "string" ? imageSrc : imageSrc.src;
	}, [imageSrc]);

	useEffect(() => {
		setParallaxEnabled(!(isMobile && isApple));
		function handleResize() {
			if (elementRef.current) setWidth(elementRef.current.offsetWidth);
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Section noPadding sectionId={SectionId.Video}>
			<div
				className={classNames(
					"flex flex-col w-full items-center justify-center bg-cover bg-center px-4 py-8 md:py-12 lg:px-8",
					parallaxEnabled && "bg-fixed",
					{ "bg-neutral-700": !imageSrc }
				)}
				ref={elementRef}
				style={imageSrc ? { backgroundImage: `url(${resolveSrc}` } : undefined}
			>
				<div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold pb-5 text-center">
					{description}
				</div>
				<div
					style={{
						width: width * 0.8,
						height: width * 0.5625 * 0.8,
						marginTop: "40px",
						marginBottom: "40px",
					}}
				>
					<iframe
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share"
						allowFullScreen
						frameBorder="0"
						height="100%"
						src="https://www.youtube.com/embed/v0FnmTTD3ek"
						title="YouTube video player"
						width="100%"
					/>
				</div>
			</div>
		</Section>
	);
});

Video.displayName = "Video";
export default Video;
