import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import TitleHeader from "@/components/common/title-header";
import Footer from "@/components/footer";
import ContactForm from "@/components/forms/contact-form";
import SecondaryNav from "@/components/home/secondary-nav";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Contact",
};

const ContactPage = () => {
	return (
		<>
			<div className="flex flex-col font-inter min-h-screen items-start justify-start">
				<SecondaryNav title="Contact" />
				<div className="flex flex-col w-full py-10">
					<MaxWidthWrapper>
						<TitleHeader
							subText="get in touch"
							heading="we'd love to hear from you"
						/>
						<div className="flex flex-col  px-5"></div>
					</MaxWidthWrapper>
					<div className="flex justify-start w-full">
						<div className="w-full sm:w-2/3 bg-accent">
							<MaxWidthWrapper>
								<div className="flex flex-col p-10">
									<ContactForm />
								</div>
							</MaxWidthWrapper>
						</div>
						<div className="w-full sm:w-1/3">
							<MaxWidthWrapper>
								<div className="flex flex-col justify-start">
									<h1 className="text-lg font-unbounded font-bold">
										Office Location
									</h1>
									<p className="text-sm">
										We usually respond within 24 hours. Alternatively
										you&apos;re welcome to call our offices.{" "}
									</p>
									<div className="flex flex-col justify-start items-start gap-5 w-full my-5">
										<div className="flex justify-start items-start">
											<div className="justify-start">
												<MapPin className="size-5 text-gray-400" />
											</div>
											<div className="justify-start ms-5">
												<p>Km 3, Npa Expressway, Ekpan-Warri ,Delta State</p>
											</div>
										</div>
										<div className="flex justify-start items-start">
											<div className="justify-start">
												<Mail className="size-5 text-gray-400" />
											</div>
											<div className="justify-start ms-5">
												<Link href="mail:support@gironalimited.com">
													support@gironalimited.com
												</Link>
											</div>
										</div>
										<div className="flex justify-start items-start">
											<div className="justify-start">
												<PhoneCall className="size-5 text-gray-400" />
											</div>
											<div className="justify-start ms-5">
												<Link href="tel:+2348036926726">(234)803 692 6726</Link>
											</div>
										</div>
									</div>
								</div>
							</MaxWidthWrapper>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ContactPage;
