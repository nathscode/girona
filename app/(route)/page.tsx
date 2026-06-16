import Footer from "@/components/footer";
import AboutSection from "@/components/home/about-section";
import GallerySection from "@/components/home/company-gallery";
import CtaSection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import MiniAboutSection from "@/components/home/mini-about-section";
import ServicesSection from "@/components/home/new-service-section";
import PartnerSection from "@/components/home/partners-section";
import ValueSection from "@/components/home/values-section";

export default function Home() {
	return (
		<div className="flex flex-col font-inter min-h-screen items-center justify-center">
			<HeroSection />
			<MiniAboutSection />
			<AboutSection />
			<ServicesSection />
			<ValueSection />
			<GallerySection />
			<PartnerSection />
			<CtaSection />
			<Footer />
		</div>
	);
}
