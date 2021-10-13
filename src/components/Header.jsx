import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import useButtonStyles from '../utils/styles/buttonStyles';
import LoginModal from "@components/LoginModal";

export default function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonClasses = useButtonStyles();

  return (
    <header>
      <div>
        <Link to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/img/levelup-logo.png`}
            alt="Logo LevelUp"
            className="header-logo"
          />
          <h2>LevelUp</h2>
          </div>
        </Link>
      </div>
      <div>
        <nav className="header-nav">
          <ul>
            <li>
              {/* <Link to="/">Inicio</Link> */}
            </li>
            <li>
              {/* <Link to="/reviews">Reseñas</Link> */}
            </li>
            <li>
              {/* <Link to="/downloads">Descargas</Link> */}
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={handleOpen}
          classes={{outlinedPrimary: buttonClasses.primaryOutlined}}
        >
          Iniciar sesión
        </Button>
      </div>
      <LoginModal open={open} handleClose={handleClose} />
    </header>
  )
}