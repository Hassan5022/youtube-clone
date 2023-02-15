import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants";
// styles 
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Card sx={{ width: { md: "320px", xs: "100%", sm: "358px" }, boxShadow: "none", borderRadius: 0}}>
			<Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
				<CardMedia
					image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
					alt={snippet?.title}
					sx={{ height: 180, width: { xs: '100%', sm: '358px'} }}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography variant="subtitle1" fontWeight="bold" color="#fff">
						{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
					<Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircleIcon sx={{
                            fontSize: 12, color: 'gray', ml: "5px"}} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
