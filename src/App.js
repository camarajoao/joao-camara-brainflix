import "./_App.scss";

import { useState } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import videosData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";


function App() {

  const [videos] = useState(videosData);
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  function handleSelectVideo(clickedId) {
    const foundVideo = videoDetailsData.find((video) => clickedId === video.id);

    setSelectedVideo(foundVideo)
  }

  const filteredVideos = videos.filter((video) => video.id !== selectedVideo.id);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home videos={filteredVideos} selectVideo={handleSelectVideo} selectedVideo={selectedVideo}/>} />
          <Route path="/upload" element={<VideoUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
