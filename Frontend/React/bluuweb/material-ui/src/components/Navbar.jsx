import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240
    }
}))

function Navbar() {
    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.appBar   }>
              <Toolbar>
                  <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                      <MenuIcon/>
                  </IconButton>
                <Typography variant="h6" className={classes.title}>
                  pepe
                </Typography>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar