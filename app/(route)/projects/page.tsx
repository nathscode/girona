import ServiceCard from "@/components/card/service-card";
import WorkCard from "@/components/card/work-card";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import TitleHeader from "@/components/common/title-header";
import Footer from "@/components/footer";
import PartnerSection from "@/components/home/partners-section";
import SecondaryNav from "@/components/home/secondary-nav";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import {
	CheckCircle,
	Heart,
	HeartHandshake,
	ShieldCheck,
	Zap,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Projects",
};

export interface WorkType {
	title: string;
	image: string;
	tags: string[];
}
const works: WorkType[] = [
	{
		title: "Procurement of materials for construction",
		image: "/images/works/1.jpg",
		tags: ["commercial"],
	},
	{
		title: "Gas pipeline installation at refinery",
		image: "/images/works/2.jpg",
		tags: ["commercial", "civil"],
	},
	{
		title: "Pipeline construction and maintenance",
		image: "/images/works/3.jpg",
		tags: ["commercial"],
	},
	{
		title: "Installation of green industrial tanks",
		image: "/images/works/4.jpg",
		tags: ["commercial", "civil"],
	},
	{
		title: "Maintenance and installation of industrial metal pipe fittings",
		image: "/images/works/5.jpg",
		tags: ["commercial", "civil"],
	},
	{
		title: "Pipeline Construction and Maintenance",
		image: "/images/works/6.jpg",
		tags: ["commercial", "civil"],
	},
	{
		title: "Supply of heavy duty industrial equipment",
		image: "/images/works/7.jpg",
		tags: ["commercial", "civil"],
	},
];
const ProjectPage = () => {
	return (
		<>
			<div className="flex flex-col font-inter min-h-screen items-start justify-start">
				<SecondaryNav title="Projects" />
				<div className="flex flex-col w-full py-10">
					<MaxWidthWrapper>
						<TitleHeader subText="our work" heading="Project showcase" />
						<div className="flex flex-col px-5">
							<div className="flex flex-col w-full sm:py-40">
								<div className="grid gap-5 row-gap-10 lg:grid-cols-2">
									{works.map((work, index) => (
										<WorkCard key={`work-${index}`} work={work} index={index} />
									))}
								</div>
							</div>
						</div>
					</MaxWidthWrapper>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProjectPage;
