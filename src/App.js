import "./components/Header/Header.scss";
import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <Media />
      <Comments />
      <NextVideos />
    </div>
  );
}

export default App;
