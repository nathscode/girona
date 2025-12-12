"use client";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useState } from "react";

type Props = {
	className?: string;
	miniClassName?: string;
	name: string;
	href: string;
};

const CustomButton = ({ className, miniClassName, name, href }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const containerVariants: Variants = {
		hover: {
			y: -2, // The whole button moves up slightly
			transition: { duration: 0.3, ease: "easeOut" },
		},
		tap: { y: 0 },
	};

	// 3D Rotation Text Effect
	const textVariants: Variants = {
		initial: {
			rotateX: 0,
			y: 0,
			opacity: 1,
		},
		hover: {
			rotateX: 90, // Rotate out of view
			y: -5,
			opacity: 0,
			transition: { duration: 0.2 }, // Quick exit
		},
	};

	// The "Hidden" text that rotates in
	const hiddenTextVariants: Variants = {
		initial: {
			rotateX: -90,
			y: 5,
			opacity: 0,
		},
		hover: {
			rotateX: 0,
			y: 0,
			opacity: 1,
			transition: { duration: 0.2, delay: 0.1 }, // Enters just after previous leaves
		},
	};

	// Animation variants for the arrow icon
	const arrowVariants: Variants = {
		hover: {
			rotate: 45,
			x: 2,
			y: -2,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 10,
			},
		},
	};

	const circleVariants: Variants = {
		hover: {
			scale: 1.15,
			transition: { duration: 0.3, ease: "easeOut" },
		},
	};

	return (
		<div className="flex flex-col items-start justify-start ">
			<motion.a
				href={href}
				className="relative group cursor-pointer"
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				initial="initial"
				whileHover="hover"
				whileTap="tap"
			>
				{/* The Button Container */}
				<motion.div
					className={`
            relative inline-block px-6 py-2.5 font-semibold overflow-hidden
            border-white text-white rounded-full
            border ${className}
          `}
					variants={containerVariants}
				>
					{/* We duplicate the text to create the 3D swap effect */}

					{/* 1. The Text Visible Initially */}
					<motion.span
						className="block"
						variants={textVariants}
						style={{ transformOrigin: "bottom center" }}
					>
						{name}
					</motion.span>

					{/* 2. The Text that Swaps In */}
					<motion.span
						className="absolute  inset-0 flex items-center justify-center"
						variants={hiddenTextVariants}
						style={{ transformOrigin: "top center" }}
					>
						{name}
					</motion.span>
				</motion.div>

				{/* The Circle Arrow */}
				<motion.div
					className={`absolute top-px -right-5 rounded-full bg-brand p-2 ${miniClassName}`}
					variants={circleVariants}
				>
					<motion.div variants={arrowVariants}>
						<ArrowUpRight className="size-5 text-white" />
					</motion.div>
				</motion.div>
			</motion.a>
		</div>
	);
};

export default CustomButton;
