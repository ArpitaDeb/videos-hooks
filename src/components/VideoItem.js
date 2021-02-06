import React from 'react';
import './VideoItem.css';
import { List, Image } from 'semantic-ui-react';

const VideoItem = ({ video, onVideoSelList }) => {

  return (
    <List.Item
      onClick={() => onVideoSelList(video)}
      className="video-item"
    >
      <Image
        className="imgAll"
        src={video.snippet.thumbnails.medium.url}
      />
      <List.Content>
        <List.Header as='a'>
          {video.snippet.title}
        </List.Header>
      </List.Content>
    </List.Item>
  );
};

export default VideoItem;