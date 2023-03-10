import "../../components/NextVideos/NextVideos.scss"

import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";


import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Media from "../../components/Media/Media";
import Comments from "../../components/Comments/Comments";
import NextVideosItem from "../../components/NextVideosItem/NextVideosItem";
import NotFound from "../NotFound/NotFound";

export default function Videos() {
    const keyAPI = "?api_key=927bc667-ec54-48be-bd48-810ce138c876";

    const { videoId } = useParams();
    const [videoData, setVideoData] = useState([]);


    const displayedVideoId = videoData.length > 0 ? videoData[0].id : null;
    const video = videoId || displayedVideoId;
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${keyAPI}`)
            .then((response) => {
                setVideoData(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        if (!video) return;
        axios.get(`https://project-2-api.herokuapp.com/videos/${video}/${keyAPI}`)
            .then((response) => {
                setSelectedVideo(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [video]);

    if (!selectedVideo) {
        return <p>Loading next video...</p>
    }
    const filteredVideos = videoData.filter((v) => v.id !== selectedVideo.id);

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
                                    <NextVideosItem key={video.id} video={video} selectVideo={selectedVideo} />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}