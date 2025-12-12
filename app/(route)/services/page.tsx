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
		title: "Civil Works",
		icon: <Icons.build className="size-14 fill-white" />,
		description:
			"Site preparation, earthworks, concrete foundations, structural construction for buildings, bridges, roadways and civil infrastructure.",
	},
	{
		title: "Structural Fabrication",
		icon: <Icons.welding className="size-14 fill-white" />,
		description:
			"Fabrication and erection of steel structures, modular units, and specialty frames.",
	},
	{
		title: "Mechanical & Piping",
		icon: <Icons.piping className="size-14 fill-white" />,
		description:
			"Design and installation of mechanical systems and pressure piping for industrial facilities, including fabrication of skids, heat exchangers, and storage tanks",
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
