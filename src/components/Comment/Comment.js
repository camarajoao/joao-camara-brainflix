import "./Comment.scss";

export default function Comment({ comment }) {

    const date = new Date(comment.timestamp);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const timestamp = `${month}/${day}/${year}`;

    return (
        <div className="comment">
            <div className="comment__avatar">
                <img className="comment__avatar-image" />
                {/* this image tag cannot receive an alt property or it breaks the style */}
            </div>
            <div className="comment__posted">
                <div className="comment__posted-information">
                    <p className="comment__posted-information-name">{comment.name}</p>
                    <p className="comment__posted-information-date">{timestamp}</p>
                </div>
                <div className="comment__posted-content">
                    <p className="comment__posted-content-text">{comment.comment}</p>
                </div>
            </div>
        </div>
    )
}