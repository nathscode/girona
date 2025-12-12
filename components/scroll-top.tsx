"use client";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed bottom-2 right-2">
			<button
				type="button"
				onClick={scrollToTop}
				className={`
				bg-black/30 hover:bg-brand/70 focus:ring-brand inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 ${
					isVisible ? "opacity-100" : "opacity-0"
				}
				`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="size-8"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 18V6m0 0-5 5m5-5 5 5"
					/>
				</svg>
			</button>
		</div>
	);
};
