import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';

import { isTextEmpty, isEmailFormatValid, isPasswordFormatValid } from '../utils/helpers/validationHelpers';
import useButtonStyles from '../utils/styles/buttonStyles';
import axios from 'axios';
import { ACCOUNT_ENDPOINT, BASE_API, SIGNUP_ENDPOINT } from '../utils/appConstants';
import UserContext from '../context/UserContext';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex'
    },
    column: {
        width: '50%',
        padding: '15px'
    },
    textInput: {
        margin: '5px !important'
    },
    signUpButton: {
        margin: '5px !important'
    },
    statusMessage: {
        textAlign: 'center'
    },
    errorMessage: {
        textAlign: 'center',
        color: 'red !important',
    }
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 24,
    p: 4,
};

export default function RegisterModal({ open, handleClose }) {

    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const { user, setUser } = React.useContext(UserContext);

    const [registerState, setRegisterState] = React.useState({
        email: "",
        password: "",
        passwordCheck: "",
        firstName: "",
        firstLastName: "",
        secondLastName: "",
        documentNumber: "",
        phoneNumber: "",
        errors: {
            email: { error: false, message: "" },
            password: { error: false, message: "" },
            passwordCheck: { error: false, message: "" },
            firstName: { error: false, message: "" },
            firstLastName: { error: false, message: "" },
            secondLastName: { error: false, message: "" },
            documentNumber: { error: false, message: "" },
            phoneNumber: { error: false, message: "" }
        },
        status: {
            error: false,
            message: "",
            loading: false,
            finishedLoading: false
        }
    });

    function resetRegisterState(){
        setRegisterState({
            email: "",
            password: "",
            passwordCheck: "",
            firstName: "",
            firstLastName: "",
            secondLastName: "",
            documentNumber: "",
            phoneNumber: "",
            errors: {
                email: { error: false, message: "" },
                password: { error: false, message: "" },
                passwordCheck: { error: false, message: "" },
                firstName: { error: false, message: "" },
                firstLastName: { error: false, message: "" },
                secondLastName: { error: false, message: "" },
                documentNumber: { error: false, message: "" },
                phoneNumber: { error: false, message: "" }
            },
            status: {
                error: false,
                message: "",
                loading: false,
                finishedLoading: false
            }
        })
    }

    const handleInputChange = (field) => (e) => {
        const currentInput = e.target.value;
        setRegisterState((state) => ({
            ...state,
            [field]: currentInput,
            errors: {
                ...state.errors,
                [field]: { error: false, message: "" }
            }
        }));
    }

    function validateIfFieldsAreEmpty() {
        let success = true;
        if (isTextEmpty(registerState.email)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    email: { error: true, message: "Debes ingresar un email" }
                }
            }));
        }
        if (isTextEmpty(registerState.password)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    password: { error: true, message: "Debes ingresar una contraseña" }
                }
            }));
        }
        if (isTextEmpty(registerState.passwordCheck)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    passwordCheck: { error: true, message: "Ingresa tu contraseña nuevamente" }
                }
            }));
        }
        if (isTextEmpty(registerState.firstName)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    firstName: { error: true, message: "Debes ingresar tu nombre" }
                }
            }));
        }
        if (isTextEmpty(registerState.firstLastName)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    firstLastName: { error: true, message: "Debes ingresar tu apellido paterno" }
                }
            }));
        }
        if (isTextEmpty(registerState.secondLastName)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    secondLastName: { error: true, message: "Debes ingresar tu apellido materno" }
                }
            }));
        }
        if (isTextEmpty(registerState.documentNumber)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    documentNumber: { error: true, message: "Debes ingresar tu número de DNI" }
                }
            }));
        }
        if (isTextEmpty(registerState.phoneNumber)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    phoneNumber: { error: true, message: "Debes ingresar tu número de teléfono" }
                }
            }));
        }
        return success;
    }

    function validateEmailFormat() {
        let success = true;
        if (!isEmailFormatValid(registerState.email)) {
            success = false;
            setRegisterState((state) => ({
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

    function validatePasswordFormat() {
        let success = true;
        if (!isPasswordFormatValid(registerState.password)) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    password: {
                        error: true,
                        message: "Debes ingresar una contraseña con al menos 8 caracteres"
                    }
                }
            }));
        }
        return success;
    }

    function validatePasswordMatch() {
        let success = true;
        if (registerState.password !== registerState.passwordCheck) {
            success = false;
            setRegisterState((state) => ({
                ...state,
                errors: {
                    ...state.errors,
                    passwordCheck: {
                        error: true,
                        message: "La contraseña debe coincidir con la de arriba"
                    }
                }
            }));
        }
        return success;
    }

    function signup(){
        const fieldsAreNotEmpty = validateIfFieldsAreEmpty();
        const emailFormatIsValid = validateEmailFormat();
        const passwordFormatIsValid = validatePasswordFormat();
        const bothPasswordsMatch = validatePasswordMatch();
        if ([fieldsAreNotEmpty, emailFormatIsValid,
            passwordFormatIsValid, bothPasswordsMatch].every((val) => val === true)) {
            setRegisterState((state) => ({
                ...state,
                status: {
                    error: false,
                    message: "Registrando usuario...",
                    loading: true,
                    finishedLoading: false
                }
            }));

            const signUpUser = {
                email: registerState.email,
                password: registerState.password,
                firstname: registerState.firstName,
                lastnamefather: registerState.firstLastName,
                lastnamemother: registerState.secondLastName,
                dni: registerState.documentNumber,
                phonenumber: registerState.phoneNumber
            };

            // const loginResponse = await AccountService.login(authCredentials);
            axios.post(BASE_API + SIGNUP_ENDPOINT, signUpUser)
                .then((res) => {
                    console.log('Register response:', res);
                    setRegisterState((state) => ({
                        ...state,
                        status: {
                            error: false,
                            message: "Usuario registrado con éxito",
                            loading: false,
                            finishedLoading: true
                        }
                    }));
                    // setUser({
                    //     email: registerState.email,
                    //     firstname: registerState.firstName,
                    //     lastnamefather: registerState.firstLastName,
                    //     lastnamemother: registerState.secondLastName,
                    // });
                    localStorage.setItem('token', res.data.token);
                    axios.get(BASE_API + ACCOUNT_ENDPOINT, {headers: { 'x-access-token': res.data.token } })
                        .then((res) => {
                            console.log('Get current user response:', res);
                            setUser(res.data);
                        }, (err) => {
                            console.log('Get current user err:', err.response);
                        });
                    resetRegisterState();
                    handleClose();
                }, (err) => {
                    console.log('Register err:', err.response);
                    let message = "Hubo un problema al registrar el usuario";
                    if (err.response.data.message.includes('email already exists'))
                        message = "Ya existe un usuario registrado con ese correo";
                    if (err.response.data.message.includes('dni already exists'))
                        message = "Ya existe un usuario registrado con ese DNI";
                    setRegisterState((state) => ({
                        ...state,
                        status: {
                            error: true,
                            message: message,
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
                        Regístrate
                    </Typography>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </div>
                <div className={classes.mainContainer}>
                    <div className={classes.column}>
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.firstName.error}
                        className={classes.textInput}
                        label="Nombre(s)"
                        variant="outlined"
                        type="text"
                        value={registerState.firstName}
                        onChange={handleInputChange('firstName')}
                        helperText={registerState.errors.firstName.error && registerState.errors.firstName.message}
                    />
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.firstLastName.error}
                        className={classes.textInput}
                        label="Apellido paterno"
                        variant="outlined"
                        type="text"
                        value={registerState.firstLastName}
                        onChange={handleInputChange('firstLastName')}
                        helperText={registerState.errors.firstLastName.error && registerState.errors.firstLastName.message}
                    />
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.secondLastName.error}
                        className={classes.textInput}
                        label="Apellido materno"
                        variant="outlined"
                        type="text"
                        value={registerState.secondLastName}
                        onChange={handleInputChange('secondLastName')}
                        helperText={registerState.errors.secondLastName.error && registerState.errors.secondLastName.message}
                    />
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.documentNumber.error}
                        className={classes.textInput}
                        label="DNI"
                        variant="outlined"
                        type="text"
                        value={registerState.documentNumber}
                        onChange={handleInputChange('documentNumber')}
                        helperText={registerState.errors.documentNumber.error && registerState.errors.documentNumber.message}
                    />
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.phoneNumber.error}
                        className={classes.textInput}
                        label="Número de teléfono"
                        variant="outlined"
                        type="text"
                        value={registerState.phoneNumber}
                        onChange={handleInputChange('phoneNumber')}
                        helperText={registerState.errors.phoneNumber.error && registerState.errors.phoneNumber.message}
                    />
                    </div>
                    <div className={classes.column}>
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.email.error}
                        className={classes.textInput}
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={registerState.email}
                        onChange={handleInputChange('email')}
                        helperText={registerState.errors.email.error && registerState.errors.email.message}
                    />
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.password.error}
                        className={classes.textInput}
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        value={registerState.password}
                        onChange={handleInputChange('password')}
                        helperText={registerState.errors.password.error && registerState.errors.password.message}
                    />
                    <TextField
                        required
                        fullWidth
                        size="small"
                        error={registerState.errors.passwordCheck.error}
                        className={classes.textInput}
                        label="Confirmar contraseña"
                        variant="outlined"
                        type="password"
                        value={registerState.passwordCheck}
                        onChange={handleInputChange('passwordCheck')}
                        helperText={registerState.errors.passwordCheck.error && registerState.errors.passwordCheck.message}
                    />
                    <p className={registerState.status.error ? classes.errorMessage : classes.statusMessage}>{registerState.status.message}</p>
                    <Button
                        fullWidth
                        variant="contained"
                        disabled={registerState.status.loading}
                        className={classes.signUpButton}
                        onClick={signup}
                        classes={{containedPrimary: buttonClasses.primaryContained}}
                    >
                        Crear cuenta
                    </Button>
                    </div>
                </div>
            </Box>
        </Modal>
        </div>
    );
}
