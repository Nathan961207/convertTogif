import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
export const MainContent = (props) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container direction="column" justify="center" alignItems="center">
        {props.children}
      </Grid>
    </main>
  );
};
