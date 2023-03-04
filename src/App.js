import "./components/Header/Header.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import Media from "./components/Media/Media";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import videosData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import { useState } from "react";



function App() {

  const [videos] = useState(videosData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  function handleSelectVideo(clickedId) {
    const foundVideo = videoDetailsData.find((video) => clickedId === video.id);

    setSelectedVideo(foundVideo)
  }

  const filteredVideos = videos.filter((video) => video.id !== selectedVideo.id);


  return (
    <div className="App">
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="App__container">
        <div className="App__Interaction">
          <Media selectedVideo={selectedVideo} />
          <Comments selectedVideo={selectedVideo} />
        </div>
        <div className="App__nextVideos">
          <NextVideos videos={filteredVideos} selectVideo={handleSelectVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
