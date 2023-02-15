import { ChannelCard, VideoCard, Loader } from "./";
// styles 
import { Box, Stack } from "@mui/material";

const Videos = ({ videos, direction }) => {

	if(!videos?.length) return <Loader/>

	return (
		<Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
			{videos.map((element, id) => (
				<Box key={id}>
					{element.id.videoId && <VideoCard video={element} />}
					{element.id.channelId && <ChannelCard channelDetail={element} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
