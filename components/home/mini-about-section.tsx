import React from "react";
import MaxWidthWrapper from "../common/max-width-wrapper";

type Props = {};

const MiniAboutSection = (props: Props) => {
	return (
		<div className="flex flex-col w-full  bg-[#172645]">
			<MaxWidthWrapper className="py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					<div className="lg:col-span-4">
						<div className="h-0.5 w-16 rounded-full bg-brand mb-6"></div>
						<h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
							Our Commitment Goes Beyond Oil & Gas to Green Energy Solutions.
						</h2>
					</div>
					<div className="lg:col-span-8">
						<h5 className="text-white font-semibold border-b border-primary-foreground/20 pb-4 mb-4 text-lg">
							Girona Limited is a leading indigenous oil services company,
							providing high standard solutions to the upstream segment of
							Nigeria's oil and gas industry.
						</h5>
						<p className="text-white leading-relaxed text-[15px]">
							At Girona LTD, we work with speed and dedication while maintaining
							the quality and precision we are known for. We bring out the best
							in one another through continuous improvement, innovation, and
							teamwork. Guided by a carefully developed and comprehensive
							execution plan, we deliver infrastructure solutions with
							excellence as the foundation of our operations.
						</p>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default MiniAboutSection;
