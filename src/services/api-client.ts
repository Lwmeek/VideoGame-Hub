import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "012ba87bd2c5405498ae1bb895795842",
	},
});
