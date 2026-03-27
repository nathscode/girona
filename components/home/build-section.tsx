import BuildCard from "../card/build-card";
import MaxWidthWrapper from "../common/max-width-wrapper";
import { Icons } from "../icons";

export interface BuildType {
	title: string;
	icon: React.ReactNode;
	description: string;
}

const building: BuildType[] = [
	{
		title: "Commercial",
		icon: <Icons.build className="size-7 fill-white" />,
		description:
			"Focusing on medium to large-scale commercial construction projects, we work to create landmarks that make an impact.",
	},
	{
		title: "Industrial",
		icon: <Icons.build className="size-7 fill-white" />,
		description:
			"Focusing on medium to large-scale commercial construction projects, we work to create landmarks that make an impact.",
	},
	{
		title: "Local",
		icon: <Icons.build className="size-7 fill-white" />,
		description:
			"Focusing on medium to large-scale commercial construction projects, we work to create landmarks that make an impact.",
	},
];

const BuildSection = () => {
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
									Our Sector
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
								What We
								<br />
								<span style={{ color: "rgba(255,255,255,0.18)" }}>Build</span>
							</h2>
						</div>

						{/* Right */}
						<div className="flex flex-col gap-6 md:items-end">
							<p
								className="text-sm leading-relaxed max-w-xs md:text-right"
								style={{ color: "rgba(255,255,255,0.9)" }}
							>
								Three core sectors where we deliver precision engineering,
								structural excellence, and lasting infrastructure.
							</p>

							{/* Decorative stat row */}
							<div className="flex items-center gap-8">
								{[
									["7+", "Years"],
									["200+", "Projects"],
									["3+", "Sectors"],
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

					{/* ── Cards ── */}
					<div className="grid gap-4 md:gap-5 lg:grid-cols-3">
						{building.slice(0, 3).map((build, index) => (
							<BuildCard
								key={`build-${index}`}
								build={build}
								index={index + 1}
							/>
						))}
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
};

export default BuildSection;
