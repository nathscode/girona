import CustomButton from "../common/button";
import { ServiceType } from "../home/service-section";

type Props = {
	service: ServiceType;
	className?: string;
};

const ServiceCard = ({ service, className }: Props) => {
	return (
		<div className={`flex flex-col w-full bg-white p-8 ${className}`}>
			<div className="flex flex-col justify-center items-center size-20 bg-brand text-white mb-5">
				{service.icon}
			</div>
			<h1 className="text-xl font-bold my-4 font-unbounded">{service.title}</h1>
			<p className="text-neutral-600 text-base">{service.description}</p>
			<div className="h-px w-full bg-black/5 my-5" />
		</div>
	);
};

export default ServiceCard;
