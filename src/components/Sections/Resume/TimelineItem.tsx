import { FC, memo } from "react";

import type { TimelineItem as TimelineItemType } from "../../../data/types";

const TimelineItem: FC<{ item: TimelineItemType }> = memo(({ item }) => {
	const { title, date, location, content } = item;
	return (
		<div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
			<div className="flex flex-col pb-4">
				<h2 className="text-base sm:text-lg md:text-xl font-bold">{title}</h2>
				<div className="flex items-center justify-center gap-x-2 md:justify-start">
					<span className="flex-1 text-label font-medium italic sm:flex-none">{location}</span>
					<span>•</span>
					<span className="flex-1 text-label sm:flex-none">{date}</span>
				</div>
			</div>
			{content}
		</div>
	);
});

TimelineItem.displayName = "TimelineItem";
export default TimelineItem;
