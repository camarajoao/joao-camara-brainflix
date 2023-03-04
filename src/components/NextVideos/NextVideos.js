import "./NextVideos.scss";
import NextVideosItem from "../NextVideosItem/NextVideosItem";

export default function NextVideos({ videos, selectVideo }) {
    return (
        <div className="nextVideos">
            <h3 className="nextVideos__title">NEXT VIDEOS</h3>
            <nav className="nextVideos__container">
                {videos.map((video) => (
                    <NextVideosItem key={video.id} video={video} selectVideo={selectVideo} />
                ))}
            </nav>
        </div>
    )
}