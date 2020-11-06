import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
  
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    
    <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress fontSize="large" />      
    </Backdrop>
    
  );
}