import Footer from "@/components/footer";
import AboutSection from "@/components/home/about-section";
import BuildSection from "@/components/home/build-section";
import CtaSection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import PartnerSection from "@/components/home/partners-section";
import ServiceSection from "@/components/home/service-section";
import ValueSection from "@/components/home/values-section";
import WorkSection from "@/components/home/works-section";

export default function Home() {
	return (
		<div className="flex flex-col font-inter min-h-screen items-center justify-center">
			<HeroSection />
			<AboutSection />
			<ServiceSection />
			<ValueSection />
			<WorkSection />
			<BuildSection />
			<PartnerSection />
			<CtaSection />
			<Footer />
		</div>
	);
}

{
	/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"></main>; */
}
