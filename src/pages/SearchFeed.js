import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import { Videos } from "../components";
// axios api
import { fetchData } from "../utils/fetchData";
// styles
import { Box, Typography } from "@mui/material";

const SearchFeed = () => {
	const [videos, setVideos] = useState(null);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchData(`search?part=snippet&q=${searchTerm}`)
			.then((data) => setVideos(data.items))
			.catch((e) => console.log(e));
	}, [searchTerm]);

	return (
		<Box p={2} minHeight="90vh">
			<Typography
				variant="h4"
				fontWeight={900}
				mb={3}
				ml={{ sm: "100px" }}
				sx={{ color: "white" }}
			>
				Search Results for{" "}
				<span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
			</Typography>
			<Box display="flex">
				<Box sx={{mr: {sm: "100px"}}}/>
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default SearchFeed;
