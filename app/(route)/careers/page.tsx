import MaxWidthWrapper from "@/components/common/max-width-wrapper";
import Footer from "@/components/footer";
import SecondaryNav from "@/components/home/secondary-nav";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Careers",
};

const CareersPage = () => {
	return (
		<>
			<div className="flex flex-col font-inter min-h-screen items-start justify-start">
				<SecondaryNav title="Careers" />
				<div className="flex flex-col w-full py-20">
					<MaxWidthWrapper className="px-5">
						<div className="flex flex-col justify-center text-center w-full max-w-3xl mx-auto">
							<h2 className="text-4xl font-black mb-4">Join Our Team</h2>
							<p className=" text-muted-foreground mb-6">
								At Girona, we are always looking for talented and passionate
								individuals to join our team. We offer a dynamic and
								collaborative work environment where you can grow your career
								and make a meaningful impact. Whether you are an experienced
								professional or just starting out, we have opportunities for you
								to thrive and contribute to our success. Explore our current job
								openings and become a part of our innovative and dedicated team.
							</p>
							<p className=" text-muted-foreground mb-6">
								For career inquiries, please send your CV to{" "}
								<Link
									href={`mail:info@gironalimited.com`}
									className="font-bold text-brand"
								>
									info@gironalimited.com
								</Link>
							</p>
						</div>
					</MaxWidthWrapper>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CareersPage;
