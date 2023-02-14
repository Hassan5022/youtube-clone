import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {

	if(!videos?.length) return "Loading..."

	return (
		<Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
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
