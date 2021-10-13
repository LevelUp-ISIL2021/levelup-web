import { makeStyles } from '@mui/styles';

const useButtonStyles = makeStyles({
    primaryContained: {
      backgroundColor: 'rgba(254,105,29,0.8) !important',
      '&:hover': {
        backgroundColor: '#fe691d !important',
      }
    },
    primaryOutlined: {
        borderColor: '#fe691d !important',
        color: '#fe691d !important',
        '&:hover': {
            backgroundColor: 'rgba(254,105,29,0.05) !important',
            borderColor: '#fe691d !important',
        }
    }
});

export default useButtonStyles;