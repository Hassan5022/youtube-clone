import { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	};

	return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: "20px",
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: 'none',
				mr: { sm: 5 },
			}}
		>
			<input
				className="search-bar"
				placeholder="Search..."
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
				type="text"
			/>
			<IconButton type="submit" sx={{ p: "10px", color: "red" }}>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
