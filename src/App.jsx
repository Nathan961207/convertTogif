import React, { useState, useEffect } from 'react';

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { MainHeader } from './Components/Header/Header';
import { MainContent } from './Components/Content/Content';
import { MainFooter } from './Components/Footer/Footer';
import { GifMaker } from './Components/GifMaker';

const ffmpeg = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const load = async () => {
    if (ffmpeg.isLoaded()) return;
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  return ready ? (
    <div>
      <MainHeader />
      <MainContent>
        <GifMaker ffmpeg={ffmpeg} />
      </MainContent>
      <MainFooter />
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
