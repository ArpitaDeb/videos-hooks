import React from 'react';
import VideoItem from './VideoItem';
import { List } from 'semantic-ui-react';

const VideoList = ({ videos, onVideoSelected }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
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