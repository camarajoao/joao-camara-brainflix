import "./components/Header/Header.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video"
import Media from "./components/Media/Media";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";


function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <div className="App__container">
        <div className="App__Interaction">
          <Media />
          <Comments />
        </div>
        <div className="App__nextVideos">
          <NextVideos />
        </div>
      </div>
    </div>
  );
}

export default App;
