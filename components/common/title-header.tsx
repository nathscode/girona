import React from "react";
import CustomButton from "./button";

type Props = {
	heading: string;
	subText: string;
	actionButton?: boolean;
	actionLink?: string;
	actionText?: string;
};

const TitleHeader = ({
	heading,
	subText,
	actionButton,
	actionLink,
	actionText,
}: Props) => {
	return (
		<div className="flex flex-wrap items-center justify-start w-full py-20">
			<div className="flex items-center justify-start">
				<div className="h-0.5 w-8 bg-brand" />
				<h2 className="text-base font-semibold text-brand ml-5">{subText}.</h2>
			</div>
			<div className="flex flex-wrap items-end justify-start">
				<div className="justify-start sm:ms-40 mt-5 sm:mt-0">
					<h1 className="text-3xl sm:text-5xl font-black uppercase font-unbounded max-w-2xl">
						{heading}
					</h1>
				</div>
				{actionButton && (
					<div className="justify-end mt-10 sm:mt-0">
						<CustomButton
							href={actionLink!}
							name={actionText!}
							className="border-gray-300! text-black! text-sm"
							miniClassName="bg-black!"
						/>
					</div>
				)}
			</div>
		</div>
	);
};
export default TitleHeader;
