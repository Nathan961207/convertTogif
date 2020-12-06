import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { videoStyles } from './styles';

export const MediaControlCard = (props) => {
  const { src } = props;
  const classes = videoStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        src={src}
        title="Live from space album cover"
        autoPlay
        controls
        component="video"
      />
    </Card>
  );
};
