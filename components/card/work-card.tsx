"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { WorkType } from "../home/works-section";

type Props = {
	work: WorkType;
	index: number;
	isLarge?: boolean;
};

const WorkCard = ({ work, index, isLarge = false }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	const overlayOpacity = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0.7, 0.4, 0.65],
	);

	const indexLabel = String(index + 1).padStart(2, "0");

	return (
		<motion.div
			ref={ref}
			className="relative w-full overflow-hidden cursor-pointer group"
			style={{ height: isLarge ? "680px" : "480px" }}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
				delay: index * 0.1,
			}}
			whileHover="hover"
		>
			{/* Parallax image container */}
			<motion.div
				className="absolute inset-0 w-full"
				style={{ y: imageY, height: "116%", top: "-8%" }}
			>
				<Image
					src={work.image}
					alt={work.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</motion.div>

			{/* Base dark overlay */}
			<motion.div
				className="absolute inset-0 z-10"
				style={{
					opacity: overlayOpacity,
					background:
						"linear-gradient(160deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)",
				}}
			/>

			{/* Hover reveal overlay — brand tint */}
			<motion.div
				className="absolute inset-0 z-10"
				style={{
					background:
						"linear-gradient(135deg, rgba(180,130,60,0.15) 0%, rgba(0,0,0,0) 60%)",
				}}
				initial={{ opacity: 0 }}
				variants={{ hover: { opacity: 1 } }}
				transition={{ duration: 0.5 }}
			/>

			{/* Top-left: index number */}
			<div className="absolute top-7 left-8 z-20 flex items-center gap-3">
				<span className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
					{indexLabel}
				</span>
				<motion.div
					className="h-px bg-white/30"
					initial={{ width: 0 }}
					variants={{ hover: { width: "40px" } }}
					transition={{ duration: 0.35 }}
				/>
			</div>

			{/* Top-right: tags */}
			<div className="absolute top-7 right-8 z-20 flex items-center gap-2">
				{work.tags.map((tag, i) => (
					<motion.span
						key={`tag-${i}`}
						className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1 border border-white/20 rounded-full text-white/50"
						initial={{ opacity: 0, x: 10 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
						variants={{
							hover: {
								borderColor: "rgba(255,255,255,0.5)",
								color: "rgba(255,255,255,0.9)",
							},
						}}
					>
						{tag}
					</motion.span>
				))}
			</div>

			{/* Bottom content */}
			<div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex flex-col gap-4">
				{/* Expanding reveal bar */}
				<motion.div
					className="h-px w-full origin-left"
					style={{
						background:
							"linear-gradient(90deg, rgba(200,169,110,0.8), rgba(200,169,110,0))",
					}}
					initial={{ scaleX: 0 }}
					variants={{ hover: { scaleX: 1 } }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				/>

				{/* Title */}
				<div className="overflow-hidden">
					<motion.h2
						className="capitalize leading-tight text-white"
						style={{
							fontFamily: "'Syne', sans-serif",
							fontWeight: 700,
							fontSize: isLarge
								? "clamp(1.6rem, 2.5vw, 2.4rem)"
								: "clamp(1.2rem, 1.8vw, 1.7rem)",
							letterSpacing: "-0.02em",
						}}
						initial={{ y: "100%" }}
						whileInView={{ y: "0%" }}
						viewport={{ once: true }}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: index * 0.1 + 0.15,
						}}
					>
						{work.title}
					</motion.h2>
				</div>

				{/* CTA row */}
				<motion.div
					className="flex items-center justify-between"
					initial={{ opacity: 0 }}
					variants={{ hover: { opacity: 1 } }}
					transition={{ duration: 0.3, delay: 0.1 }}
				>
					<span
						className="text-[11px] font-mono tracking-[0.25em] uppercase"
						style={{ color: "#C8A96E" }}
					>
						View Project
					</span>
					<motion.div
						className="flex items-center justify-center w-10 h-10 border border-white/20 rounded-full"
						variants={{
							hover: {
								borderColor: "rgba(200,169,110,0.6)",
								backgroundColor: "rgba(200,169,110,0.1)",
							},
						}}
					>
						<motion.svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							variants={{ hover: { x: 2, y: -2 } }}
							transition={{ duration: 0.25 }}
						>
							<path
								d="M2 12L12 2M12 2H5M12 2v7"
								stroke="#C8A96E"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</motion.svg>
					</motion.div>
				</motion.div>
			</div>

			{/* Corner accent */}
			<motion.div
				className="absolute bottom-0 left-0 z-20 w-0 h-0"
				style={{
					borderStyle: "solid",
					borderWidth: "0 0 0 0",
					borderColor: "transparent transparent transparent #C8A96E",
				}}
				variants={{
					hover: {
						borderWidth: "0 0 48px 48px",
					},
				}}
				transition={{ duration: 0.35, ease: "easeOut" }}
			/>
		</motion.div>
	);
};

export default WorkCard;
