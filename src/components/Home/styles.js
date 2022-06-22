import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  main: {},
  root: {
    display: 'flex',
    paddingTop: theme.spacing(8),
    paddingLeft: 0,
    position: 'relative',
    left: 0,
    top: '-3px',
    width: '100%',
    flexDirection: 'row',
  },
  m1: {
    height: '90vh',
    padding: 0,
    backgroundColor: '#89CFF0',
    width: '50%',
  },
  homeTitle: {
    paddingRight: '110px',
    fontFamily: 'Ultra',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: '700',
    color: 'black',
    marginLeft: '100px',
    marginBottom: '-20px',
  },
  imageDiv: {
    height: '90vh',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    objectFit: 'cover',
    overflow: 'hidden',
  },
  textAndButtons: {
    marginTop: '50px',
    display: 'grid',
    placeItems: 'center',
  },
  textLeft: {
    display: 'grid',
    placeItems: 'left',
  },

  media: {
    width: '100%',
    height: '50%',
  },
  buttonDiv: {
    display: 'flex',
    marginBottom: '40px',
  },
  shopButton: {
    marginTop: '50px',
    borderRadius: '30px !important', //need !important to round button or else another class is overtaking it
    backgroundColor: 'white',
    position: 'relative',
  },
  m2: {
    display: 'flex',
    justifyContent: 'center',
  },
  root2: {
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
    paddingLeft: 0,
    justifyContent: 'center',
    marginTop: '20px',
  },
  m2Text: {
    marginTop: '10px',
    textAlign: 'center',
    width: '30%',
  },
  title: {
    fontWeight: 'bolder',
  },
  bottomTwoImg: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  media2: {
    width: '50%',
  },
  root3: {
    display: 'flex',
    position: 'relative',
    marginTop: '70px',
    textAlign: 'center',
    flexDirection: 'column',
  },
}));
