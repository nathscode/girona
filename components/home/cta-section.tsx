import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "../icons";

const CtaSection = () => {
	return (
		<div className="flex flex-col w-full pt-20">
			<div className="grid lg:grid-cols-2">
				<div className="flex flex-col w-full">
					<img
						className="object-cover w-full h-80 sm:h-[400px]"
						src={"/images/about-4.jpeg"}
						alt={"girona about"}
					/>
				</div>
				<div className="relative flex flex-col justify-center bg-brand h-96 sm:h-[400px] pl-30 pt-20 sm:pt-50">
					<div className="absolute inset-0 bg-black/20 text-white h-full w-full transition-colors duration-200">
						<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center size-full pl-0 sm:pl-50">
							<div className="flex flex-col sm:flex-row justify-start items-start sm:items-center p-10 w-full">
								<div className="justify-start">
									<div className="flex items-center justify-start">
										<div className="h-0.5 w-8 bg-white" />
										<h2 className="text-base font-semibold text-white ml-5">
											get in touch.
										</h2>
									</div>
									<h2 className="my-4 font-unbounded capitalize text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl max-w-xs">
										Ready to work <br /> with us
									</h2>
								</div>
								<div className="justify-end group">
									<Link
										href="/contact"
										className="flex flex-col justify-center items-center size-30 sm:size-40 sm:p-4 rounded-full bg-white group-hover:translate-1.5 transition-all duration-300"
									>
										<Icons.arrowUpRight className="size-8 text-brand" />

										<h2 className="font-semibold text-sm text-black">
											Contact Now
										</h2>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<Image
						height={300}
						width={400}
						className="object-cover w-full h-full"
						src={"/images/cta.png"}
						alt={"girona cta"}
					/>
				</div>
			</div>
		</div>
	);
};

export default CtaSection;
