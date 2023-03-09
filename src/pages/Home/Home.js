import "../../components/NextVideos/NextVideos.scss"

import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";


import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Media from "../../components/Media/Media";
import Comments from "../../components/Comments/Comments";
import NextVideosItem from "../../components/NextVideosItem/NextVideosItem";
import NotFound from "../NotFound/NotFound";

import videosData from "../../data/videos.json";
import videoDetailsData from "../../data/video-details.json";


export default function Videos() {

    const { videoId } = useParams();
    let video = videoDetailsData.find((v) => v.id === videoId);


    if (!videoId) {
        video = videoDetailsData[0];
    }

    const [selectedVideo, setSelectedVideo] = useState(video);

    if (!video) {
        return <NotFound />
    }

    function handleSelectVideo() {
        setSelectedVideo(video);
    }
    console.log(handleSelectVideo);
    const filteredVideos = videoDetailsData.filter((v) => v.id !== selectedVideo.id);

    return (
        <>
            <VideoPlayer selectedVideo={selectedVideo} />
            <div className="App__container">
                <div className="App__Interaction">
                    <Media selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <div className="App__nextVideos">
                    <div className="nextVideos">
                        <h3 className="nextVideos__title">NEXT VIDEOS</h3>
                        <nav className="nextVideos__container">
                            {filteredVideos.map((video) => (
                                <Link to={`/videos/${video.id}`} key={video.id}>
                                    <NextVideosItem key={video.id} video={video} selectVideo={handleSelectVideo} />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}