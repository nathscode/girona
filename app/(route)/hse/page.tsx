import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import Footer from "@/components/footer";
import SecondaryNav from "@/components/home/secondary-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Health, Safety & Environment",
};

const HsePage = () => {
	return (
		<>
			<div className="flex flex-col font-inter min-h-screen items-start justify-start">
				<SecondaryNav title="Health, Safety & Environment" />
				<div className="flex flex-col w-full py-10">
					<MaxWidthWrapper className="px-5">
						<h1 className="text-3xl font-black ">
							Health, Safety & Environment
						</h1>
						<h2 className="text-2xl font-medium text-muted-foreground mb-4">
							Management System
						</h2>
						<p className=" text-muted-foreground mb-6">
							Girona HSE Management System Standard helps ensure that business
							activities are consistently conducted in a safe, healthy,
							environmentally and socially responsible manner. Our corporate
							standard aligns with, and is based on, industry standards such as
							ISO 45001, ISO 14001 and ISO 9001. In accordance with the
							corporate standard, we maintain an HSE Management System to assess
							and manage the local operational risks to the business, employees,
							contractors, stakeholders and the environment. Objectives, targets
							and deadlines are set and tracked annually to improve our HSE
							performance.
							<br />
							<br />
							Targets and progress are reported to our Managing Director and the
							Board of Directors. Girona is committed to protecting the health
							and safety of everybody who plays a part in our operations, lives
							in the communities in which we operate or uses our products.
							Wherever we operate, we will conduct our business with respect and
							care for environment and systematically manage risks to drive
							sustainable business growth. We will not be satisfied until we
							succeed in eliminating all injuries, occupational illnesses,
							unsafe practices and incidents of environmental harm from our
							activities.
						</p>
						<div className="flex flex-col w-full mt-2">
							<h2 className="text-xl font-semibold mb-2">
								To meet our commitment, we will:{" "}
							</h2>
							<ol className="list-none space-y-3 mb-12">
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">a.</span>
									<span>
										Demonstrate visible and active leadership that engages
										employees and service providers, and manage health, safety
										and environmental (HSE) performance as a line responsibility
										with clear authorities and accountabilities.
									</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">b.</span>
									<span>
										Provide relevant safety and health information to
										contractors and require them to provide proper training for
										the safe, environmentally sound performance of their work.
									</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">c.</span>
									<span>
										Measure, audit and publicly report HSE performance and
										maintain open dialogue with stakeholder groups and with
										communities where we operate.
									</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">d.</span>
									<span>
										Ensure that all employees and contractors understand that
										working safely is a condition of employment, and that they
										are each responsible for their own safety and the safety of
										those around them.
									</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">e.</span>
									<span>Comply with applicable regulations and laws.</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">f.</span>
									<span>
										Work with both governments and stakeholders where we operate
										to develop regulations and standards that improve the safety
										and health of people and the environment.
									</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">g.</span>
									<span>
										Communicate our commitment to this policy to our employees
										and interested parties.
									</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">h.</span>
									<span>
										Maintain "stop work" policies that establish the
										responsibility and authority for all employees and
										contractors to stop work they believe to be unsafe.
									</span>
								</li>
								<li className="flex gap-3 text-muted-foreground">
									<span className="font-bold text-brand min-w-6">i.</span>
									<span>
										Manage all projects and processes through their life cycles
										in a way that protects safety and health and minimizes
										impacts on the environment.
									</span>
								</li>
							</ol>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="">
								<img
									src="/images/about-qhse-CQ2YRXrm.png"
									alt="HSE 1"
									className="w-full h-64 object-cover rounded shadow-lg"
								/>
							</div>
							<div className="">
								<img
									src="/images/inspection-BojWLxeX.jpg"
									alt="HSE 2"
									className="w-full h-64 object-cover rounded shadow-lg"
								/>
							</div>
							<div className="">
								<img
									src="/images/oil-gas-industry-CenQXk6V.jpg"
									alt="HSE 3"
									className="w-full h-64 object-cover rounded shadow-lg"
								/>
							</div>
							<div className="">
								<img
									src="/images/operations-DdA1-oQu.jpg"
									alt="HSE 4"
									className="w-full h-64 object-cover rounded shadow-lg"
								/>
							</div>
							<div className="">
								<img
									src="/images/surface-protection-CkCAj6ep.jpg"
									alt="HSE 5"
									className="w-full h-64 object-cover rounded shadow-lg"
								/>
							</div>
						</div>
					</MaxWidthWrapper>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HsePage;
