"use client";

import { cn } from "@/lib/utils";
import { Menu, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "../icons";
import CustomButton from "../common/button";
import MaxWidthWrapper from "../common/max-width-wrapper";
import CompanyLogo from "../common/company-logo";

const SLIDES = [
	{
		id: 1,
		src: "/images/banner/1.png",
		alt: "Crane sky line",
		title: "Oil Servicing",
		subtitle:
			"We provide support for oil field operations, including equipment maintenance and on-site production support.",
	},
	{
		id: 2,
		src: "/images/banner/2.png",
		alt: "Bulldozer",
		title: "Maritime operations",
		subtitle:
			"We handle offshore logistics, including vessel support, personnel transport, and coordination of sea-based oil and gas activities.",
	},
	{
		id: 3,
		src: "/images/banner/3.png",
		alt: "Stories building",
		title: "Engineering and drilling services",
		subtitle:
			"We delivers drilling and engineering solutions for oil exploration, including well drilling, site preparation, civil works and operational support.",
	},
	{
		id: 4,
		src: "/images/banner/4.png",
		alt: "Stories building",
		title: "Heavy machinery leasing services",
		subtitle:
			"We supply heavy industrial equipment for construction and oil field projects on a rental basis.",
	},
];

const NAV_LINKS = [
	{ name: "About", href: "/about" },
	{ name: "Service", href: "/services" },
	{ name: "Projects", href: "/projects" },
	{ name: "Careers", href: "/careers" },
	{ name: "HSE", href: "/hse" },
	{ name: "Contact", href: "/contact" },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function HeroSection() {
	const [index, setIndex] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// 2. Auto-play Logic
	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % SLIDES.length);
		}, SLIDE_DURATION);
		return () => clearInterval(timer);
	}, []);

	const currentSlide = SLIDES[index];

	return (
		<div className="relative h-screen w-full overflow-hidden bg-black text-white">
			{/* --------------------------------------------------
          NAVIGATION OVERLAY
      -------------------------------------------------- */}
			<nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
				{/* Logo */}
				<Link
					href="/"
					className="text-2xl font-bold tracking-tighter text-white"
				>
					<CompanyLogo className="size-12" />
				</Link>

				{/* Desktop Nav */}
				<div className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-base font-medium text-white/80 transition-colors hover:text-white hover:underline decoration-brand decoration-2 underline-offset-4"
						>
							{link.name}
						</Link>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-white"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? <X /> : <Menu />}
				</button>
			</nav>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute left-0 top-0 z-40 w-full bg-black/95 px-6 pb-8 pt-24 md:hidden"
					>
						<div className="flex flex-col gap-6 text-center">
							{NAV_LINKS.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-xl font-medium text-white/90"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* --------------------------------------------------
          BACKGROUND IMAGE SLIDER
      -------------------------------------------------- */}
			<div className="absolute inset-0 z-0">
				<AnimatePresence mode="popLayout">
					<motion.div
						key={currentSlide.id}
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.5, ease: "easeInOut" }} // Crossfade speed
						className="absolute inset-0 h-full w-full"
					>
						{/* The Image Itself - with the "Zoom In" effect */}
						<motion.img
							src={currentSlide.src}
							alt={currentSlide.alt}
							className="h-full w-full object-cover"
							initial={{ scale: 1 }}
							animate={{ scale: 1.15 }} // Zoom in target
							transition={{
								duration: SLIDE_DURATION / 1000 + 1, // slightly longer than slide duration
								ease: "linear",
							}}
						/>

						{/* Dark Overlay gradient for readability */}
						<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />
					</motion.div>
				</AnimatePresence>
			</div>

			{/* --------------------------------------------------
          HERO TEXT CONTENT (Dynamic overlay)
      -------------------------------------------------- */}
			<div className="relative z-10 flex h-full flex-col items-start justify-end px-4 text-left pb-40">
				<MaxWidthWrapper>
					<AnimatePresence mode="wait">
						<motion.div
							key={currentSlide.id}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="max-w-5xl"
						>
							<h1 className="mb-4 text-4xl font-unbounded font-extrabold sm:leading-20 tracking-tight text-white md:text-7xl">
								{currentSlide.title}
							</h1>
							<p className="text-lg md:text-2xl text-white/80 font-medium max-w-2xl">
								{currentSlide.subtitle}
							</p>
						</motion.div>
					</AnimatePresence>
					<div className="h-px w-full bg-white/20 my-5"></div>
				</MaxWidthWrapper>
			</div>

			<MaxWidthWrapper>
				<div className="absolute bottom-12 left-6 z-20 md:left-30">
					<div className="flex gap-4">
						{SLIDES.map((_, i) => (
							<button
								key={i}
								onClick={() => setIndex(i)}
								className="group relative h-12 w-4 flex items-center justify-center"
								aria-label={`Go to slide ${i + 1}`}
							>
								{/* The inactive small dot */}
								<div
									className={cn(
										"h-2 w-2 rounded-full transition-all duration-500",
										i === index
											? "bg-transparent"
											: "bg-white/40 group-hover:bg-white",
									)}
								/>

								{/* The active ring + inner dot */}
								{i === index && (
									<motion.div
										layoutId="active-dot"
										className="absolute inset-0 flex items-center justify-center"
									>
										<div className="h-full w-0.5 bg-brand/20 absolute top-0 left-1/2 -translate-x-1/2 rounded-full">
											<motion.div
												className="w-full bg-brand rounded-full"
												initial={{ height: "0%" }}
												animate={{ height: "100%" }}
												transition={{
													duration: SLIDE_DURATION / 1000,
													ease: "linear",
													repeat: 0,
												}}
											/>
										</div>
									</motion.div>
								)}
							</button>
						))}
					</div>
				</div>
				{/* Scroll Indicator (Bottom Center) */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
				>
					<span className="text-[10px] uppercase tracking-widest text-slate-400">
						Scroll
					</span>
					<div className="h-12 w-px bg-linear-to-b from-slate-400 to-transparent"></div>
				</motion.div>
				<div className="absolute bottom-12 z-20 flex md:right-30 w-md">
					<div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-2">
						<div className="flex justify-start">
							<div className="justify-start">
								<Icons.shield className="size-10 fill-green-500" />
							</div>
							<div className="flex flex-col justify-start ms-4">
								<div className="flex justify-start items-center gap-x-2">
									<Star className="size-3 fill-brand text-brand" />
									<Star className="size-3 fill-brand text-brand" />
									<Star className="size-3 fill-brand text-brand" />
									<Star className="size-3 fill-brand text-brand" />
									<Star className="size-3 fill-brand text-brand" />
								</div>
								<h2 className="text-sm text-neutral-300 font-inter font-semibold mt-1">
									Trusted by 100+ Clients
								</h2>
							</div>
						</div>
						<div className="justify-end">
							<CustomButton
								href="/projects"
								name="Explore Our Projects"
								className="text-xs"
							/>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
}
