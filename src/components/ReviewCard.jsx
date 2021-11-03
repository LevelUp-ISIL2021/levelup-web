import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import { Grow } from "@mui/material";

const useStyles = makeStyles({
    card: {
        border: '1px solid black',
        borderRadius: '25px',
        margin: '10px 20px',
        maxWidth: '100%',
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

export default function ReviewCard({ review: { userId, content, approved, updatedAt, createdAt } }) {
  const classes = useStyles();

  const [user, setUser] = useState({
    _id: null,
    firstName: null,
    lastNameFather: null,
    lastNameMother: null,
    picture: null,
  });

  useEffect(() => {
    const currentUser = fetchUser(userId);
    setUser(currentUser);
  }, [userId]);

  function fetchUser(id) {
      /*
        · _id: ObjectId
        · type: string [admin, teacher, parent]
        · firstName: string
        · lastNameFather: string
        · lastNameMother: string
        · dni: string
        · email: string
        · password: string
        · phoneNumber: string
        · picture: string
        · updatedAt: timestamp
        · createdAt: timestamp
      */
    return {
        _id: id,
        firstName: 'Pablo',
        lastNameFather: 'Picapiedra',
        lastNameMother: 'Mármol',
        picture: null,
    };
  }
    
  return (
    <Grow in timeout={500}>
    <div className={classes.card}>
        <div className={classes.leftDiv}>
            <img
                className={classes.userAvatar}
                src={user.picture || `${process.env.PUBLIC_URL}/img/user-avatar.png`}
                alt=""
            />
        </div>
        <div className={classes.rightDiv}>
            <p>{content}</p>
            <p>Fecha: {createdAt.toLocaleString('en-gb')}</p>
            <p>Usuario: {user.firstName} {user.lastNameFather} {user.lastNameMother}</p>
        </div>
    </div>
    </Grow>
  );
}