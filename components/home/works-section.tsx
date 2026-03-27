import WorkCard from "../card/work-card";
import MaxWidthWrapper from "../common/max-width-wrapper";

export interface WorkType {
	title: string;
	image: string;
	tags: string[];
}

const works: WorkType[] = [
	{
		title: "complex building at ekpan express",
		image: "/images/works/1.jpeg",
		tags: ["commercial"],
	},
	{
		title: "Ring light installation at refinery",
		image: "/images/works/2.jpeg",
		tags: ["commercial", "civil"],
	},
	{
		title: "complex building at ekpan express",
		image: "/images/works/1.jpeg",
		tags: ["commercial"],
	},
	{
		title: "Ring light installation at refinery",
		image: "/images/works/2.jpeg",
		tags: ["commercial", "civil"],
	},
];

const WorkSection = () => {
	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
      `}</style>

			<section
				className="w-full bg-neutral-950 py-24 md:py-32"
				style={{ fontFamily: "'DM Sans', sans-serif" }}
			>
				<MaxWidthWrapper>
					{/* ── Header ── */}
					<div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
						{/* Left */}
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-4">
								<span className="block w-8 h-px bg-amber-400/60" />
								<span className="font-mono text-[11px] tracking-[0.35em] uppercase text-white/35">
									Recent Work
								</span>
							</div>
							<h2
								className="text-white leading-none"
								style={{
									fontFamily: "'Syne', sans-serif",
									fontWeight: 800,
									fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
									letterSpacing: "-0.04em",
								}}
							>
								Featured
								<br />
								<span className="text-white/20">Projects</span>
							</h2>
						</div>

						{/* Right */}
						<div className="flex flex-col items-start md:items-end gap-4 max-w-xs">
							<p className="text-white/35 text-sm leading-relaxed text-left md:text-right">
								A selection of landmark engineering and construction projects
								delivered across Nigeria.
							</p>
							<a
								href="/projects"
								className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-amber-400/80 hover:text-amber-400 transition-colors duration-200"
							>
								All Projects
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								>
									<path
										d="M2 12L12 2M12 2H5M12 2v7"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>

					{/* ── Grid ── */}
					{/*
            Layout: asymmetric editorial grid
            Row 1: [large card spanning full] or [large | small stacked]
            Row 2: [small | large]
          */}
					<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
						{/* Card 0 — hero: spans 7 cols, tall */}
						<div className="md:col-span-7">
							<WorkCard work={works[0]} index={0} isLarge />
						</div>

						{/* Card 1 + 2 stacked — spans 5 cols */}
						<div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
							<WorkCard work={works[1]} index={1} />
							<WorkCard work={works[2]} index={2} />
						</div>

						{/* Card 3 — full width bottom */}
						<div className="md:col-span-12">
							<WorkCard work={works[3]} index={3} isLarge={false} />
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
};

export default WorkSection;
