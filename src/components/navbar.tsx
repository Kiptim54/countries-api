import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">Where in the world?</Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
