import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import Media from "../../components/Media/Media";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

export default function Videos({ videos, selectVideo, selectedVideo }) {
    return (
        <>
            <VideoPlayer selectedVideo={selectedVideo} />
            <div className="App__container">
                <div className="App__Interaction">
                    <Media selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <div className="App__nextVideos">
                    <NextVideos videos={videos} selectVideo={selectVideo} />
                </div>
            </div>
        </>
    )
}