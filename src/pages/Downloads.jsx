import React from "react";
import { makeStyles } from '@mui/styles';
import AppleIcon from '@mui/icons-material/Apple';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import DownloadCard from "../components/DownloadCard";

const useStyles = makeStyles({
  h1Heading: {
    textAlign: 'center'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '25px auto 150px'
  }
});

export default function Downloads() {
  const classes = useStyles();

  const downloads = [
    {
      id: 1,
      osName: 'macOS',
      icon: <AppleIcon fontSize="large" style={{transform: 'scale(1.8)'}}/>,
      instruction: 'Si tu sistema operativo es macOS, descarga este instalador',
      url: 'https://level-up.software/macos-installer.dmg'
    },
    {
      id: 2,
      osName: 'Windows',
      icon: <DesktopWindowsIcon fontSize="large" style={{transform: 'scale(1.8)'}}/>,
      instruction: 'Si tu sistema operativo es Windows, descarga este instalador',
      url: 'https://level-up.software/windows-installer.dmg'
    }
  ];
    
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0, 0.05)', padding: '10px', minHeight: '100vh' }}>
      <h1 className={classes.h1Heading}>Selecciona tu descarga</h1>
      <div className={classes.cardContainer}>
        {downloads.map((download) => (
          <DownloadCard key={download.id} download={download} />
        ))}
      </div>
    </div>
  );
}