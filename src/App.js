import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import NotFound from "./pages/NotFound/NotFound";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Home />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
