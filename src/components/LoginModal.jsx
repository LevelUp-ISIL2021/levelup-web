import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

import RegisterModal from "@components/RegisterModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 24,
    p: 4,
};

export default function LoginModal({ open, handleClose }) {
    const [openRegisterModal, setOpenRegisterModal] = React.useState(false);
    const handleOpenRegisterModal = () => setOpenRegisterModal(true);
    const handleCloseRegisterModal = () => {
        handleClose();
        setOpenRegisterModal(false);
    }

    function login() {

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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Inicia sesión
                </Typography>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                />
                <Button onClick={login}>Iniciar sesión</Button>
                <Button onClick={handleOpenRegisterModal}>Regístrate</Button>
            </Box>
        </Modal>
        <RegisterModal open={openRegisterModal} handleClose={handleCloseRegisterModal} />
        </div>
    );
}
