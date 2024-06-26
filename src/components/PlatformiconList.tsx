import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platforms } from "../hooks/usePlatforms";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
	platforms: Platforms[];
}

const PlatformiconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		web: BsGlobe,
		andriod: FaAndroid,
	};

	return (
		<HStack marginY={2}>
			{platforms.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} />
			))}
		</HStack>
	);
};

export default PlatformiconList;
