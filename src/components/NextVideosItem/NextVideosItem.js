import "./NextVideosItem.scss";

export default function NextVideosItem({ video, selectVideo }) {
    return (
        <div className="nextVideosItem" onClick={() => { selectVideo(video.id) }}>
            <div className="nextVideosItem__hero">
                <img className="nextVideosItem__image" src={video.image} />
            </div>
            <div className="nextVideosItem__description">
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
            </div>
        </div>
    )
}
