import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./common/max-width-wrapper";
import { Icons } from "./icons";
import CustomButton from "./common/button";

const Footer = () => {
	return (
		<div className="flex flex-col justify-start w-full bg-[#191919]">
			<MaxWidthWrapper>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-10 border-b border-white/10">
					<div className="flex justify-start items-start w-full group border-b sm:border-r sm:border-b-0 border-white/10 p-5 sm:py-5">
						<div className="justify-start">
							<PhoneCall className="size-10 fill-gray-400 group-hover:scale-110 transition-all duration-300" />
						</div>
						<div className="flex flex-col gap-2 justify-start ms-5">
							<h5 className="font-semibold text-sm text-gray-400">Call Us</h5>
							<Link
								href={`tel:+2348054578609`}
								className="font-bold text-lg sm:text-xl text-white"
							>
								(234)805 457 8609
							</Link>
						</div>
					</div>
					<div className="flex justify-start items-start w-full group border-b sm:border-r sm:border-b-0 border-white/10 p-5 sm:py-5">
						<div className="justify-start">
							<Mail className="size-10 text-gray-400 group-hover:scale-110 transition-all duration-300" />
						</div>
						<div className="flex flex-col gap-2 justify-start ms-5">
							<h5 className="font-semibold text-sm text-gray-400">
								Need Support
							</h5>
							<Link
								href={`mail:info@gironalimited.com`}
								className="font-bold text-lg sm:text-xl text-white"
							>
								info@gironalimited.com
							</Link>
						</div>
					</div>
					<div className="flex justify-start items-start w-full group py-5">
						<div className="justify-start">
							<MapPin className="size-10 text-gray-400 group-hover:scale-110 transition-all duration-300" />
						</div>
						<div className="flex flex-col gap-2 justify-start ms-5">
							<h5 className="font-semibold text-sm text-gray-400">
								Head Office
							</h5>
							<h1 className="font-bold text-lg sm:text-xl text-white">
								Km 3, Npa Expressway, Ekpan-Warri ,Delta State
							</h1>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap sm:flex-nowrap justify-start items-start gap-5 w-full  p-10">
					<div className="w-full sm:w-1/3">
						<div className="flex flex-col w-full">
							<div className="text-2xl font-bold tracking-tighter text-white">
								<Icons.logo className="size-14 fill-brand" />
							</div>
							<p className="text-base text-gray-400 mt-5">
								To deliver exceptional engineering, construction, and energy
								services by leveraging cutting-edge technology.
							</p>
							<div className="mt-5">
								<CustomButton
									href="/contact"
									name="Contact Us"
									className="border-gray-300!  text-sm"
									miniClassName="bg-black!"
								/>
							</div>
						</div>
					</div>
					<div className="w-full sm:w-2/3 sm:ms-20 pt-10 sm:pt-0">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div className="flex flex-col justify-start">
								<h2 className="font-unbounded text-xl font-bold text-white">
									Quick Links
								</h2>
								<ul className="flex flex-col gap-2 my-4">
									<li className="text-gray-400 hover:text-brand hover:ml-2 transition-all duration-300">
										<Link href={"/projects"}>Our Projects</Link>
									</li>
									<li className="text-gray-400 hover:text-brand hover:ml-2 transition-all duration-300">
										<Link href={"/services"}>Services</Link>
									</li>
									<li className="text-gray-400 hover:text-brand hover:ml-2 transition-all duration-300">
										<Link href={"/about"}>About</Link>
									</li>
									<li className="text-gray-400 hover:text-brand hover:ml-2 transition-all duration-300">
										<Link href={"/contact"}>Contact Us</Link>
									</li>
								</ul>
							</div>
							<div className="flex flex-col justify-start">
								<h2 className="font-unbounded text-xl font-bold text-white">
									Our Socials
								</h2>
								<div className="flex justify-start items-start w-full gap-1 my-4">
									<Link
										href={"#"}
										title="follow us on facebook"
										className="flex flex-col justify-center items-center size-12 bg-[#262626] group hover:bg-brand transition-all duration-300 cursor-pointer"
									>
										<Icons.facebook className="size-6 fill-[#666666] group-hover:fill-white" />
									</Link>
									<Link
										href={"#"}
										title="follow us on instagram"
										className="flex flex-col justify-center items-center size-12 bg-[#262626] group hover:bg-brand transition-all duration-300 cursor-pointer"
									>
										<Icons.instagram className="size-6 fill-[#666666] group-hover:fill-white" />
									</Link>
									<Link
										href={"#"}
										title="follow us on twitter"
										className="flex flex-col justify-center items-center size-12 bg-[#262626] group hover:bg-brand transition-all duration-300 cursor-pointer"
									>
										<Icons.twitter className="size-6 fill-[#666666] group-hover:fill-white" />
									</Link>
									<Link
										href={"#"}
										title="follow us on tiktok"
										className="flex flex-col justify-center items-center size-12 bg-[#262626] group hover:bg-brand transition-all duration-300 cursor-pointer"
									>
										<Icons.tiktok className="size-7 text-[#666666] group-hover:text-white" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Footer;
