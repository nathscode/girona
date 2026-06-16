import ServiceCard from "../card/service-card";
import MaxWidthWrapper from "../common/max-width-wrapper";
import TitleHeader from "../common/title-header";
import { Icons } from "../icons";

export interface ServiceType {
	title: string;
	icon: React.ReactNode;
	description: string;
}
const services: ServiceType[] = [
	{
		title: "Engineering Construction & Maintenance",
		icon: <Icons.build className="size-14 fill-white" />,
		description:
			"Site preparation, earthworks, concrete foundations, structural construction for buildings, bridges, roadways and civil infrastructure.",
	},
	{
		title: "Pipeline Construction & Maintenance",
		icon: <Icons.welding className="size-14 fill-white" />,
		description:
			"Pipeline construction, laying, inspection, pigging, corrosion control, and production facility maintenance services for the oil and gas sector.",
	},
	{
		title: "Procurement & Logistics",
		icon: <Icons.piping className="size-14 fill-white" />,
		description:
			"Strategic sourcing, procurement, supply, and logistics support for industrial, engineering, and energy projects.",
	},
	{
		title: "Electrical & Instrumentation",
		icon: <Icons.electrical className="size-14 fill-white" />,
		description:
			"Complete electrical systems (power distribution, lighting) and instrumentation and control works (SCADA, PLC systems, metering) tailored to energy and industrial clients.",
	},
	{
		title: "Project & Construction Management",
		icon: <Icons.lift className="size-14 fill-white" />,
		description:
			"Turnkey execution of projects under EPC (Engineering, Procurement, Construction) or EPCM models, with robust planning,procurement, and contract management.",
	},
	{
		title: "Facilities Maintenance",
		icon: <Icons.vest className="size-14 fill-white" />,
		description:
			"Ongoing maintenance and facility management services for industrial plants, ensuring operational reliability and extending asset life.",
	},
];
const ServiceSection = () => {
	return (
		<div className="flex flex-col w-full py-20 bg-accent">
			<MaxWidthWrapper>
				<TitleHeader
					subText="our services"
					heading="Comprehensive construction solutions"
					actionButton={true}
					actionText="View All Services"
					actionLink="/services"
				/>
				<div className="grid gap-5 row-gap-10 lg:grid-cols-3">
					{services.slice(0, 3).map((service, index) => (
						<ServiceCard key={`service-${index}`} service={service} />
					))}
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default ServiceSection;
