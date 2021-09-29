import React from "react";
import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import StairsIcon from '@mui/icons-material/Stairs';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';

import ScreenshotsCarousel from '@components/ScreenshotsCarousel';
import OutlinedCard from "@components/OutlinedCard";

const useStyles = makeStyles({
  sectionHeading: {
    textAlign: 'center'
  },
  reviewsSection: {

  },
  attributesSection: {
    paddingBottom: '30px'
  },
  topicsSection: {
    paddingBottom: '30px'
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
    '& .left-section': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .side-img': {
      width: '100%'
    }
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className="main-container">
      <h1 id="home-title" className="text-center">Aprende jugando con LevelUp</h1>
      <header class="video-header">
        <video src="https://drive.google.com/uc?id=1Pp4PXRf9bcevmFzmCUOvzP4d35WxrvFg&export=download" autoPlay loop playsInline muted></video>
        <div class="viewport-header">
          {/* <button className="cta-button">
            Descargar
          </button> */}
          {/* <Button variant="contained">Descargar</Button> */}
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
          <div className={classes.carouselContainer}>
            <OutlinedCard icon={<StarIcon fontSize="large" />} title={"Recompensas"} description={"Juegos con recompensas para todos, para que disfruten mientras aprenden"}/>
            <OutlinedCard icon={<AccessAlarmIcon fontSize="large" />} title={"Tiempo"} description={"Con límites de tiempo para poder mejorar cada vez más"}/>
            <OutlinedCard icon={<VolumeUpIcon fontSize="large" />} title={"Sonido interactivo"} description={"Juegos con sonido interactivo para lograr una expriencia completa e inmersiva"}/>
          </div>
        </div>

        <div className={classes.topicsSection}>
          <h2 className={classes.sectionHeading}>Temas</h2>
          <div className={classes.carouselContainer}>
            <OutlinedCard icon={<FormatListNumberedIcon fontSize="large" />} title={"Números"} description={"Para aprender a contar, ordenar, agrupar y mucho más..."}/>
            <OutlinedCard icon={<ColorLensIcon fontSize="large" />} title={"Colores"} description={"Los colores primarios, secundarios y neutros. Para aprender a combinarlos de las formas más asombrosas..."}/>
            <OutlinedCard icon={<SpellcheckIcon fontSize="large" />} title={"Inglés"} description={"Para dominar el segundo idioma desde una edad temprana..."}/>
          </div>
        </div>

        <div className={classes.secondCTASection}>
          <div className="left-section">
            <h2>¡Empieza ya!</h2>
            <h3>Vive la educación desde casa de una manera más divertida</h3>
            {/* <Button variant="contained">Descargar</Button> */}
          </div>
          <div>
            <img className="side-img" src="img/side-img01.jpeg" alt="Imagen de niño/a jugando con bloques" />
          </div>
        </div>
      </main>

    </div>
  );
}