import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  content: {
    padding: theme.spacing(7),
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'deepskyblue',
    fontWeight: 'bolder',
    color: 'white',
  },
}));
