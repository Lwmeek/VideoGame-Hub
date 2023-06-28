import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
};

const theme = extendTheme({
	config,
	colors: {
		white: "#e8e9e9",
		gray: {
			50: "#fbf0f2",
			100: "#dcd8d9",
			200: "#bfbfbf",
			300: "#a6a6a6",
			400: "#8c8c8c",
			500: "#737373",
			600: "#595959",
			700: "#404040",
			800: "#282626",
			900: "#150a0d",
		},
	},
});

export default theme;
