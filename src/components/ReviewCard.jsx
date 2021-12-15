import React, { useContext, useState } from "react";
import { makeStyles } from '@mui/styles';
import { Grow } from "@mui/material";
import UserContext from "../context/UserContext";
import ReviewModal from "./ReviewModal";

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
    },
    editButton: {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: '#fe691d',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
});

export default function ReviewCard({ review: { user: reviewUser, content, imgURL, createdAt } }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const { user: currentUser } = useContext(UserContext);
    
  return (
    <>
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
                    <p style={{ textAlign: 'right' }}>- {reviewUser.firstname} {reviewUser.lastnamefather} {reviewUser.lastnamemother}</p>
                    <p style={{ textAlign: 'right', fontSize: '0.8rem' }}>{new Date(createdAt).toLocaleString('en-gb')}</p>
                    {currentUser && currentUser._id === reviewUser._id &&
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            className={classes.editButton}
                            onClick={handleOpenModal}
                        >
                            Editar reseña
                        </button>
                        </div>
                    }
                </div>
            </div>
        </Grow>
        <ReviewModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
}