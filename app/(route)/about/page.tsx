import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import TitleHeader from "@/components/common/title-header";
import Footer from "@/components/footer";
import PartnerSection from "@/components/home/partners-section";
import SecondaryNav from "@/components/home/secondary-nav";
import { Icons } from "@/components/icons";
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
	title: "About Us",
};

const AboutPage = () => {
	return (
		<>
			<div className="flex flex-col font-inter min-h-screen items-start justify-start">
				<SecondaryNav title="About Us" />
				<div className="flex flex-col w-full py-10">
					<MaxWidthWrapper>
						<TitleHeader
							subText="our story"
							heading="Together we build success"
						/>
						<div className="flex flex-col border-l border-r px-5">
							<div className="grid gap-10 row-gap-10 lg:grid-cols-3">
								<div className="text-sm">
									Girona Limited is a leading Nigerian construction and
									engineering firm now expanded to offer comprehensive energy
									services. We provide end-to-end project delivery - from
									feasibility studies and design through construction,
									commissioning, and maintenance - across the full value chain
									of energy infrastructure. Our multidisciplinary team supports
									clients in the oil & gas, power, and industrial sectors,
									delivering turnkey solutions with efficiency and precision.
								</div>
								<div className="text-sm">
									With a diverse portfolio of civil, structural, mechanical, and
									electrical works, Girona&apos;s capabilities extend to
									pipelines, facilities, and specialized energy projects. As one
									industry example highlights, end-to- end integrated solutions
									are essential for fuel and energy producers- a benchmark that
									guides our comprehensive approach. Headquartered in Delta
									State, Girona operates with a local focus and global
									standards. We have the flexibility of a
									nimble,regionally-based company combined with
								</div>
								<div className="text-sm">
									the professionalism and technical rigor of top-tier
									international contractors. Our clients benefit from this
									blend: they receive personalized service and deep local
									insights, backed by a culture of continuous improvement and
									innovation. By expanding into energy solutions, we now offer
									our clients the convenience of a single, trusted partner for
									infrastructure and energy needs - truly from the wellhead to
									the refinery and beyond.
								</div>
							</div>
							<div className="flex flex-col justify-start my-10">
								<div className="grid gap-10 row-gap-10 lg:grid-cols-3">
									<div className="flex flex-col justify-start">
										<h1 className="text-3xl font-unbounded font-extrabold sm:leading-20 tracking-tight text-black  md:text-3xl">
											Vision & Mission
										</h1>
										<p className="text-sm text-neutral-700">
											Our guiding purpose and strategic direction that drive our
											innovation and service to Africa.
										</p>
										<div className="flex flex-col justify-start mt-10">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<Icons.eye className="size-20 fill-gray-400" />
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Vision
												</h1>
												<p className="text-sm text-neutral-700">
													To be recognized as Nigeria&apos;s premier integrated
													energy infrastructure solutions provider, empowering
													communities with sustainable, innovative, and
													world-class services.
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<div className="flex flex-col justify-start sm:mt-40">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<Icons.target className="size-20 text-gray-400" />
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Mission
												</h1>
												<p className="text-sm text-neutral-700">
													To deliver exceptional engineering, construction, and
													energy services by leveraging cutting-edge technology,
													deep industry expertise, and an unwavering commitment
													to quality and safety. We strive to exceed client
													expectations and drive positive impact through every
													project we undertake.
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<div className="flex flex-col justify-start sm:mt-40">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<Icons.shake className="size-20 fill-gray-400" />
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Commitment
												</h1>
												<p className="text-sm text-neutral-700">
													Health, Safety, and Environment (HSE) are at the heart
													of Girona&apos;s culture. We believe every employee
													should return home safe and healthy each day. As
													Industry leaders, we emphasize a Goal Zero mindset,
													aiming for Zero Injuries, Zero Negative Environmental
													Impact, and Zero Equipment Damage. In line with this,
													our ultimate objective is that every person goes home
													free of injury or illness. We never treat safety as an
													afterthought. As one mining service provider puts it,
													we embrace “Safety Always” - integrating safety into
													every process rather than treating it as a separate
													priority.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center border-t pt-5 my-20">
								<div className="flex flex-col justify-center items-center mx-auto  w-full max-w-4xl">
									<p className="text-black font-medium  text-sm sm:text-lg font-unbounded text-center">
										Since our incorporation in 2018, Girona Limited has grown
										from a bold vision into a leading general contracting firm
										in the Niger Delta. Guided by a commitment to excellence, we
										have delivered infrastructure solutions that drive economic
										growth and enhance community development. Founded by Mr.
										Valentine Olubayo, the company was established to bridge
										critical gaps within the construction industry by upholding
										the highest standards of quality, safety, and reliability.
										Today, Girona continues to push the boundaries of what is
										possible across the continent.
									</p>
								</div>
							</div>
							<div className="flex flex-col justify-start my-10">
								<div className="grid gap-10 row-gap-10 lg:grid-cols-3">
									<div className="flex flex-col justify-start">
										<h1 className="text-3xl font-unbounded font-extrabold sm:leading-20 tracking-tight text-black  md:text-3xl">
											Core Values
										</h1>
										<p className="text-sm text-neutral-700">
											Our core values not only define us as a company but also
											reflect the essence of each individual within our
											organization.
										</p>
										<div className="flex flex-col justify-start mt-10">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<ShieldCheck
														strokeWidth="1"
														className="size-15 text-gray-400"
													/>
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Safety
												</h1>
												<p className="text-sm text-neutral-700">
													We put the health and safety of our people, partners,
													and communities above all else, fostering a culture of
													“zero harm” and continuous improvement.
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<div className="flex flex-col justify-start sm:mt-40">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<Icons.target className="size-20 text-gray-400" />
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Integrity
												</h1>
												<p className="text-sm text-neutral-700">
													We conduct our business ethically and transparently,
													building trust through honesty, accountability, and
													respect.
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<div className="flex flex-col justify-start sm:mt-40">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<CheckCircle
														strokeWidth={1}
														className="size-16 text-gray-400"
													/>
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Excellency
												</h1>
												<p className="text-sm text-neutral-700">
													We deliver uncompromising quality and performance in
													every project, pursuing excellence in design,
													execution, and service.
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<div className="flex flex-col justify-start ">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<Zap
														strokeWidth={1}
														className="size-16 text-gray-400"
													/>
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Innovation
												</h1>
												<p className="text-sm text-neutral-700">
													We embrace new technologies and creative solutions to
													solve complex challenges and advance industry
													standards.
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<div className="flex flex-col justify-start ">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<HeartHandshake
														strokeWidth={1}
														className="size-16 text-gray-400"
													/>
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Teamwork
												</h1>
												<p className="text-sm text-neutral-700">
													We foster collaboration and empower our diverse
													workforce, knowing that our greatest achievements come
													through unity and shared purpose. solve complex
													challenges and advance industry standards.
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<div className="flex flex-col justify-start ">
											<div className="flex flex-col justify-start">
												<div className="mb-3">
													<Heart
														strokeWidth={1}
														className="size-16 text-gray-400"
													/>
												</div>
												<h1 className="mb-2 font-unbounded font-bold tracking-tight text-black  text-xl">
													Sustainability
												</h1>
												<p className="text-sm text-neutral-700">
													We are committed to protecting the environment and
													promoting social responsibility, integrating
													sustainable practices into our operations and
													projects.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-start w-full my-10">
								<div className="grid gap-10 row-gap-10 lg:grid-cols-3">
									<div className="flex flex-col h-[400px]">
										<Image
											height={300}
											width={300}
											className="object-cover w-full h-full"
											src={"/images/ceo.jpeg"}
											alt={"girona ceo"}
										/>
									</div>
									<div className="text-sm">
										Dear Partners and Colleagues, Since our incorporation in
										2018, Girona Limited has grown from a vision into a leading
										general contracting firm in the Niger Delta. Building on a
										commitment to excellence, we have delivered infrastructure
										solutions that support economic growth and community
										development. I lead a talented team of professionals who
										share a common goal: to exceed our clients&apos;
										expectations with every project. At Girona, our promise is
										to uphold the highest standards of quality, safety, and
										reliability. We focus on long-term relationships and
										continuous improvement, investing in people and technology
										to raise the bar in construction
									</div>
									<div className="text-sm">
										I am proud of what our team has achieved and excited about
										the opportunities ahead. Thank you for your interest in
										Girona Limited. As you read through this profile, I trust
										you will see our dedication to innovation, teamwork, and
										responsible growth. We look forward to partnering with you
										on projects that build a stronger Nigeria for future
										generations.
										<br />
										<br />
										Warm regards, <br /> <strong>
											Mr. Valentine Olubayo
										</strong>{" "}
										<br /> Managing Director
									</div>
								</div>
							</div>
						</div>
					</MaxWidthWrapper>
					<PartnerSection />
					<MaxWidthWrapper>
						<TitleHeader
							subText="get in touch"
							heading="Ready to work together?"
							actionButton={true}
							actionLink="/contact"
							actionText="Build A Project With Us"
						/>
					</MaxWidthWrapper>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AboutPage;
