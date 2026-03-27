"use client";

import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { BuildType } from "../home/build-section";

type Props = {
	build: BuildType;
	index: number;
};

const BuildCard = ({ build, index }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	// Mouse tracking for spotlight effect
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
	const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = cardRef.current?.getBoundingClientRect();
		if (!rect) return;
		mouseX.set(e.clientX - rect.left);
		mouseY.set(e.clientY - rect.top);
	};

	const indexLabel = String(index).padStart(2, "0");

	// Gradient spotlight follows mouse
	const background = useTransform(
		[springX, springY],
		([x, y]: number[]) =>
			`radial-gradient(320px circle at ${x}px ${y}px, rgba(234,49,54,0.08) 0%, transparent 70%)`,
	);

	return (
		<motion.div
			ref={cardRef}
			className="relative flex flex-col w-full overflow-hidden cursor-default"
			style={{ background: "rgb(14,14,14)" }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onMouseMove={handleMouseMove}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{
				duration: 0.75,
				ease: [0.22, 1, 0.36, 1],
				delay: (index - 1) * 0.12,
			}}
		>
			{/* Spotlight layer */}
			<motion.div
				className="absolute inset-0 z-0 pointer-events-none"
				style={{ background }}
			/>

			{/* Border — animated on hover */}
			<div className="absolute inset-0 z-0 pointer-events-none border border-white/6" />
			<motion.div
				className="absolute inset-0 z-0 pointer-events-none border"
				animate={{
					borderColor: isHovered ? "rgba(234,49,54,0.25)" : "rgba(234,49,54,0)",
				}}
				transition={{ duration: 0.45 }}
			/>

			{/* Top bar — accent line that draws in */}
			<motion.div
				className="absolute top-0 left-0 h-0.5 z-10"
				style={{ background: "linear-gradient(90deg, #EC3136, #EC3136)" }}
				animate={{ width: isHovered ? "100%" : "0%" }}
				transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
			/>

			{/* Card body */}
			<div className="relative z-10 flex flex-col h-full p-8 md:p-10 gap-8">
				{/* Header row */}
				<div className="flex items-start justify-between">
					{/* Icon container */}
					<motion.div
						className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10"
						animate={{
							borderColor: isHovered
								? "rgba(234,49, 54,0.3)"
								: "rgba(255,255,255,0.1)",
							backgroundColor: isHovered
								? "rgba(234,49,54,0.08)"
								: "transparent",
						}}
						transition={{ duration: 0.4 }}
					>
						<motion.div
							animate={{ scale: isHovered ? 1.1 : 1 }}
							transition={{ duration: 0.35, ease: "easeOut" }}
							className="text-white"
							style={{
								filter: isHovered ? "brightness(1.4)" : "brightness(0.7)",
							}}
						>
							{/* Re-render icon with white fill for dark bg */}
							<div
								style={{
									color: isHovered ? "#EC3136" : "rgba(255,255,255,0.5)",
									transition: "color 0.4s",
								}}
							>
								{build.icon}
							</div>
						</motion.div>
					</motion.div>

					{/* Index */}
					<div className="flex flex-col items-end gap-1">
						<span
							className="font-mono text-[11px] tracking-[0.3em] uppercase"
							style={{
								color: isHovered ? "#EC3136" : "rgba(255,255,255,0.5)",
								transition: "color 0.4s",
							}}
						>
							{indexLabel}
						</span>
						<motion.div
							className="h-px"
							style={{ background: "#EC3136" }}
							animate={{ width: isHovered ? "32px" : "12px" }}
							transition={{ duration: 0.4 }}
						/>
					</div>
				</div>

				{/* Title */}
				<div className="flex flex-col gap-3">
					<h3
						className="text-white leading-tight"
						style={{
							fontFamily: "'Syne', sans-serif",
							fontWeight: 700,
							fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
							letterSpacing: "-0.02em",
						}}
					>
						{build.title}
					</h3>
					{/* Accent rule */}
					<motion.div
						className="h-px origin-left"
						style={{
							background: "linear-gradient(90deg, #EC313680, transparent)",
						}}
						animate={{
							scaleX: isHovered ? 1 : 0.3,
							opacity: isHovered ? 1 : 0.3,
						}}
						transition={{ duration: 0.4 }}
					/>
				</div>

				{/* Description */}
				<p
					className="leading-relaxed grow"
					style={{
						fontFamily: "'DM Sans', sans-serif",
						fontSize: "0.88rem",
						color: isHovered
							? "rgba(255,255,255,0.6)"
							: "rgba(255,255,255,0.35)",
						transition: "color 0.4s",
					}}
				>
					{build.description}
				</p>

				{/* CTA */}
				<motion.a
					href="/build"
					className="flex items-center gap-3 w-fit group/cta"
					animate={{ opacity: isHovered ? 1 : 0.4 }}
					transition={{ duration: 0.3 }}
				>
					<span
						className="font-mono text-[11px] tracking-[0.25em] uppercase"
						style={{ color: "#EC3136" }}
					>
						Learn More
					</span>
					<motion.div
						className="flex items-center justify-center w-7 h-7 rounded-full border"
						animate={{
							borderColor: isHovered
								? "rgba(234,49,54,0.5)"
								: "rgba(234,49,54,0.2)",
							backgroundColor: isHovered
								? "rgba(234,49,54,0.1)"
								: "transparent",
						}}
					>
						<motion.svg
							width="11"
							height="11"
							viewBox="0 0 14 14"
							fill="none"
							animate={{ x: isHovered ? 1.5 : 0, y: isHovered ? -1.5 : 0 }}
							transition={{ duration: 0.25 }}
						>
							<path
								d="M2 12L12 2M12 2H5M12 2v7"
								stroke="#EC3136"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</motion.svg>
					</motion.div>
				</motion.a>
			</div>

			{/* Bottom corner fill on hover */}
			<motion.div
				className="absolute bottom-0 right-0 z-0 pointer-events-none"
				style={{
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderColor: "transparent",
					borderBottomColor: "rgba(234,49,54,0.07)",
					borderRightColor: "rgba(234,49,54,0.07)",
				}}
				animate={{
					borderBottomWidth: isHovered ? "120px" : "0px",
					borderRightWidth: isHovered ? "120px" : "0px",
					borderTopWidth: 0,
					borderLeftWidth: 0,
				}}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			/>
		</motion.div>
	);
};

export default BuildCard;
