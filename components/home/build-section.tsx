import BuildCard from "../card/build-card";
import WorkCard from "../card/work-card";
import MaxWidthWrapper from "../common/max-width-wrapper";
import TitleHeader from "../common/title-header";
import { Icons } from "../icons";

export interface BuildType {
	title: string;
	icon: React.ReactNode;
	description: string;
}
const building: BuildType[] = [
	{
		title: "Commercial",
		icon: <Icons.build className="size-20 fill-black" />,
		description:
			"Focusing on medium to large-scale commercial construction projects, we work to create landmarks that make an impact.",
	},
	{
		title: "Industrial",
		icon: <Icons.build className="size-20 fill-black" />,
		description:
			"Focusing on medium to large-scale commercial construction projects, we work to create landmarks that make an impact.",
	},
	{
		title: "Local",
		icon: <Icons.build className="size-20 fill-black" />,
		description:
			"Focusing on medium to large-scale commercial construction projects, we work to create landmarks that make an impact.",
	},
];

const BuildSection = () => {
	return (
		<div className="flex flex-col w-full py-20">
			<MaxWidthWrapper>
				<TitleHeader
					subText="our sector"
					heading="what we build"
					actionButton={false}
				/>
				<div className="grid gap-10 row-gap-10 lg:grid-cols-3">
					{building.slice(0, 3).map((build, index) => (
						<BuildCard key={`build-${index}`} build={build} index={index + 1} />
					))}
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default BuildSection;
