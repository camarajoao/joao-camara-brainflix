import "./NextVideosItem.scss";

export default function NextVideosItem({ video }) {
    return (
        <div className="nextVideosItem">
            <div className="nextVideosItem__hero">
                <img className="nextVideosItem__image" src={video.image} alt={video.title} />
            </div>
            <div className="nextVideosItem__description">
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
            </div>
        </div>
    )
}
