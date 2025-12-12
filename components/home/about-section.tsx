import CustomButton from "../common/button";
import MaxWidthWrapper from "../common/max-width-wrapper";
import TitleHeader from "../common/title-header";

const AboutSection = () => {
	return (
		<div className="flex flex-col w-full py-20">
			<MaxWidthWrapper>
				<TitleHeader
					subText="who we are"
					heading="Leading Global Builder and Developer"
				/>
				<div className="grid gap-5 row-gap-10 lg:grid-cols-2">
					<div className="flex flex-col w-full">
						<img
							className="object-cover w-full h-80 rounded shadow-lg sm:h-[550px]"
							src={"/images/about-3.jpeg"}
							alt="girona construction site"
						/>
					</div>
					<div className="flex flex-col justify-center pl-0 sm:pl-10 mb-10 sm:mb-0">
						<div className="max-w-xl mb-6">
							<h2 className="text-xl text-black font-bold mb-4">
								As a national leader in our industry, we are revolutionizing
								what you expect from a contractor.
							</h2>
							<p className="text-base text-neutral-600">
								Girona Limited is a leading Nigerian construction and
								engineering firm now expanded to offer comprehensive energy
								services. We provide end-to-end project delivery - from
								feasibility studies and design through construction,
								commissioning, and maintenance - across the full value chain of
								energy infrastructure. Our multidisciplinary team supports
								clients in the oil & gas, power, and industrial sectors,
								delivering turnkey solutions with efficiency and precision. With
								a diverse portfolio of civil, structural, mechanical, and
								electrical works, Girona&apos;s capabilities extend to
								pipelines, facilities, and specialized energy projects. As one
								industry example highlights, end-to- end integrated solutions
								are essential for fuel and energy producers a benchmark that
								guides our comprehensive approach.
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
											100+
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
			</MaxWidthWrapper>
		</div>
	);
};

export default AboutSection;
