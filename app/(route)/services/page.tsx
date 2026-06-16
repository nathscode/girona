import ServiceCard from "@/components/card/service-card";
import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import TitleHeader from "@/components/common/title-header";
import Footer from "@/components/footer";
import SecondaryNav from "@/components/home/secondary-nav";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
};

export interface ServiceType {
	title: string;
	icon: React.ReactNode;
	description: string;
}

const services: ServiceType[] = [
	{
		title: "Engineering Construction & Maintenance",
		icon: <Icons.civilMech className="size-14 fill-white" />,
		description:
			"Comprehensive engineering solutions including civil, mechanical, and electrical construction, installation, maintenance, and facility upgrades.",
	},
	{
		title: "Pipeline Construction & Maintenance",
		icon: <Icons.piping className="size-14 fill-white" />,
		description:
			"Pipeline construction, laying, inspection, pigging, corrosion control, and production facility maintenance services for the oil and gas sector.",
	},
	{
		title: "Procurement & Logistics",
		icon: <Icons.procurement className="size-14 fill-white" />,
		description:
			"Strategic sourcing, procurement, supply, and logistics support for industrial, engineering, and energy projects.",
	},
	{
		title: "Maritime Operations & Equipment Supply",
		icon: <Icons.oil className="size-14 fill-white" />,
		description:
			"Supply of marine vessels and equipment including houseboats, tugboats, barges, crew boats, and related marine assets.",
	},
	{
		title: "Heavy Equipment Leasing",
		icon: <Icons.heavyEquipment className="size-14 fill-white" />,
		description:
			"Leasing and maintenance of excavators, cranes, forklifts, bulldozers, swamp buggies, payloaders, and other heavy-duty equipment.",
	},
	{
		title: "Metal Fabrication",
		icon: <Icons.welding className="size-14 fill-white" />,
		description:
			"Design and fabrication of industrial structures, storage tanks, and custom metal components for various applications.",
	},
	{
		title: "Technical Manpower Supply",
		icon: <Icons.vest className="size-14 fill-white" />,
		description:
			"Provision of qualified local and foreign technical personnel for engineering, construction, operations, and maintenance projects.",
	},
	{
		title: "Document Management Services",
		icon: <Icons.build className="size-14 fill-white" />,
		description:
			"Development and implementation of document management systems in line with ISO standards and industry best practices.",
	},
	{
		title: "Corporate Governance Consultancy",
		icon: <Icons.electrical className="size-14 fill-white" />,
		description:
			"Contractor prequalification, contractor management systems, due diligence services, and regulatory verification support.",
	},
];

const ServicePage = () => {
	return (
		<>
			<div className="flex flex-col font-inter min-h-screen items-start justify-start">
				<SecondaryNav title="Services" />
				<div className="flex flex-col w-full py-10">
					<MaxWidthWrapper>
						<TitleHeader
							subText="what we do"
							heading="We offer the best construction solutions"
						/>
						<div className="flex flex-col px-5">
							<div className="flex flex-wrap sm:flex-nowrap gap-10 justify-start w-full sm:pl-70">
								<div className="w-ful sm:w-3/5">
									<p className="text-neutral-500 text-sm sm:text-lg">
										Focusing on medium to large-scale commercial construction
										projects, we work with both investors and developers to
										create landmarks that make an impact.
										<br />
										<br />
										Our clients cover a wide range of sectors including local,
										state, territory and governments, retail and sales,
										hospitality, commercial, health and aged care, industrial
										and manufacturing, civil works and defense, as well as
										medium-density residential, in Nigeria.
									</p>
								</div>
								<div className="w-ful sm:w-2/5">
									<MaxWidthWrapper>
										<div className="flex flex-col justify-start w-full">
											{/* stat */}
											<div className="flex flex-col items-start justify-start">
												<div className="justify-start">
													<h1 className=" font-unbounded font-extrabold sm:leading-20 tracking-tight text-brand  text-7xl">
														7+
													</h1>
												</div>
												<div className="justify-start">
													<h2 className="text-base font-bold leading-5 uppercase">
														years experience working
													</h2>
												</div>
											</div>
											{/* End of stat */}
											<Separator className="my-5" />
											{/* stat */}
											<div className="flex flex-col items-start justify-start">
												<div className="justify-start">
													<h1 className=" font-unbounded font-extrabold sm:leading-20 tracking-tight text-brand  text-7xl">
														98%
													</h1>
												</div>
												<div className="justify-start">
													<h2 className="text-base font-bold leading-5 uppercase">
														happy clients
													</h2>
												</div>
											</div>
											{/* End of stat */}
										</div>
									</MaxWidthWrapper>
								</div>
							</div>
							<div className="flex flex-col w-full py-40">
								<div className="grid gap-5 row-gap-10 lg:grid-cols-3">
									{services.map((service, index) => (
										<ServiceCard
											key={`service-${index}`}
											service={service}
											className={
												"bg-accent! hover:bg-white! hover:border hover:border-gray-200"
											}
										/>
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

export default ServicePage;
