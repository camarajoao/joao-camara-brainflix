import "./Home.scss";

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
        axios.get("http://localhost:8080/")
            .then((response) => {
                console.log(response);
                setVideoData(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        if (!video) return;
        axios.get(`http://localhost:8080/videos/${video}`)
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
            <div className="home__container">
                <div className="home__interaction">
                    <Media selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <div className="home__next-videos">
                    <div className="next-videos">
                        <h3 className="next-videos__title">NEXT VIDEOS</h3>
                        <nav className="next-videos__container">
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