"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { WorkType } from "../home/works-section";

type Props = {
	work: WorkType;
};

const WorkCard = ({ work }: Props) => {
	return (
		<div className="flex flex-col w-full bg-white">
			<motion.div
				className="relative flex flex-col w-full h-96"
				whileHover="hover"
				initial="initial"
				animate="initial"
			>
				<div className="absolute inset-0 bg-black/40 text-white h-full w-full transition-colors duration-200">
					<div className="flex flex-col justify-end items-start h-full w-full p-8">
						<h2 className="my-4 font-unbounded capitalize text-xl font-bold leading-none tracking-tight text-white sm:text-xl">
							{work.title}
						</h2>
						<div className="flex justify-start items-center gap-2 w-full">
							{work.tags.map((tag, index) => (
								<span
									key={`tag-${index}`}
									className="flex flex-col items-center justify-start border border-white rounded-full px-4 py-1 capitalize text-sm font-semibold text-white"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
				<Image
					height={400}
					width={400}
					className="object-cover w-full h-full"
					src={work.image}
					alt={work.title}
				/>
				<motion.div
					className="flex flex-col w-full bg-brand"
					variants={{
						initial: { height: "0.5rem" },
						hover: { height: "15rem" },
					}}
					transition={{
						duration: 0.4,
						ease: "easeInOut",
					}}
				/>
			</motion.div>
		</div>
	);
};

export default WorkCard;
