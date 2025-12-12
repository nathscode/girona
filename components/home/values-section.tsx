"use client";
import { useState } from "react";
import MaxWidthWrapper from "../common/max-width-wrapper";
import TitleHeader from "../common/title-header";

const ValueSection = () => {
	const [activeTab, setActiveTab] = useState<"vision" | "values">("vision");

	// Vision content
	const visionContent = {
		title: "Building today to transform tomorrow",
		description:
			"To be recognized as Nigeria's premier integrated energy infrastructure solutions provider, empowering communities with sustainable, innovative, and world-class services",
		items: [
			"Building inch by inch",
			"Building for the future",
			"Building to last",
			"Building together",
			"Building with trust",
			"Building safely",
		],
		image: "/images/about-3.jpeg",
	};

	// Core Values content
	const valuesContent = {
		title: "Integrated building design for enhanced efficiency",
		description:
			"We are guided by a set of core values that define our culture, drive our decisions, and shape our relationships with clients, partners, and communities.",
		items: [
			"Safety",
			"Integrity",
			"Excellence",
			"Innovation",
			"Teamwork",
			"Sustainability",
		],
		image: "/images/about-2.jpeg",
	};
	const activeContent = activeTab === "vision" ? visionContent : valuesContent;

	return (
		<div className="flex flex-col w-full py-20">
			<MaxWidthWrapper>
				<TitleHeader
					subText="vision & values"
					heading="We have a vision for the future of construction"
				/>
			</MaxWidthWrapper>

			<div className="grid lg:grid-cols-2">
				<div className="flex flex-col w-full">
					<img
						className="object-cover w-full h-80 sm:h-[550px]"
						src={activeContent.image}
						alt={
							activeTab === "vision"
								? "girona construction site"
								: "core values team"
						}
					/>
				</div>
				<div className="flex flex-col justify-center bg-accent">
					<div className="max-w-xl mb-6 p-10">
						<div className="flex justify-start items-start gap-5 w-full mb-5">
							<button
								onClick={() => setActiveTab("vision")}
								className={`flex flex-col justify-center items-center font-semibold px-8 py-3 rounded-full cursor-pointer transition-colors ${
									activeTab === "vision"
										? "bg-brand text-white"
										: "bg-white text-black hover:bg-brand hover:text-white"
								}`}
							>
								Our Vision
							</button>
							<button
								onClick={() => setActiveTab("values")}
								className={`flex flex-col justify-center items-center font-semibold px-8 py-3 rounded-full cursor-pointer transition-colors ${
									activeTab === "values"
										? "bg-brand text-white"
										: "bg-white text-black hover:bg-brand hover:text-white"
								}`}
							>
								Core Values
							</button>
						</div>
						<h2 className="text-xl text-black font-bold mb-4">
							{activeContent.title}
						</h2>
						<p className="text-base text-neutral-600 mb-6">
							{activeContent.description}
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 my-10">
							{activeContent.items.map((item, index) => (
								<div
									key={index}
									className={`flex justify-start items-center gap-5 ${
										index < activeContent.items.length - 2
											? "border-t border-gray-300 pt-3"
											: "border-t border-b border-gray-300 py-3"
									}`}
								>
									<span className="size-2 rounded-full bg-brand"></span>
									<span className="font-semibold">{item}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ValueSection;
