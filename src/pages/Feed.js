import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// components
import { Sidebar, Videos } from "../components";
// axios api
import { fetchData } from "../utils/fetchData";

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`)
      .then(data => {
      setVideos(data.items)
      })
      .catch(e => {
      console.log(e);
    })
  }, [selectedCategory])

	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box
				sx={{
					height: { sx: "auto", md: "92vh" },
					borderRight: "1px solid #3d3d3d",
					px: { sx: 0, md: 2 },
				}}
			>
				<Sidebar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
				<Typography
					className="copyright"
					variant="body2"
					sx={{ mt: 1.5, color: "#fff" }}
				>
					Copyright 2023 Hassan Ahmed
				</Typography>
			</Box>

			<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
				<Typography
					variant="h4"
					fontWeight="bold"
					mb={2}
					sx={{ color: "white" }}
				>
					{selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos } />
			</Box>
		</Stack>
	);
};

export default Home;
