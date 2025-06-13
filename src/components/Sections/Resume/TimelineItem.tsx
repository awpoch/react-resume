import { FC, memo } from "react";

import type { TimelineItem as TimelineItemType } from "../../../data/types";

const TimelineItem: FC<{ item: TimelineItemType }> = memo(({ item }) => {
    const { title, date, location, content } = item;
    return (
        <div className="flex flex-col w-full pb-8 text-center last:pb-0 md:text-left min-w-0">
            <div className="flex flex-col w-full pb-4 min-w-0">
                <h2 className="text-base sm:text-lg md:text-xl font-bold break-words">
                    {title}
                </h2>
                <div className="table w-full">
                    <div className="table-row">
                        <div className="table-cell align-top w-[14rem] text-label font-medium italic break-words">
                            {location}
                        </div>
                        <div className="table-cell align-top w-[2rem] text-center">
                            •
                        </div>
                        <div className="table-cell align-top w-[12rem] text-label text-center break-words">
                            {date}
                        </div>
                    </div>
                </div>
            </div>
            {content}
        </div>
    );
});

TimelineItem.displayName = "TimelineItem";
export default TimelineItem;
