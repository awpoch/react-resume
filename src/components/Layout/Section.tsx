import classNames from "classnames";
import { FC, memo, PropsWithChildren, CSSProperties } from "react";
import { SectionId } from "../../data/data";

const Section: FC<
    PropsWithChildren<{
        sectionId: SectionId;
        sectionTitle?: string;
        noPadding?: boolean;
        className?: string;
        style?: CSSProperties;
    }>
> = memo(({ children, sectionId, noPadding = false, className, style }) => {
    return (
        <section
            id={`section-${sectionId}`} // ✅ Required for scroll tracking
            data-observe
            className={classNames(className, {
                "px-4 py-16 md:py-24 lg:px-8": !noPadding,
                "text-sm sm:text-base": !noPadding,
            })}
            style={style}
        >
            <div
                className={classNames("flex flex-col", {
                    "mx-auto max-w-screen-lg": !noPadding,
                })}
            >
                {children}
            </div>
        </section>
    );
});

Section.displayName = "Section";
export default Section;
