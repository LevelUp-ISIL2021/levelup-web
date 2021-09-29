import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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

export default function RegisterModal({ open, handleClose }) {

    function signup(){

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
                Regístrate
            </Typography>
            <TextField id="outlined-basic" label="Nombre(s)" variant="outlined" />
            <TextField id="outlined-basic" label="Apellido paterno" variant="outlined" />
            <TextField id="outlined-basic" label="Apellido materno" variant="outlined" />
            <TextField id="outlined-basic" label="DNI" variant="outlined" />
            <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
                id="outlined-password-input"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
            />
            <Button onClick={signup}>Crear cuenta</Button>
            </Box>
        </Modal>
        </div>
    );
}
