import "./Comment.scss";

export default function Comment({ comment }) {
    console.log(comment);

    const date = new Date(comment.timestamp);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const timestamp = `${month}/${day}/${year}`

    return (
        <div className="conversation__posted-container">
            <div className="conversation__posted-container-left">
                <img className="conversation__posted-avatar" />
            </div>
            <div className="conversation__posted-container-right">
                <div className="conversation__posted-container-right-top">
                    <p className="conversation__posted-name">{comment.name}</p>
                    <p className="conversation__posted-date">{timestamp}</p>
                </div>
                <div className="conversation__posted-container-right-bottom">
                    <p className="conversation__posted-text">{comment.comment}</p>
                </div>
            </div>
        </div>
    )
}