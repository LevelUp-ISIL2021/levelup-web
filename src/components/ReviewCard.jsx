import React from "react";
import { makeStyles } from '@mui/styles';
import { Grow } from "@mui/material";

const useStyles = makeStyles({
    card: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '5px 5px 2px 2px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        borderRadius: '25px',
        margin: '20px auto',
        maxWidth: '80%',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '5px 20px'
    },
    leftDiv: {
        width: '30%',
        textAlign: 'center'
    },
    userAvatar: {
        maxWidth: '100px'
    },
    rightDiv: {
        width: '70%'
    }
});

export default function ReviewCard({ review: { user, content, imgURL, createdAt } }) {
  const classes = useStyles();
    
  return (
    <Grow in timeout={500}>
      <div className={classes.card}>
          <div className={classes.leftDiv}>
              <img
                  className={classes.userAvatar}
                  src={imgURL || `${process.env.PUBLIC_URL}/img/user-avatar.png`}
                  alt="imagen de la reseña"
              />
          </div>
          <div className={classes.rightDiv}>
              <p style={{ fontSize: '1.25rem' }}><em>"{content}"</em></p>
              <p style={{ textAlign: 'right' }}>- {user.firstname} {user.lastnamefather} {user.lastnamemother}</p>
              <p style={{ textAlign: 'right', fontSize: '0.8rem' }}>{new Date(createdAt).toLocaleString('en-gb')}</p>
          </div>
      </div>
    </Grow>
  );
}