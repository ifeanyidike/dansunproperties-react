import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from "@material-ui/core/Backdrop";
import Logo from "../images/logo2.png"

const useStyles = makeStyles((theme) => ({
  
  backdrop: {    
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 2
  },
  progress:{
    position: 'absolute'
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (    
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress className={classes.progress} fontSize="large" />    
      <div className={classes.text}>
          
          Dansun Homes is the best real estate company in Nigeria.
          We sell all kinds of properties from homes, estates, lands, etc.
          We have hundreds of properties in Abuja, Lagos, Port Harcourt.
        </div>                 
    </Backdrop>    
  );
}
