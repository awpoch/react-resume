import { FC, memo } from "react";

import { education, experience, SectionId, skills } from "../../../data/data";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import { SkillGroup } from "./Skills";
import TimelineItem from "./TimelineItem";

const Resume: FC = memo(() => {
    return (
        <Section
            className="bg-neutral-100 px-4 sm:px-6 md:px-8 py-10 sm:py-12"
            sectionId={SectionId.Resume}
        >
            <div className="flex flex-col divide-y-2 divide-neutral-300 min-w-0">
                <ResumeSection title="Education">
                    {education.map((item, index) => (
                        <TimelineItem
                            item={item}
                            key={`${item.title}-${index}`}
                        />
                    ))}
                </ResumeSection>
                <ResumeSection title="Work">
                    {experience.map((item, index) => (
                        <TimelineItem
                            item={item}
                            key={`${item.title}-${index}`}
                        />
                    ))}
                </ResumeSection>
                <ResumeSection title="Skills">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {skills.map((skillgroup, index) => (
                            <SkillGroup
                                key={`${skillgroup.name}-${index}`}
                                skillGroup={skillgroup}
                            />
                        ))}
                    </div>
                </ResumeSection>
            </div>
        </Section>
    );
});

Resume.displayName = "Resume";
export default Resume;
