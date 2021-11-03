import React from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import StairsIcon from '@mui/icons-material/Stairs';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';

import useButtonStyles from '../utils/styles/buttonStyles';
import ScreenshotsCarousel from '@components/ScreenshotsCarousel';
import OutlinedCard from "@components/OutlinedCard";
import { Fade, Zoom } from '@mui/material';

const useStyles = makeStyles({
  sectionHeading: {
    textAlign: 'center'
  },
  firstCTAButton: {
    position: 'relative !important',
    zIndex: '1000 !important',
    fontSize: '1.5rem !important',
  },
  reviewsSection: {

  },
  attributesSection: {
    padding: '25px 0 50px',
    margin: '10px auto',
    backgroundColor: 'rgba(254,105,29,0.6)'
  },
  topicsSection: {
    padding: '25px 0 50px',
    margin: '10px auto',
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  secondCTASection: {
    display: 'flex',
    '&>div': {
      width: '50%'
    },
    backgroundImage: `url('${process.env.PUBLIC_URL}/img/side-img03.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    '& .left-section': {
      backgroundColor: 'rgba(0,0,0, 0.75)',
      color: '#E4E4E4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .side-img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }
});

export default function Home() {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const history = useHistory();

  return (
    <div className="main-container">
      <h1 id="home-title" className="text-center">Aprende jugando con LevelUp</h1>
      <header className="video-header">
        <video src="https://drive.google.com/uc?id=1Pp4PXRf9bcevmFzmCUOvzP4d35WxrvFg&export=download" autoPlay loop playsInline muted></video>
        <div className="viewport-header">
          {/* <button className="cta-button">
            Descargar
          </button> */}
          <Fade in timeout={2500}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            classes={{containedPrimary: buttonClasses.primaryContained}}
            // classes={{root: classes.firstCTAButton}}
            className={classes.firstCTAButton}
            onClick={() => { history.push(`/downloads`); }}
          >
            Descargar
          </Button>
          </Fade>
        </div>
      </header>

      <main>
        <div>
          {/* <h1 className="text-center">Carrusel de Screenshots</h1> */}
          <ScreenshotsCarousel />
        </div>
        {/* <div className={classes.reviewsSection}>
          <h2 className={classes.sectionHeading}>Carrusel de Reseñas</h2>
          <div className={classes.carouselContainer}>
          </div>
        </div> */}

        <div className={classes.attributesSection}>
          <h2 className={classes.sectionHeading}>Nuestros juegos</h2>
          <Zoom in timeout={4000}>
          <div className={classes.carouselContainer}>
            <OutlinedCard icon={<StarIcon fontSize="large" />} title={"Recompensas"} description={"Juegos con recompensas para todos, para que disfruten mientras aprenden"}/>
            <OutlinedCard icon={<AccessAlarmIcon fontSize="large" />} title={"Tiempo"} description={"Con límites de tiempo para poder mejorar cada vez más"}/>
            <OutlinedCard icon={<VolumeUpIcon fontSize="large" />} title={"Sonido interactivo"} description={"Juegos con sonido interactivo para lograr una expriencia completa e inmersiva"}/>
          </div>
          </Zoom>
        </div>

        <div className={classes.topicsSection}>
          <h2 className={classes.sectionHeading}>Temas</h2>
          <Zoom in timeout={5000}>
          <div className={classes.carouselContainer}>
            <OutlinedCard icon={<FormatListNumberedIcon fontSize="large" />} title={"Números"} description={"Para aprender a contar, ordenar, agrupar y mucho más..."}/>
            <OutlinedCard icon={<ColorLensIcon fontSize="large" />} title={"Colores"} description={"Los colores primarios, secundarios y neutros. Para aprender a combinarlos de las formas más asombrosas..."}/>
            <OutlinedCard icon={<SpellcheckIcon fontSize="large" />} title={"Inglés"} description={"Para dominar el segundo idioma desde una edad temprana..."}/>
          </div>
          </Zoom>
        </div>

        <div className={classes.secondCTASection}>
          <div className="left-section">
            <h1 style={{ margin: '5px' }}>¡EMPIEZA YA!</h1>
            <h2>Vive la educación desde casa de una manera más divertida</h2>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => { history.push(`/downloads`); }}
              classes={{containedPrimary: buttonClasses.primaryContained}}
            >
              Descargar
            </Button>
          </div>
          <div>
            <img className="side-img" src={`${process.env.PUBLIC_URL}/img/side-img04.jpg`} alt="Fichas de juego infantil" />
          </div>
        </div>
      </main>

    </div>
  );
}