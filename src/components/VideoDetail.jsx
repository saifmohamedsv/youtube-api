import React from "react";

const VideoDetail = ({ video }) => {
  if (!video ) {
    return "loading...";
  }
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            src={`https://youtube.com/embed/${video?.id?.videoId}`}
            frameborder="0"
          ></iframe>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
