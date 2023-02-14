import { BrowserRouter, Route, Routes } from "react-router-dom";
// styles
import { Box } from "@mui/material";
// components
import { Navbar } from "./components";
// pages
import { VideoDetails, ChannelDetails, SearchFeed, Feed } from "./pages";

const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: "#000" }}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetails />} />
				<Route path="/channel/:id" element={<ChannelDetails />} />
				<Route path="/search/:searchTerm" element={<SearchFeed />} />
			</Routes>
		</Box>
	</BrowserRouter>
);

export default App;
