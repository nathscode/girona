import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/scroll-top";

const inter = Inter({
	weight: ["100", "300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-inter",
});

const unbounded = Unbounded({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-unbounded",
});
export const metadata: Metadata = {
	metadataBase: new URL("https://girona.com"),
	title: {
		template: "%s | Girona.com",
		default: "Girona - Construction companies in Warri, Nigeria",
	},
	description: "girona Construction companies in Warri, Nigeria",
	keywords: [
		"Construction girona",
		"Construction companies in Warri",
		"Real estate development",
		"Building services",
		"Construction projects",
		"Business development",
		"Business consultation",
		"Engineering services",
		"Warri company",
		"Uvwie company",
		"Delta State business",
	],
	other: {
		"theme-color": "#ec3136",
		"color-scheme": "light",
		"twitter:image": "/images/girona_summary.png",
		"twitter:card": "summary_large_image",
		"og:url": "https://girona.com",
		"og:image": "/images/girona_summary.png",
		"og:type": "website",
	},
	openGraph: {
		title: "girona - Construction companies in Warri, Nigeria",
		description: "girona Construction companies in Warri, Nigeria",
		url: "https://girona.com",
		siteName: "girona",
		images: [
			{
				url: "/images/girona_summary.png",
				width: 1200,
				height: 600,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					` ${inter.variable} ${unbounded.variable}  font-inter`,
					"min-h-screen bg-background  whitespace-pre-line overscroll-none antialiased"
				)}
			>
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
