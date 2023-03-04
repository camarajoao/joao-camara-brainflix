import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import Comment from "../Comment/Comment";
import { useState } from "react";

export default function Comments({ selectedVideo }) {

    return (
        <div className="conversation">
            <h3 className="conversation__title">{selectedVideo.comments.length} Comments</h3>
            <div className="conversation__container">
                <div className="conversation__post-comment">
                    <div className="conversation__left">
                        <img src={avatar} className="conversation__icon" alt="mohan muruge" />
                    </div>
                    <div className="conversation__right">
                        <form className="conversation__form">
                            <label className="form__comment labels" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea className="form__comment-input" name="comment" id="comment" placeholder="Add a new comment"></textarea>
                            <button className="form__button" type="submit"><span className="form__commentIconContainer"><img src={addCommentIcon} className="form__commentIcon" alt="addcomment-icon" /></span>COMMENT</button>
                        </form>
                    </div>
                </div>
                <div className="conversation__posted">
                    {selectedVideo.comments.map((comment) => (
                        <Comment comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    )
}

