import React from 'react';
import VideoItem from './VideoItem';
import { List } from 'semantic-ui-react';

const VideoList = ({ videos, onVideoSelected }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelList={onVideoSelected}
        video={video}
      />);
  });
  return (
    <List>
      {renderedList}
    </List>
  )
};

export default VideoList;