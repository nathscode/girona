"use client";

import { motion } from "motion/react";
import { useState } from "react";
import CustomButton from "../common/button";
type BuildType = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

type Props = {
	build: BuildType;
	index: number;
};

const BuildCard = ({ build, index }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative flex flex-col w-full p-10 bg-white group"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="absolute inset-0 border border-gray-200 pointer-events-none" />
			<div className="absolute inset-0 pointer-events-none">
				<svg className="w-full h-full">
					<motion.rect
						width="100%"
						height="100%"
						fill="none"
						stroke="black"
						strokeWidth="2"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: isHovered ? 1 : 0 }}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
						}}
						style={{ overflow: "visible" }}
					/>
				</svg>
			</div>

			{/* Card Content */}
			<div className="relative z-10 flex flex-col h-full">
				<div className="absolute -top-15 left-5 bg-gray-50 group-hover:bg-brand group-hover:text-white border border-gray-200 font-semibold flex flex-col justify-center items-center size-10 transition-all">
					<span>{`0${index}.`}</span>
				</div>
				<div className="flex flex-col justify-center items-center size-20 text-black mb-10 bg-gray-50 rounded-full">
					{build.icon}
				</div>
				<h1 className="text-xl font-bold my-5 font-unbounded">{build.title}</h1>
				<p className="text-neutral-600 text-base grow">{build.description}</p>
				<div className="mt-10">
					<CustomButton
						// @ts-ignore
						href={"/build"}
						name={"Learn More"}
						className="border-gray-300! text-black! text-sm"
					/>
				</div>
			</div>
		</div>
	);
};

export default BuildCard;
