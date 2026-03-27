"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const services = [
	{
		id: "01",
		title: "Civil Works",
		description:
			"Site preparation, earthworks, concrete foundations, structural construction for buildings, bridges, roadways and civil infrastructure.",
		image: "/images/civil.jpg",
		accent: "#C8A96E",
		keywords: ["Earthworks", "Foundations", "Infrastructure"],
	},
	{
		id: "02",
		title: "Structural Fabrication",
		description:
			"Fabrication and erection of steel structures, modular units, and specialty frames.",
		image: "/images/drilling.jpg",
		accent: "#7E9CAE",
		keywords: ["Steel Structures", "Modular Units", "Erection"],
	},
	{
		id: "03",
		title: "Mechanical & Piping",
		description:
			"Design and installation of mechanical systems and pressure piping for industrial facilities, including fabrication of skids, heat exchangers, and storage tanks.",
		image: "/images/pipeline.png",
		accent: "#B07E8A",
		keywords: ["Piping Systems", "Heat Exchangers", "Storage Tanks"],
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.18,
		},
	},
};

const columnVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.97 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.85,
			ease: "easeInOut",
		},
	},
};

function ServiceCard({
	service,
	index,
	isHovered,
	isAnyHovered,
	onHover,
	onLeave,
}: {
	service: (typeof services)[0];
	index: number;
	isHovered: boolean;
	isAnyHovered: boolean;
	onHover: () => void;
	onLeave: () => void;
}) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const offsets: [string, string] =
		index === 1 ? ["-5%", "5%"] : index === 0 ? ["-10%", "10%"] : ["-8%", "8%"];
	const imageY = useTransform(scrollYProgress, [0, 1], offsets);

	// Width logic: hovered = 80%, others split remaining 20% equally (10% each)
	const flexValue = isAnyHovered
		? isHovered
			? "0 0 80%"
			: "0 0 10%"
		: "1 1 0%";

	return (
		<motion.div
			ref={ref}
			// @ts-ignore
			variants={columnVariants}
			className="relative overflow-hidden cursor-pointer"
			style={{
				minHeight: "100svh",
				flex: flexValue,
				transition: "flex 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
			}}
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
		>
			{/* Parallax image */}
			<motion.div
				className="absolute inset-0 w-full"
				style={{ y: imageY, height: "115%", top: "-7.5%" }}
			>
				<img
					src={service.image}
					alt={service.title}
					className="w-full h-full object-cover"
					style={{
						transition: "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
						transform: isHovered ? "scale(1.05)" : "scale(1)",
					}}
				/>
			</motion.div>

			{/* Gradient overlay base */}
			<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20 z-10" />

			{/* Hover color wash */}
			<motion.div
				className="absolute inset-0 z-10"
				style={{ backgroundColor: service.accent }}
				animate={{ opacity: isHovered ? 0.18 : 0 }}
				transition={{ duration: 0.5 }}
			/>

			{/* Vertical divider line */}
			{index < services.length - 1 && (
				<div className="absolute top-0 right-0 w-px h-full bg-white/10 z-20" />
			)}

			{/* Content */}
			<div
				className="relative z-20 h-full flex flex-col justify-between p-8 md:p-10"
				style={{ minHeight: "100svh" }}
			>
				{/* Top: number + label */}
				<div className="flex items-center gap-3">
					<span
						className="font-mono text-xs tracking-[0.25em] uppercase whitespace-nowrap"
						style={{ color: service.accent }}
					>
						{service.id}
					</span>
					<motion.div
						className="h-px flex-1 max-w-12"
						style={{ backgroundColor: service.accent, originX: 0 }}
						animate={{ scaleX: isHovered ? 1 : 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					/>
				</div>

				{/* Bottom: title + desc + keywords */}
				<div className="space-y-5">
					{/* Keywords */}
					<motion.div
						className="flex flex-wrap gap-2"
						animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
						transition={{ duration: 0.35, ease: "easeOut" }}
					>
						{service.keywords.map((kw) => (
							<span
								key={kw}
								className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 border rounded-full whitespace-nowrap"
								style={{
									borderColor: `${service.accent}66`,
									color: service.accent,
									backgroundColor: `${service.accent}18`,
								}}
							>
								{kw}
							</span>
						))}
					</motion.div>

					{/* Title */}
					<h2
						className="text-white font-bold leading-none"
						style={{
							fontFamily: "'Syne', sans-serif",
							fontSize: "clamp(1.6rem, 2.8vw, 2.8rem)",
							letterSpacing: "-0.02em",
						}}
					>
						{service.title}
					</h2>

					{/* Accent line */}
					<motion.div
						className="h-0.5"
						style={{ backgroundColor: service.accent }}
						animate={{ width: isHovered ? "4rem" : "3rem" }}
						transition={{ duration: 0.4 }}
					/>

					{/* Description */}
					<motion.p
						className="text-white/85 leading-relaxed max-w-sm"
						style={{
							fontFamily: "'DM Sans', sans-serif",
							fontSize: "clamp(0.8rem, 1vw, 0.92rem)",
						}}
						animate={{ opacity: isHovered ? 1 : 0.8 }}
						transition={{ duration: 0.4 }}
					>
						{service.description}
					</motion.p>

					{/* CTA */}
					<motion.div
						className="flex items-center gap-2"
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{ duration: 0.3, delay: 0.05 }}
					>
						<span
							className="text-xs font-mono tracking-[0.15em] uppercase whitespace-nowrap"
							style={{ color: service.accent }}
						>
							Learn More
						</span>
						<motion.svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							style={{ color: service.accent }}
							animate={{ x: isHovered ? 4 : 0 }}
							transition={{ duration: 0.3 }}
						>
							<path
								d="M3 8h10M9 4l4 4-4 4"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</motion.svg>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

export default function ServicesSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<>
			{/* Google Fonts */}
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>

			<section
				ref={sectionRef}
				className="w-full bg-neutral-950"
				style={{ fontFamily: "'DM Sans', sans-serif" }}
			>
				{/* Header */}
				<motion.div
					className="px-8 md:px-12 pt-20 pb-12 border-b border-white/8"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-screen-2xl mx-auto">
						<div>
							<p className="text-xs font-mono tracking-[0.3em] uppercase text-white/30 mb-3">
								What We Build
							</p>
							<h1
								className="text-white"
								style={{
									fontFamily: "'Syne', sans-serif",
									fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
									fontWeight: 800,
									letterSpacing: "-0.03em",
									lineHeight: 1,
								}}
							>
								Our Services
							</h1>
						</div>
						<p className="text-white/75 max-w-xs text-sm leading-relaxed">
							End-to-end engineering and construction capabilities across the
							full project lifecycle.
						</p>
					</div>
				</motion.div>

				{/* Columns */}
				<motion.div
					className="flex flex-col md:flex-row w-full"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{services.map((service, i) => (
						<ServiceCard
							key={service.id}
							service={service}
							index={i}
							isHovered={hoveredIndex === i}
							isAnyHovered={hoveredIndex !== null}
							onHover={() => setHoveredIndex(i)}
							onLeave={() => setHoveredIndex(null)}
						/>
					))}
				</motion.div>
			</section>
		</>
	);
}
