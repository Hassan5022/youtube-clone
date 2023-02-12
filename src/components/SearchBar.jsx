import SearchIcon from "@mui/icons-material/Search";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
	return (
		<Paper
			component="form"
			onSubmit={() => {}}
			sx={{
				borderRadius: "20px",
				border: "1px solid #e3e3e3",
				pl: 2,
				mr: { sm: 5 },
			}}
		>
			<input
				className="search-bar"
				placeholder="Search..."
				onChange={() => {}}
				type="text"
			/>
			<IconButton type="submit" sx={{ p: "10px", color: "red" }}>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
