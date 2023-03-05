import "./VideoPlayer.scss";

export default function Video({ selectedVideo }) {

    return (
        <div className="video">
            <video className="video__player" poster={selectedVideo.image} controls>
                <source src="" />
            </video>
        </div>
    )
}