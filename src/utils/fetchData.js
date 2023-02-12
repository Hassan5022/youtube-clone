import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";
let envVar = process.env.REACT_APP_RAPID_API_KEY;
if (envVar.includes("'")) {
	envVar = envVar.slice(1, envVar.length - 2);
}

const options = {
	params: { maxResults: 5 },
	headers: {
		"X-RapidAPI-Key": envVar,
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchData = async (url) => {
	const { data } = await axios.get(`${URL}/${url}`, options);
	return data;
};
