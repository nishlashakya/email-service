import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


interface THeaderProps {
    classes: any;
}

const AppHeader: React.FC<THeaderProps> = (props) => {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={props.classes.title}>
            Email sender
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default withStyles({})(AppHeader);
