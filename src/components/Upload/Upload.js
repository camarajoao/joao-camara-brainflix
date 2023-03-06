import "./Upload.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";

export default function UploadVideo() {
    return (
        <div className="upload">
            <div className="upload__title">
                <h1 className="upload__title-content">Upload Video</h1>
            </div>
            <div>
                <form className="upload__form">
                    <div className="upload__form-thumbnail">
                        <label className="upload__form-thumbnail-label" htmlFor="thumbnail">TITLE YOUR VIDEO</label>
                        <img src={Thumbnail} className="upload__form-thumbnail-image" id="thumbnail" />
                    </div>
                    <div className="upload__form-details">
                        <label className="upload__form-details-label" htmlFor="title">TITLE YOUR VIDEO</label>
                        <input className="upload__form-details-input" name="title" id="title" placeholder="Add a title to your video" />
                        <label className="upload__form-details-label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload__form-details-textarea" name="description" id="description" placeholder="Add a description to your video"></textarea>
                    </div>
                    <div className="upload__form-buttons">
                        <button className="upload__form-buttons-cancel" type="submit">COMMENT</button>
                        <button className="upload__form-buttons-publish" type="submit"><span className=""><img src="" className="" alt="" /></span>COMMENT</button>
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    )
}