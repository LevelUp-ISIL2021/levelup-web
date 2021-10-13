import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (icon, title, description) => (
  <React.Fragment>
    <CardContent style={{textAlign: 'center'}}>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography> */}
      {icon}
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <br />
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      {/* <Button size="small">Ver más</Button> */}
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard({ icon, title, description }) {
  return (
    <Box sx={{ width: 275, margin: '0 15px', borderRadius: '10px', boxShadow: '5px 5px 2px 2px rgba(0, 0, 0, 0.2)' }}>
      <Card variant="outlined" style={{ height: 230 }}>{card(icon, title, description)}</Card>
    </Box>
  );
}
