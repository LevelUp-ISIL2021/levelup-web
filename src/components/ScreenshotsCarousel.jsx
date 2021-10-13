import React from 'react';
import { makeStyles } from '@mui/styles';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  itemDiv: {
    width: '100%',
    height: '100%'
  },
  itemImg: {
    width: '90%',
    height: '90%'
  }
});


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ScreenshotsCarousel() {
  const classes = useStyles();

  return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
      >
        {
          [{ src: `${process.env.PUBLIC_URL}/img/unknown-3.png`, alt: "Screen 01" },
          { src: `${process.env.PUBLIC_URL}/img/unknown-4.png`, alt: "Screen 02" },
          { src: `${process.env.PUBLIC_URL}/img/unknown-5.png`, alt: "Screen 03" },
          { src: `${process.env.PUBLIC_URL}/img/unknown-3.png`, alt: "Screen 04" },
          { src: `${process.env.PUBLIC_URL}/img/unknown-4.png`, alt: "Screen 05" }].map((img) => (
          <div className={classes.itemDiv}>
            <img className={classes.itemImg} src={img.src} alt={img.alt}/>
          </div>
        ))
        }
      </Carousel>
  )
}

