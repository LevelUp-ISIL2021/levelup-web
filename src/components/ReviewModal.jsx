import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

import useButtonStyles from '../utils/styles/buttonStyles';
import { isTextEmpty } from '../utils/helpers/validationHelpers';
// import AccountService from '../api/accountService';
import axios from 'axios';
import { BASE_API, REVIEWS_ENDPOINT } from '../utils/appConstants';

const useStyles = makeStyles({
    textInput: {
        margin: '5px !important'
    },
    loginButton: {
        margin: '5px !important'
    },
    statusMessage: {
        textAlign: 'center'
    },
    errorMessage: {
        textAlign: 'center',
        color: 'red !important',
    },
    signupLink: {
        color: '#fe691d !important',
        '&:hover': {
            backgroundColor: 'rgba(254,105,29,0.05) !important'
        }
    }
});

const style = {
    position: 'absolute',
    top: '75%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 24,
    p: 4,
};

export default function ReviewModal({ open, handleClose }) {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();

    const [reviewState, setReviewState] = React.useState({
        review: "",
        errors: {
            review: {
                error: false,
                message: ""
            }
        },
        status: {
            error: false,
            message: "",
            loading: false,
            finishedLoading: false
        }
    });

    function resetReviewState() {
        setReviewState({
            review: "",
            errors: {
                review: {
                    error: false,
                    message: ""
                }
            },
            status: {
                error: false,
                message: "",
                loading: false,
                finishedLoading: false
            }
        });
    }

    const handleInputChange = (field) => (e) => {
        const currentInput = e.target.value;
        setReviewState((state) => ({
            ...state,
            [field]: currentInput,
            errors: {
                ...state.errors,
                [field]: {
                    error: false,
                    message: ""
                }
            }
        }));
    }

    function validateIfFieldsAreEmpty() {
        let success = true;
        if (isTextEmpty(reviewState.review)) {
            success = false;
            setReviewState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    review: {
                        error: true,
                        message: "Tu reseña está vacía"
                    }
                }
            }));
        }
        return success;
    }

    function submitReview() {
        const fieldsAreNotEmpty = validateIfFieldsAreEmpty();
        if (fieldsAreNotEmpty) {
            setReviewState((state) => ({
                ...state,
                status: {
                    error: false,
                    message: "Registrando reseña...",
                    loading: true,
                    finishedLoading: false
                }
            }));

            const requestBody = {
                content: reviewState.review,
                approved: true
            };

            const token = localStorage.getItem('token');

            axios.post(BASE_API + REVIEWS_ENDPOINT, requestBody, {headers: { 'x-access-token': token } })
                .then((res) => {
                    console.log('Review response:', res);
                    setReviewState((state) => ({
                        ...state,
                        status: {
                            error: false,
                            message: "Gracias por tu reseña",
                            loading: false,
                            finishedLoading: true
                        }
                    }));
                    
                    resetReviewState();
                    handleClose();
                    
                }, (err) => {
                    console.log('Review err:', err.response);
                    setReviewState((state) => ({
                        ...state,
                        status: {
                            error: true,
                            message: err.response.status === 401 ? "Debes iniciar sesión para poder ingresar tu reseña" : "No se pudo registrar tu reseña",
                            loading: false,
                            finishedLoading: true
                        }
                    }));
                });
            
        }
    }

    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px auto' }}>
                    <Typography id="modal-modal-title" variant="h5" component="h1">
                        Déjanos tu reseña
                    </Typography>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </div>
                {/* <TextField
                    required
                    fullWidth
                    error={reviewState.errors.review.error}
                    className={classes.textInput}
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={reviewState.review}
                    onChange={handleInputChange('review')}
                    helperText={reviewState.errors.review.error && reviewState.errors.review.message}
                /> */}
                <TextField
                    fullWidth
                    error={reviewState.errors.review.error}
                    className={classes.textInput}
                    label="Reseña"
                    multiline
                    rows={4}
                    placeholder="Escribe aquí tu reseña"
                    value={reviewState.review}
                    onChange={handleInputChange('review')}
                    helperText={reviewState.errors.review.error && reviewState.errors.review.message}
                />
                <p className={reviewState.status.error ? classes.errorMessage : classes.statusMessage}>{reviewState.status.message}</p>
                <Button
                    fullWidth
                    variant="contained"
                    disabled={reviewState.status.loading}
                    className={classes.loginButton}
                    onClick={submitReview}
                    classes={{containedPrimary: buttonClasses.primaryContained}}
                >
                    Enviar reseña
                </Button>
            </Box>
        </Modal>
        </div>
    );
}
