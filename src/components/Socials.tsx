import { FC, memo } from "react";

import { socialLinks } from "../data/data";

const Socials: FC = memo(() => {
	return (
		<>
			{socialLinks.map(({ label, Icon, href }) => (
				<a
					aria-label={label}
					className="-m-1.5 p-1.5 rounded-md transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-2 sm:p-2 md:-m-3 md:p-3"
					href={href}
					key={label}
				>
					<Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 align-baseline" />
				</a>
			))}
		</>
	);
});

Socials.displayName = "Socials";
export default Socials;
