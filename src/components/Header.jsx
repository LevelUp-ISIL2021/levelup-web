import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import useButtonStyles from '../utils/styles/buttonStyles';
import LoginModal from "@components/LoginModal";
import UserContext from '../context/UserContext';

import axios from 'axios';
import { BASE_API, ACCOUNT_ENDPOINT } from '../utils/appConstants';

export default function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userState, setUserState] = React.useState({
    loading: true
  });

  const { user, setUser } = React.useContext(UserContext);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(BASE_API + ACCOUNT_ENDPOINT, {headers: { 'x-access-token': token } })
      .then((res) => {
          console.log('Get current user response:', res);
          setUser(res.data);
          setUserState({
            loading: false
          });
      }, (err) => {
          console.log('Get current user err:', err.response);
          setUserState({
            loading: false
          });
      });
  }, [setUser]);

  const buttonClasses = useButtonStyles();

  function logoutUser() {
    setUserState({
      loading: true
    });
    localStorage.removeItem('token');
    setUser(null);
    setUserState({
      loading: false
    });    
  }

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
      <div style={{ justifyContent: 'left' }}>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/reviews">Reseñas</Link>
            </li>
            <li>
              <Link to="/downloads">Descargas</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {
          userState.loading ?
            <p></p>
          :
          user ?
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ margin: '0 5px' }} />
            <p>{user.firstname} {user.lastnamefather}</p>
            <Button
              sx={{ margin: '0 15px' }}
              variant="outlined"
              onClick={logoutUser}
              classes={{outlinedPrimary: buttonClasses.primaryOutlined}}
            >
              Cerrar sesión
            </Button>
          </div>
          :
            <Button
              variant="contained"
              onClick={handleOpen}
              classes={{containedPrimary: buttonClasses.primaryContained}}
            >
              Iniciar sesión
            </Button>
        }
      </div>
      <LoginModal open={open} handleClose={handleClose} />
    </header>
  )
}