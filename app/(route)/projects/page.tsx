import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import TitleHeader from "@/components/common/title-header";
import Footer from "@/components/footer";
import PartnerSection from "@/components/home/partners-section";
import SecondaryNav from "@/components/home/secondary-nav";
import { Separator } from "@/components/ui/separator";
import {
	Calendar,
	CheckCircle2,
	Building2,
	MapPin,
	Award,
	CheckCircle,
	HeartHandshake,
	ShieldCheck,
	ArrowUpRight,
	Clock,
	ExternalLink,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Projects | Our Portfolio",
	description:
		"Explore our portfolio of successfully delivered construction and infrastructure projects across Nigeria.",
};

export interface ProjectType {
	id: number;
	title: string;
	client: string;
	date: string;
	completionDate: string;
	status: "completed" | "ongoing" | "upcoming";
	location?: string;
	category?: string;
	budget?: string;
}

const projects: ProjectType[] = [
	{
		id: 1,
		title: "Construction of Amiyi-Umuzu Road with Drainages, Ogbaru LGA",
		client: "Nigerian Building & Road Research Institute (NBBRI)",
		date: "April 2019",
		completionDate: "2019",
		status: "completed",
		location: "Ogbaru, Anambra State",
		category: "Road Construction",
	},
	{
		id: 2,
		title:
			"Renovation of Block of Flats — Institute Main Campus & Staff Quarters Block B7 & B21",
		client: "Petroleum Training Institute (PTI)",
		date: "June 2020",
		completionDate: "2020",
		status: "completed",
		category: "Civil Works",
	},
	{
		id: 3,
		title:
			"Procurement of Hollow Cathode Lamps for Agilent 240AA AAS Laboratory Instrument",
		client: "Petroleum Training Institute (PTI)",
		date: "June 2020",
		completionDate: "2020",
		status: "completed",
		category: "Equipment Supply",
	},
	{
		id: 4,
		title: "Construction of Nengi Road, Off Saipem, Yenagoa LGA",
		client: "Bayelsa State Government",
		date: "June 2021",
		completionDate: "2021",
		status: "completed",
		location: "Bayelsa State",
		category: "Road Construction",
	},
	{
		id: 5,
		title:
			"Supply & Installation of Digital/Solar Energy CCTV Camera — Main Campus",
		client: "Petroleum Training Institute (PTI)",
		date: "February 2023",
		completionDate: "2023",
		status: "completed",
		category: "Security Infrastructure",
	},
	{
		id: 6,
		title:
			"Emergency Solar Streetlight Installation — Udo Community & Environs, Warri North LGA",
		client: "Niger Delta Development Commission (NDDC)",
		date: "March 2023",
		completionDate: "2023",
		status: "completed",
		location: "Warri North, Delta State",
		category: "Solar Infrastructure",
	},
];

// ─── Stats Data ──────────────────────────────────────────
const stats = [
	{
		icon: CheckCircle2,
		value: projects.length,
		label: "Total Projects",
		sub: "Successfully delivered",
		color: "text-emerald-600",
		bg: "bg-emerald-50",
		border: "border-emerald-100",
	},
	{
		icon: Building2,
		value: new Set(projects.map((p) => p.client)).size,
		label: "Clients Served",
		sub: "Trusted partnerships",
		color: "text-brand",
		bg: "bg-brand/5",
		border: "border-brand/10",
	},
	{
		icon: Award,
		value: "100%",
		label: "Completion Rate",
		sub: "On-time delivery",
		color: "text-amber-600",
		bg: "bg-amber-50",
		border: "border-amber-100",
	},
];

// ─── Categories for filtering display ───────────────────
const categories = Array.from(
	new Set(projects.map((p) => p.category).filter(Boolean)),
);

// ─── Reusable Components ─────────────────────────────────

const StatCard = ({ stat }: { stat: (typeof stats)[0] }) => (
	<div className="group relative overflow-hidden border bg-white p-6  transition-all duration-300  hover:-translate-y-1">
		<div
			className={`absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full ${stat.bg} opacity-50 transition-transform duration-500 group-hover:scale-150`}
		/>
		<div className="relative">
			<div className="mb-4 flex items-center justify-between">
				<div
					className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}
				>
					<stat.icon className="h-6 w-6" />
				</div>
				<span className="text-3xl font-bold tracking-tight text-gray-900">
					{stat.value}
				</span>
			</div>
			<h3 className="text-base font-semibold text-gray-900">{stat.label}</h3>
			<p className="mt-1 text-sm text-gray-500">{stat.sub}</p>
		</div>
	</div>
);

const CategoryBadge = ({ category }: { category: string }) => (
	<span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
		{category}
	</span>
);

const StatusBadge = ({ status }: { status: ProjectType["status"] }) => {
	const styles = {
		completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
		ongoing: "bg-blue-50 text-blue-700 ring-blue-600/20",
		upcoming: "bg-amber-50 text-amber-700 ring-amber-600/20",
	};
	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}
		>
			<span
				className={`h-1.5 w-1.5 rounded-full ${status === "completed" ? "bg-emerald-600" : status === "ongoing" ? "bg-blue-600" : "bg-amber-600"}`}
			/>
			{status.charAt(0).toUpperCase() + status.slice(1)}
		</span>
	);
};

const TimelineConnector = () => (
	<div className="absolute left-8 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2">
		<div className="h-full w-full bg-linear-to-b from-brand via-gray-200 to-transparent" />
	</div>
);

