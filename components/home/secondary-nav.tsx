"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import MaxWidthWrapper from "../common/max-width-wrapper";
import { Icons } from "../icons";
import CustomButton from "../common/button";

const NAV_LINKS = [
	{ name: "About", href: "/about" },
	{ name: "Service", href: "/services" },
	{ name: "Projects", href: "/projects" },
	{ name: "Careers", href: "/careers" },
	{ name: "HSE", href: "/hse" },
	{ name: "Contact", href: "/contact" },
];

type Props = {
	title: string;
};
export default function SecondaryNav({ title }: Props) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="relative h-[70vh] w-full overflow-hidden bg-black text-white">
			{/* --------------------------------------------------
          NAVIGATION OVERLAY
      -------------------------------------------------- */}
			<nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
				{/* Logo */}
				<Link
					href="/"
					className="text-2xl font-bold tracking-tighter text-white"
				>
					<Icons.logo2 className="size-10" />
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

			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 h-full w-full">
					<img
						src={"/images/banner/2.jpeg"}
						alt={"girona background image"}
						className="h-full w-full object-cover"
					/>

					<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />
				</div>
			</div>

			{/* --------------------------------------------------
          HERO TEXT CONTENT (Static overlay)
      -------------------------------------------------- */}
			<div className="relative z-10 flex h-full flex-col items-start justify-end px-4 text-left pb-20 sm:pb-30">
				<MaxWidthWrapper>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="max-w-5xl"
					>
						<h1 className="mb-6 text-3xl font-unbounded font-extrabold sm:leading-20 tracking-tight text-white  md:text-6xl">
							{title}
						</h1>
					</motion.div>
					<div className="h-px w-full bg-white/20 my-5"></div>
				</MaxWidthWrapper>
			</div>
			<div className="absolute bottom-12 z-10 left-0 pl-5 flex w-full">
				<MaxWidthWrapper>
					<div className="flex justify-between items-center w-full">
						<div className="justify-start">
							<div className="flex justify-start items-center font-semibold gap-2">
								<Link
									href={"/"}
									className="text-slate-50 text-sm hover:text-brand transition-all duration-300"
								>
									Home
								</Link>
								<span className="text-brand text-xs">&#9830;</span>
								<span className="text-sm capitalize">{title}</span>
							</div>
						</div>
						<div className="justify-end hidden sm:flex">
							<CustomButton
								href="/projects"
								name="View Our Work"
								className="text-sm"
							/>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
		</div>
	);
}
