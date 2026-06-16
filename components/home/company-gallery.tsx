"use client";
import { useState } from "react";
import MaxWidthWrapper from "../common/max-width-wrapper";
import { Icons } from "../icons";

export interface GalleryImage {
	id: string | number;
	thumbnail: string;
	full: string;
	title: string;
}

const galleryImages: GalleryImage[] = [
	{
		id: 1,
		thumbnail: "/images/machines/machine1.png",
		full: "/images/machines/machine1.png",
		title: "Crane machine",
	},
	{
		id: 2,
		thumbnail: "/images/machines/machine2.png",
		full: "/images/machines/machine2.png",
		title: "Bulldozer",
	},
	{
		id: 3,
		thumbnail: "/images/machines/machine3.png",
		full: "/images/machines/machine3.png",
		title: "Swambuggy",
	},
	{
		id: 4,
		thumbnail: "/images/machines/machine4.png",
		full: "/images/machines/machine4.png",
		title: "Crane",
	},
	{
		id: 5,
		thumbnail: "/images/machines/machine5.png",
		full: "/images/machines/machine5.png",
		title: "Crane",
	},
	{
		id: 6,
		thumbnail: "/images/machines/machine6.png",
		full: "/images/machines/machine6.png",
		title: "Swambuggy",
	},
];

const GallerySection = () => {
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);

	const openLightbox = (image: GalleryImage) => {
		setSelectedImage(image);
		setIsLightboxOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
		setSelectedImage(null);
		document.body.style.overflow = "unset";
	};

	const nextImage = () => {
		if (!selectedImage) return;
		const currentIndex = galleryImages.findIndex(
			(img) => img.id === selectedImage.id,
		);
		const nextIndex = (currentIndex + 1) % galleryImages.length;
		setSelectedImage(galleryImages[nextIndex]);
	};

	const prevImage = () => {
		if (!selectedImage) return;
		const currentIndex = galleryImages.findIndex(
			(img) => img.id === selectedImage.id,
		);
		const prevIndex =
			(currentIndex - 1 + galleryImages.length) % galleryImages.length;
		setSelectedImage(galleryImages[prevIndex]);
	};

	// Handle keyboard navigation
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") closeLightbox();
		if (e.key === "ArrowRight") nextImage();
		if (e.key === "ArrowLeft") prevImage();
	};

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap');
      `}</style>

			<section
				className="w-full py-24 md:py-32"
				style={{
					background: "rgb(10,10,10)",
					fontFamily: "'DM Sans', sans-serif",
				}}
			>
				<MaxWidthWrapper>
					{/* ── Header ── */}
					<div className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 items-end">
						{/* Left */}
						<div className="flex flex-col gap-5">
							<div className="flex items-center gap-4">
								<span
									className="block w-6 h-px"
									style={{ background: "#EC3136" }}
								/>
								<span
									className="font-mono text-[11px] tracking-[0.35em] uppercase"
									style={{ color: "rgba(234,49,54,0.7)" }}
								>
									Project Gallery
								</span>
							</div>

							<h2
								className="leading-none"
								style={{
									fontFamily: "'Syne', sans-serif",
									fontWeight: 800,
									fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
									letterSpacing: "-0.04em",
									color: "white",
								}}
							>
								Our
								<br />
								<span style={{ color: "rgba(255,255,255,0.18)" }}>
									Machinery
								</span>
							</h2>
						</div>

						{/* Right */}
						<div className="flex flex-col gap-6 md:items-end">
							<p
								className="text-sm leading-relaxed max-w-xs md:text-right"
								style={{ color: "rgba(255,255,255,0.9)" }}
							>
								Browse through our earth tough machinery ready for any tasks.
							</p>

							{/* Decorative stat row */}
							<div className="flex items-center gap-8">
								{[
									["7+", "Years"],
									["40+", "Projects"],
									["10+", "Sectors"],
								].map(([num, label]) => (
									<div key={label} className="flex flex-col items-center gap-1">
										<span
											style={{
												fontFamily: "'Syne', sans-serif",
												fontWeight: 700,
												fontSize: "1.4rem",
												color: "#EC3136",
												letterSpacing: "-0.02em",
											}}
										>
											{num}
										</span>
										<span
											className="font-mono text-[10px] tracking-[0.25em] uppercase"
											style={{ color: "rgba(255,255,255,0.5)" }}
										>
											{label}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* ── Divider ── */}
					<div
						className="w-full h-px mb-14"
						style={{ background: "rgba(255,255,255,0.06)" }}
					/>

					{/* ── Gallery Grid ── */}
					<div className="grid gap-4 md:gap-5 lg:grid-cols-3">
						{galleryImages.map((image, index) => (
							<div
								key={image.id}
								className="group relative overflow-hidden cursor-pointer"
								onClick={() => openLightbox(image)}
							>
								{/* Image Container */}
								<div className="relative aspect-4/3 overflow-hidden">
									<img
										src={image.thumbnail}
										alt={image.title}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									{/* Content Overlay */}
									<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
										<span
											className="inline-block text-[10px] font-mono tracking-[0.25em] uppercase mb-2"
											style={{ color: "#EC3136" }}
										></span>
										<h3
											className="text-white text-lg font-bold"
											style={{ fontFamily: "'Syne', sans-serif" }}
										>
											{image.title}
										</h3>
									</div>

									{/* Icon */}
									<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="w-10 h-10 rounded-full bg-[#EC3136] flex items-center justify-center">
											<Icons.build className="w-5 h-5 fill-white" />
										</div>
									</div>
								</div>

								{/* Index Number */}
								<div className="absolute top-4 left-4">
									<span
										className="text-4xl font-bold opacity-20"
										style={{
											fontFamily: "'Syne', sans-serif",
											color: "white",
										}}
									>
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>
							</div>
						))}
					</div>
				</MaxWidthWrapper>
			</section>

			{/* Lightbox Modal */}
			{isLightboxOpen && selectedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center"
					style={{
						background: "rgba(0,0,0,0.95)",
						backdropFilter: "blur(10px)",
					}}
					onClick={closeLightbox}
					onKeyDown={handleKeyDown}
					tabIndex={0}
				>
					{/* Close Button */}
					<button
						className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
						onClick={closeLightbox}
					>
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					{/* Navigation Buttons */}
					<button
						className="absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
						onClick={(e) => {
							e.stopPropagation();
							prevImage();
						}}
					>
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						className="absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
						onClick={(e) => {
							e.stopPropagation();
							nextImage();
						}}
					>
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					{/* Main Image */}
					<div
						className="relative max-w-5xl w-full mx-4"
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={selectedImage.full}
							alt={selectedImage.title}
							className="w-full h-auto rounded-lg shadow-2xl"
						/>

						{/* Image Info */}
						<div className="absolute bottom-6 left-0 right-0 text-center">
							<span
								className="inline-block text-[10px] font-mono tracking-[0.25em] uppercase mb-2"
								style={{ color: "#EC3136" }}
							></span>
							<h3
								className="text-white text-xl font-bold"
								style={{ fontFamily: "'Syne', sans-serif" }}
							>
								{selectedImage.title}
							</h3>
						</div>

						{/* Counter */}
						<div className="absolute top-6 left-6">
							<span className="text-white/60 text-sm font-mono">
								{galleryImages.findIndex((img) => img.id === selectedImage.id) +
									1}{" "}
								/ {galleryImages.length}
							</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default GallerySection;
