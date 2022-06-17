import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
    display: 'flex',
    justifyContent: 'flex-start',
  },
  toolbar: theme.mixins.toolbar,
}));
