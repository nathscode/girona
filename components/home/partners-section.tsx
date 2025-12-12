"use client";
import { useEffect, useState } from "react";
import { PartnerLogo } from "../card/partner-card";
import MaxWidthWrapper from "../common/max-width-wrapper";
import { Separator } from "../ui/separator";

export interface PartnerType {
	alt: string;
	src: string;
}
const partners: PartnerType[] = [
	{ alt: "shell logo", src: "/images/partners/shell.png" },
	{ alt: "chevron logo", src: "/images/partners/chevron.png" },
	{ alt: "fhn logo", src: "/images/partners/fhn.png" },
	{ alt: "nnpc logo", src: "/images/partners/nnpc.png" },
	{ alt: "total logo", src: "/images/partners/total.png" },
	{ alt: "platform logo", src: "/images/partners/platform.png" },
];
const PartnerSection = () => {
	const [logoSize, setLogoSize] = useState({ width: 200, height: 40 });
	useEffect(() => {
		const updateLogoSize = () => {
			const width = window.innerWidth;

			if (width < 640) {
				// Mobile
				setLogoSize({ width: 60, height: 20 });
			} else if (width < 1024) {
				// Tablet
				setLogoSize({ width: 70, height: 30 });
			} else {
				// Desktop
				setLogoSize({ width: 100, height: 100 });
			}
		};

		updateLogoSize();
		window.addEventListener("resize", updateLogoSize);

		return () => window.removeEventListener("resize", updateLogoSize);
	}, []);

	return (
		<div className="flex flex-col w-full py-20 bg-accent">
			<MaxWidthWrapper>
				<div className="flex flex-wrap items-center justify-start w-full pb-10">
					<div className="flex items-center justify-start">
						<div className="h-0.5 w-8 bg-brand" />
						<h2 className="text-base font-semibold text-brand ml-5">
							our partners.
						</h2>
					</div>
				</div>

				<div className="flex flex-wrap  justify-between items-start sm:items-center  sm:justify-around">
					{partners.map((partner, index) => (
						<PartnerLogo
							key={`partner-${index}`}
							src={partner.src}
							alt={partner.alt}
							width={100}
							height={100}
							className="transition-opacity duration-300 hover:bg-white p-5"
						/>
					))}
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default PartnerSection;
