import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { isTextEmpty, isEmailFormatValid } from '../utils/helpers/validationHelpers';

import RegisterModal from "@components/RegisterModal";
import useButtonStyles from '../utils/styles/buttonStyles';

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
    signupLink: {
        color: '#fe691d !important',
        '&:hover': {
            backgroundColor: 'rgba(254,105,29,0.05) !important'
        }
    }
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 24,
    p: 4,
};

export default function LoginModal({ open, handleClose }) {
    const classes = useStyles();
    const buttonClasses = useButtonStyles();

    const [openRegisterModal, setOpenRegisterModal] = React.useState(false);
    const handleOpenRegisterModal = () => setOpenRegisterModal(true);
    const handleCloseRegisterModal = () => {
        handleClose();
        setOpenRegisterModal(false);
    }

    const [loginState, setLoginState] = React.useState({
        email: "",
        password: "",
        errors: {
            email: {
                error: false,
                message: ""
            },
            password: {
                error: false,
                message: ""
            }
        },
        status: {
            message: "",
            loading: false,
            finishedLoading: false
        }
    });

    const handleInputChange = (field) => (e) => {
        const currentInput = e.target.value;
        setLoginState((state) => ({
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
        if (isTextEmpty(loginState.email)) {
            success = false;
            setLoginState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    email: {
                        error: true,
                        message: "Debes ingresar un email"
                    }
                }
            }));
        }
        if (isTextEmpty(loginState.password)) {
            success = false;
            setLoginState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    password: {
                        error: true,
                        message: "Debes ingresar una contraseña"
                    }
                }
            }));
        }
        return success;
    }

    function validateEmailFormat() {
        let success = true;
        if (!isEmailFormatValid(loginState.email)) {
            success = false;
            setLoginState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    email: {
                        error: true,
                        message: "Debes ingresar un email válido"
                    }
                }
            }));
        }
        return success;
    }

    function login() {
        const fieldsAreNotEmpty = validateIfFieldsAreEmpty();
        const emailFormatIsValid = validateEmailFormat();
        if ([fieldsAreNotEmpty, emailFormatIsValid].every((val) => val === true)) {
            setLoginState((state) => ({
                ...state,
                status: {
                    message: "Autenticando usuario...",
                    loading: true,
                    finishedLoading: false
                }
            }));
            setTimeout(() => {
                setLoginState((state) => ({
                    ...state,
                    status: {
                        message: "",
                        loading: false,
                        finishedLoading: true
                    }
                }));
            }, 3000);
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
                        Inicia sesión
                    </Typography>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </div>
                <TextField
                    required
                    fullWidth
                    error={loginState.errors.email.error}
                    className={classes.textInput}
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={loginState.email}
                    onChange={handleInputChange('email')}
                    helperText={loginState.errors.email.error && loginState.errors.email.message}
                />
                <TextField
                    required
                    fullWidth
                    error={loginState.errors.password.error}
                    className={classes.textInput}
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    value={loginState.password}
                    onChange={handleInputChange('password')}
                    helperText={loginState.errors.password.error && loginState.errors.password.message}
                />
                <p className={classes.statusMessage}>{loginState.status.message}</p>
                <Button
                    fullWidth
                    variant="contained"
                    className={classes.loginButton}
                    onClick={login}
                    classes={{containedPrimary: buttonClasses.primaryContained}}
                >
                    Iniciar sesión
                </Button>
                <Button classes={{root: classes.signupLink}} onClick={handleOpenRegisterModal}>¿No tienes una cuenta? Regístrate</Button>
            </Box>
        </Modal>
        <RegisterModal open={openRegisterModal} handleClose={handleCloseRegisterModal} />
        </div>
    );
}