const ProjectCard = ({
	project,
	index,
}: {
	project: ProjectType;
	index: number;
}) => {
	const isEven = index % 2 === 0;

	return (
		<div
			className={`relative flex flex-col gap-8 md:flex-row ${
				isEven ? "md:flex-row" : "md:flex-row-reverse"
			}`}
		>
			{/* Timeline Node */}
			<div className="absolute left-8 top-8 z-10 md:left-1/2 md:-translate-x-1/2">
				<div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-brand shadow-lg shadow-brand/20">
					<span className="text-[10px] font-bold text-white">
						{String(project.id).padStart(2, "0")}
					</span>
				</div>
			</div>

			{/* Content Card */}
			<div
				className={`w-full pl-20 md:w-[calc(50%-2rem)] ${
					isEven ? "md:pr-0" : "md:pl-0"
				}`}
			>
				<div className="group relative overflow-hidden border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand/20">
					{/* Subtle top accent */}
					<div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-brand/80 to-brand/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

					<div className="flex flex-wrap items-start justify-between gap-3 mb-4">
						<CategoryBadge category={project.category || "General"} />
						<StatusBadge status={project.status} />
					</div>

					<h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-brand mb-4">
						{project.title}
					</h3>

					<div className="space-y-2.5">
						<div className="flex items-center gap-2.5 text-sm text-gray-600">
							<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-50">
								<Building2 className="h-3.5 w-3.5 text-gray-500" />
							</div>
							<span className="font-medium">{project.client}</span>
						</div>

						{project.location && (
							<div className="flex items-center gap-2.5 text-sm text-gray-500">
								<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-50">
									<MapPin className="h-3.5 w-3.5 text-gray-500" />
								</div>
								<span>{project.location}</span>
							</div>
						)}

						<div className="flex items-center gap-2.5 text-sm text-gray-500">
							<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-50">
								<Calendar className="h-3.5 w-3.5 text-gray-500" />
							</div>
							<span>{project.date}</span>
						</div>
					</div>

					{/* Footer */}
					<div className="mt-5 flex items-center justify-between border-t border-gray-50 pt-4">
						<div className="flex items-center gap-1.5 text-xs text-gray-400">
							<Clock className="h-3 w-3" />
							<span>Completed {project.completionDate}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Spacer for alternating layout */}
			<div className="hidden md:block md:w-[calc(50%-2rem)]" />
		</div>
	);
};

const ValuePillar = ({
	icon: Icon,
	title,
	description,
}: {
	icon: React.ElementType;
	title: string;
	description: string;
}) => (
	<div className="group relative  border border-input bg-white p-8 text-center  transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
		<div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/5 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
			<Icon className="h-7 w-7" />
		</div>
		<h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
		<p className="text-sm leading-relaxed text-gray-500">{description}</p>
	</div>
);

// ─── Main Page Component ─────────────────────────────────

const ProjectPage = () => {
	return (
		<>
			<div className="flex min-h-screen flex-col items-start justify-start font-inter">
				<SecondaryNav title="Projects" />

				{/* Hero Stats Section */}
				<section className="w-full bg-linear-to-b from-gray-50/50 to-white py-16">
					<MaxWidthWrapper>
						<div className="mb-12 text-center">
							<TitleHeader
								subText="Our Portfolio"
								heading="Projects That Define Excellence"
							/>
							<p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
								From road construction to solar infrastructure, we deliver
								projects that transform communities and exceed client
								expectations.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
							{stats.map((stat) => (
								<StatCard key={stat.label} stat={stat} />
							))}
						</div>
					</MaxWidthWrapper>
				</section>

				{/* Projects Timeline */}
				<section className="w-full py-20">
					<MaxWidthWrapper>
						<div className="mb-16 text-center">
							<h2 className="text-2xl font-bold text-gray-900">
								Project Timeline
							</h2>
							<p className="mt-2 text-sm text-gray-500">
								A chronological view of our delivered works
							</p>
						</div>

						<div className="relative space-y-12 md:space-y-16">
							<TimelineConnector />

							{projects.map((project, index) => (
								<ProjectCard key={project.id} project={project} index={index} />
							))}
						</div>
					</MaxWidthWrapper>
				</section>

				{/* CTA Banner */}
				<section className="w-full bg-brand py-16">
					<MaxWidthWrapper>
						<div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
							<div>
								<h2 className="text-2xl font-bold text-white md:text-3xl">
									Ready to start your next project?
								</h2>
								<p className="mt-2 text-brand-100">
									Let us bring your vision to life with precision and
									excellence.
								</p>
							</div>
							<Link
								href="/contact"
								className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:scale-105"
							>
								Get in Touch <ArrowUpRight className="h-4 w-4" />
							</Link>
						</div>
					</MaxWidthWrapper>
				</section>

				{/* Value Pillars */}
				<section className="w-full bg-gray-50/50 py-20">
					<MaxWidthWrapper>
						<div className="mb-12 text-center">
							<h2 className="text-2xl font-bold text-gray-900">
								Why Partner With Us
							</h2>
							<p className="mt-2 text-sm text-gray-500">
								The principles that guide every project we undertake
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
							<ValuePillar
								icon={CheckCircle}
								title="Quality Assurance"
								description="All projects delivered with the highest quality standards, backed by rigorous testing and inspection protocols."
							/>
							<ValuePillar
								icon={HeartHandshake}
								title="Client Satisfaction"
								description="Building lasting relationships through transparent communication and exceeding expectations at every milestone."
							/>
							<ValuePillar
								icon={ShieldCheck}
								title="Safety First"
								description="Uncompromising commitment to safety in every project, ensuring zero incidents and full regulatory compliance."
							/>
						</div>
					</MaxWidthWrapper>
				</section>

				<PartnerSection />
			</div>
			<Footer />
		</>
	);
};

export default ProjectPage;
