import React from "react";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import useButtonStyles from '../utils/styles/buttonStyles';
import { Grow } from "@mui/material";

const useStyles = makeStyles({
    card: {
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '5px 5px 2px 2px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      borderRadius: '25px',
      margin: '10px 20px',
      maxWidth: '350px',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '5px 20px'
    }
});

export default function DownloadCard({ download: { osName, icon, instruction, url } }) {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();

  const download = (url) => () => {
    console.log('Donwloading file from:', url);
  }
    
  return (
    <Grow in timeout={500}>
    <div className={classes.card}>
        {icon}
        <p style={{ textAlign: 'center' }}>{instruction}</p>
        <Button
          variant="contained"
          onClick={download(url)}
          classes={{containedPrimary: buttonClasses.primaryContained}}
        >
          Descargar para {osName}
        </Button>
    </div>
    </Grow>
  );
}