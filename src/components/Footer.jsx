import React from 'react';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles({
    footer: {
        padding: '15px 50px',
        backgroundColor: 'rgba(0,0,0, 0.9)',
        color: 'white',
        '&>div': {
            margin: '20px auto 50px'
        },
        '& ul': {
            display: 'flex',
            justifyContent: 'center',
            padding: '0'
        },
        '& ul li': {
            display: 'inline'
        }
    },
    heading: {
        textAlign: 'center'
    },
    socialLinksSection: {
        '& li': {
            margin: '5px 20px',
        }        
    },
    hashtagSection: {
        paddingRight: '45px',
        fontSize: '1.5rem',
        '& li': {
            width: '200px',
            margin: '5px 20px',
        },
        '& li:nth-child(1)': {
            textAlign: 'right'
        },
        '& li:nth-child(2)': {
            textAlign: 'left'
        }
    },
    copyrightSection: {
        '& p': {
            textAlign: 'center'
        }
    }
});
  

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <h2 className={classes.heading}>Síguenos en nuestras redes</h2>
            <div className={classes.socialLinksSection}>
                <ul>
                    <li><FacebookIcon fontSize="large" /></li>
                    <li><InstagramIcon fontSize="large" /></li>
                    <li><YouTubeIcon fontSize="large" /></li>
                </ul>
            </div>

            <div className={classes.hashtagSection}>
                <ul>
                    <li>@LevelUp</li>
                    <li>#AprendeJugando</li>
                </ul>
            </div>

            <div className={classes.copyrightSection}>
                <p>© ISIL Technologies 2021</p>
                <p>Lima - Perú</p>
            </div>
        </footer>
    )
}