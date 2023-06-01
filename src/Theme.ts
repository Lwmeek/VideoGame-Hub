import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
};

const theme = extendTheme({
	config,
	colors: {
		gray: {
			50: "#e6f1fe",
			100: "#b9d6f8",
			200: "#8bbaf4",
			300: "#5fa0f2",
			400: "#3b85f0",
			500: "#2b6bd7",
			600: "#2154a7",
			700: "#173c76",
			800: "#0b2447",
			900: "#010c19",
		},
	},
});

export default theme;
