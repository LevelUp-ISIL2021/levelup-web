import * as React from 'react';
// import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

// import LoginModal from "@components/LoginModal";

export default function Header() {

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <header>
      <div>
          <img
              src="img/levelup-logo.png"
              alt="Logo LevelUp"
              className="header-logo"
          />
      </div>
      <div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/levelup-web/">Inicio</Link>
            </li>
            <li>
              <Link to="/levelup-web/reviews">Reseñas</Link>
            </li>
            <li>
              <Link to="/levelup-web/downloads">Descargas</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {/* <Button onClick={handleOpen}>Inicia sesión</Button> */}
      </div>
      {/* <LoginModal open={open} handleClose={handleClose} /> */}
    </header>
  )
}