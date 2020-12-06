import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

import { fetchFile } from '@ffmpeg/ffmpeg';

import { BasicTimeline } from './Timeline';
import { MediaControlCard } from "./Video";

export const GifMaker = (props) => {
  const { ffmpeg } = props;
  const classes = useStyles();
  const [video, setVideo] = useState();
  const [gif, setGIF] = useState();
  const convertToGif = async () => {
    // Memory
    ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

    // Run the command
    await ffmpeg.run(
      '-i',
      'test.mp4',
      '-t',
      '2.5',
      '-ss',
      '2.0',
      '-f',
      'gif',
      'out.gif',
    );

    // Read the result
    const data = ffmpeg.FS('readFile', 'out.gif');

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'image/gif' }),
    );

    setGIF(url);
  };
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={2}>
        <BasicTimeline uploaded={video} converted={gif} />
      </Grid>
      <Grid item xs={10}>
        {video && (
          <MediaControlCard src={URL.createObjectURL(video)} />
          // <video controls width="250" ></video>
        )}
        <input
          type="file"
          id="contained-button-file"
          onChange={(e) => setVideo(e.target.files?.item(0))}
          className={classes.input}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <h3>Result</h3>
        <Button variant="contained" color="primary" onClick={convertToGif}>
          Convert
        </Button>
        {gif && <img src={gif} width="250" />}
      </Grid>
    </Grid>
  );
};
