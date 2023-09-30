import React, { useEffect, useState } from "react";
import { Container, Video } from "./styles";
// Importing video's from assets
import Video1 from "../assets/video-1.mp4";
import Video2 from "../assets/video-2.mp4";
import Video3 from "../assets/video-3.mp4";
import Timestamp from "./components/Timestamp";

type Props = {};

const videos = [Video1, Video2, Video3];

const App = ({}: Props) => {
  return (
    <Container>
      <Timestamp />
      {/* to Select a random video from the 'videos' array */}
      <Video autoPlay muted loop>
        <source
          src={`${videos[Math.floor(Math.random() * videos.length)]}`}
          type="video/mp4"
        />
      </Video>
    </Container>
  );
};

export default App;
