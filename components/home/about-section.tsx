import Image from "next/image";
import CustomButton from "../common/button";
import MaxWidthWrapper from "../common/max-width-wrapper";
import TitleHeader from "../common/title-header";

const AboutSection = () => {
	return (
		<div className="flex flex-col w-full">
			<MaxWidthWrapper>
				<TitleHeader
					subText="who we are"
					heading="Leading Global Builder and Developer"
				/>
			</MaxWidthWrapper>
			<div className="grid gap-5 row-gap-10 lg:grid-cols-2">
				<div className="flex flex-col w-full">
					<Image
						className="object-cover w-full h-80  sm:h-[550px] hover:scale-105 transition-all duration-300"
						src={"/images/surface.jpg"}
						height={320}
						width={320}
						alt="girona construction site"
					/>
				</div>
				<div className="flex flex-col justify-center px-5 sm:pl-10 mb-10 sm:mb-0">
					<div className="max-w-xl mb-6">
						<h2 className="text-xl text-black font-bold mb-4">
							Engineering Excellence across multiple sectors
						</h2>
						<p className="text-base text-neutral-600">
							Girona Limited is a wholly Nigerian-owned engineering and project
							services company established in 2018. We provide innovative and
							reliable solutions across engineering, construction, procurement,
							logistics, manpower supply, maritime operations, and equipment
							leasing.
							<br />
							<br />
							Driven by a commitment to quality, safety, and customer
							satisfaction, we partner with government agencies, oil and gas
							companies, power and energy organizations, and industrial clients
							to deliver projects efficiently and professionally. Our team of
							experienced professionals combines industry expertise with best
							business practices to provide services that meet and exceed client
							expectations.
						</p>
						<div className="my-4">
							<CustomButton
								href="/about"
								name="More About Us"
								className="border-gray-300! text-black! text-sm"
								miniClassName="bg-black!"
							/>
						</div>
						<div className="h-px w-full bg-black/10 my-5"></div>
						<div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
							{/* stat */}
							<div className="flex items-center justify-start">
								<div className="justify-start">
									<h1 className=" font-unbounded font-extrabold sm:leading-20 tracking-tight text-brand  text-7xl">
										7
									</h1>
								</div>
								<div className="justify-start ms-2 w-2.5">
									<h2 className="text-base font-bold leading-5 uppercase">
										years experience working
									</h2>
								</div>
							</div>
							{/* End of stat */}
							{/* stat */}
							<div className="flex items-center justify-start">
								<div className="justify-start">
									<h1 className=" font-unbounded font-extrabold sm:leading-20 tracking-tight text-brand  text-7xl">
										20+
									</h1>
								</div>
								<div className="justify-start ms-2 w-2.5">
									<h2 className="text-base font-bold leading-5 uppercase">
										Happy Clients
									</h2>
								</div>
							</div>
							{/* End of stat */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
