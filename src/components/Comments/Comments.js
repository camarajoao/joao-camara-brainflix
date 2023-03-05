import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import Comment from "../Comment/Comment";

export default function Comments({ selectedVideo }) {

    return (
        <div className="comments">
            <h3 className="comments__count">{selectedVideo.comments.length} Comments</h3>
            <div className="comments__container">
                <div className="comments__user">
                    <div className="comments__user-avatar">
                        <img src={avatar} className="comments__user-avatar-image" alt="mohan muruge" />
                    </div>
                    <div className="comments__user-post">
                        <form className="comments__form">
                            <label className="comments__form-label labels" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea className="comments__form-input" name="comment" id="comment" placeholder="Add a new comment"></textarea>
                            <button className="comments__form-button" type="submit"><span className="comments__form-button-submit"><img src={addCommentIcon} className="comments__form-button-submit-icon" alt="addcomment-icon" /></span>COMMENT</button>
                        </form>
                    </div>
                </div>
                <div className="comments__posted">
                    {selectedVideo.comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    )
}