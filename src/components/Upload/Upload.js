import "./Upload.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";

export default function UploadVideo() {

    const navigate = useNavigate();
    function toHomePage() {
        alert("Upload successful")
        navigate("/");
    }

    return (
        <section className="upload">
            <div className="upload__title">
                <h1 className="upload__title-content">Upload Video</h1>
            </div>
            <div>
                <form onSubmit={() => toHomePage()} className="upload__form">
                    <div className="upload__form--desktop">
                        <div className="upload__form-thumbnail">
                            <label className="upload__form-thumbnail-label labels" htmlFor="thumbnail">VIDEO THUMBNAIL</label>
                            <img src={Thumbnail} className="upload__form-thumbnail-image" id="thumbnail" alt="video-thumbnail" />
                        </div>
                        <div className="upload__form-details">
                            <div>
                                <label className="upload__form-details-label labels" htmlFor="title">TITLE YOUR VIDEO</label>
                                <input className="upload__form-details-input" name="title" id="title" placeholder="Add a title to your video" />
                            </div>
                            <div className="upload__form-details--flexgrow">
                                <label className="upload__form-details-label labels" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                                <textarea className="upload__form-details-textarea" name="description" id="description" placeholder="Add a description to your video"></textarea>

                            </div>

                        </div>
                    </div>
                    <div className="upload__form-buttons">
                        <button className="upload__form-buttons-publish" type="submit"><span className="upload__form-buttons-publish-upload"><img src={publishIcon} className="upload__form-buttons-publish-upload-icon" alt="publish-icon" /></span>PUBLISH</button>
                        <button className="upload__form-buttons-cancel" type="button">CANCEL</button>
                    </div>
                </form>
            </div>
            <div></div>
        </section>
    )
}