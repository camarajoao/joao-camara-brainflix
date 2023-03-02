import "./components/Header/Header.scss";
import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import Comments from "./components/Comments/Comments"

function App() {
  return (
    <div className="App">
      <Header />
      <Media />
      <Comments />
    </div>
  );
}

export default App;
