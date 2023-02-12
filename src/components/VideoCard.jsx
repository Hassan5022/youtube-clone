import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "../utils/constants";

const VideoCard = ({ video: {id: {videoId}, snippet} }) => {
    
  return (
      <Card>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <CardMedia
                  image={snippet?.thumbnails?.high?.url}
                  alt={snippet?.title}
                  sx={{height: 180, width:358}}
              />
          </Link>
          <CardContent sx={{backgroundColor: "#1e1e1e", height: "106px"}}>
              <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                  <Typography variant="subtitle">
                      
                  </Typography>
          </Link>
          </CardContent>
      </Card>
  )
}

export default VideoCard