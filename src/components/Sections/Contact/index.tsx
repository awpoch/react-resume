import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { FC, memo } from "react";

import { contact, SectionId } from "../../../data/data";
import { ContactType, ContactValue } from "../../../data/types";
import FacebookIcon from "../../Icon/FacebookIcon";
import GithubIcon from "../../Icon/GithubIcon";
import InstagramIcon from "../../Icon/InstagramIcon";
import LinkedInIcon from "../../Icon/LinkedInIcon";
import TwitterIcon from "../../Icon/TwitterIcon";
import Section from "../../Layout/Section";

const ContactValueMap: Record<ContactType, ContactValue> = {
	[ContactType.Email]: { Icon: EnvelopeIcon, srLabel: "Email" },
	[ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: "Phone" },
	[ContactType.Location]: { Icon: MapPinIcon, srLabel: "Location" },
	[ContactType.Github]: { Icon: GithubIcon, srLabel: "Github" },
	[ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: "LinkedIn" },
	[ContactType.Facebook]: { Icon: FacebookIcon, srLabel: "Facebook" },
	[ContactType.Twitter]: { Icon: TwitterIcon, srLabel: "Twitter" },
	[ContactType.Instagram]: { Icon: InstagramIcon, srLabel: "Instagram" },
};

const Contact: FC = memo(() => {
	const { headerText, description, items } = contact;
	return (
		<Section
			className="bg-neutral-800 pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20"
			sectionId={SectionId.Contact}
		>
			<div className="flex flex-col items-center text-center gap-y-6 px-4 w-full max-w-screen-md mx-auto">
				<div className="flex flex-col items-center gap-4">
					<EnvelopeIcon className="h-14 w-14 text-white" />
					<h2 className="text-heading font-bold text-white">{headerText}</h2>
				</div>

				<div className="text-body leading-6 text-neutral-300">{description}</div>

				<div className="flex justify-center">
					<dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2 items-start">
						{items.map(({ type, text, href }) => {
							const { Icon, srLabel } = ContactValueMap[type];
							return (
								<div key={srLabel}>
									<dt className="sr-only">{srLabel}</dt>
									<dd className="flex items-center">
										<a
											className={classNames(
												"-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500",
												{ "hover:text-white": href }
											)}
											href={href}
											target="_blank"
											rel="noreferrer"
										>
											<Icon
												aria-hidden="true"
												className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5"
											/>
											<span className="ml-3 text-sm sm:text-base">{text}</span>
										</a>
									</dd>
								</div>
							);
						})}
					</dl>
				</div>
			</div>
		</Section>
	);
});



Contact.displayName = "Contact";
export default Contact;
