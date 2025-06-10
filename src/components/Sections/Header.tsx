import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { FC, Fragment, useCallback, useEffect, useMemo, useState } from "react";

import { SectionId } from "../../data/data";
import { useNavObserver } from "../../hooks/useNavObserver";

export const headerID = "headerNav";

const Header: FC = () => {
    const [currentSection, setCurrentSection] = useState<SectionId | null>(
        null
    );
    const [mounted, setMounted] = useState(false);

    const navSections = useMemo(
        () => [
            SectionId.About,
            SectionId.Resume,
            SectionId.Projects,
            SectionId.Testimonials,
            SectionId.Video,
            SectionId.Contact,
        ],
        []
    );

    const intersectionHandler = useCallback((section: SectionId | null) => {
        setCurrentSection(section);
    }, []);

    // Wait until after component mounts to avoid missing sections
    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timeout);
    }, []);

    const selectorString = navSections
        .map((section) => `#section-${section}`)
        .join(",");
    useNavObserver(selectorString, intersectionHandler);

    return (
        <>
            <MobileNav
                currentSection={currentSection}
                navSections={navSections}
            />
            <DesktopNav
                currentSection={currentSection}
                navSections={navSections}
            />
        </>
    );
};

const DesktopNav: FC<{
    navSections: SectionId[];
    currentSection: SectionId | null;
}> = ({ navSections, currentSection }) => {
    return (
        <header
            id="site-header"
            className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
        >
            <nav className="flex justify-center gap-x-8">
                {navSections.map((section) => (
                    <NavItem
                        key={section}
                        section={section}
                        current={section === currentSection}
                    />
                ))}
            </nav>
        </header>
    );
};

const MobileNav: FC<{
    navSections: SectionId[];
    currentSection: SectionId | null;
}> = ({ navSections, currentSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

    return (
        <>
            <button
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
                onClick={toggleOpen}
            >
                <Bars3BottomRightIcon className="h-8 w-8 text-white transition-transform duration-300" />
            </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 sm:hidden"
                    onClose={toggleOpen}
                >
                    <div
                        className="fixed inset-0 bg-stone-900/75"
                        aria-hidden="true"
                    />

                    <div className="fixed inset-0 flex">
                        <TransitionChild
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <DialogPanel className="w-4/5 bg-stone-800 p-4">
                                <nav className="mt-5 flex flex-col gap-y-2">
                                    {navSections.map((section) => (
                                        <NavItem
                                            key={section}
                                            section={section}
                                            current={section === currentSection}
                                            onClick={toggleOpen}
                                        />
                                    ))}
                                </nav>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

const NavItem: FC<{
    section: SectionId;
    current: boolean;
    onClick?: () => void;
}> = ({ section, current, onClick }) => {
    const handleClick = useCallback(() => {
        if (section === SectionId.About) {
            // Scroll to the very top of the page
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            const element = document.getElementById(`section-${section}`);
            const header = document.getElementById("site-header"); // your header ID

            if (element) {
                const headerHeight = header?.offsetHeight || 0;
                const top =
                    element.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top,
                    behavior: "smooth",
                });
            }
        }

        if (onClick) onClick();
    }, [section, onClick]);

    return (
        <button
            onClick={handleClick}
            className={classNames(
                "transition-colors duration-300 font-bold first-letter:uppercase p-1.5 -m-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                current ? "text-orange-400" : "text-neutral-100",
                "hover:text-orange-400"
            )}
        >
            {section}
        </button>
    );
};

Header.displayName = "Header";
export default Header;
