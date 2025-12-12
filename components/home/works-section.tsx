import WorkCard from "../card/work-card";
import MaxWidthWrapper from "../common/max-width-wrapper";
import TitleHeader from "../common/title-header";

export interface WorkType {
	title: string;
	image: string;
	tags: string[];
}
const works: WorkType[] = [
	{
		title: "complex building at ekpan express",
		image: "/images/works/1.jpeg",
		tags: ["commercial"],
	},
	{
		title: "Ring light installation at refinery",
		image: "/images/works/2.jpeg",
		tags: ["commercial", "civil"],
	},
	{
		title: "complex building at ekpan express",
		image: "/images/works/1.jpeg",
		tags: ["commercial"],
	},
	{
		title: "Ring light installation at refinery",
		image: "/images/works/2.jpeg",
		tags: ["commercial", "civil"],
	},
];

const WorkSection = () => {
	return (
		<div className="flex flex-col w-full py-20 bg-accent">
			<MaxWidthWrapper>
				<TitleHeader
					subText="recent work"
					heading="featured projects"
					actionButton={false}
				/>
				<div className="grid gap-5 row-gap-10 lg:grid-cols-2">
					{works.slice(0, 4).map((work, index) => (
						<WorkCard key={`work-${index}`} work={work} />
					))}
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default WorkSection;
