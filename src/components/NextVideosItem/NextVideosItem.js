import "./NextVideosItem.scss";

export default function NextVideosItem({ video }) {
    return (
        <section className="next-videos-item">
            <div className="next-videos-item__hero">
                <img className="next-videos-item__image" src={video.image} alt={video.title} />
            </div>
            <div className="next-videos-item__description">
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
            </div>
        </section>
    )
}
