import { useEffect } from "react";
import { SectionId } from "../data/data";

export const useNavObserver = (
    selector: string = "[data-observe]",
    handler: (section: SectionId | null) => void
) => {
    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll<HTMLElement>(selector)
        );

        if (!elements.length) {
            console.warn("⚠️ No matching elements for selector:", selector);
            return;
        }

        let visibilityMap: Partial<Record<SectionId, number>> = {};

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const rawId = entry.target.getAttribute("id");
                    if (!rawId) return;

                    const id = rawId.replace("section-", "") as SectionId;
                    visibilityMap[id] = entry.intersectionRatio;
                });

                const sorted = Object.entries(visibilityMap).sort(
                    (a, b) => b[1] - a[1]
                );
                const mostVisible = sorted[0];

                handler((mostVisible?.[0] as SectionId) ?? null);
            },
            {
                root: null,
                threshold: buildThresholdList(),
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            visibilityMap = {};
        };
    }, [selector, handler]);
};

function buildThresholdList(steps = 100) {
    return Array.from({ length: steps + 1 }, (_, i) => i / steps);
}
