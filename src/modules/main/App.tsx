import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles, useTheme } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//components
import Navbar from 'src/components/navbar';
import { Grid } from '@material-ui/core';
import Filters from 'src/modules/main/Filters';

const App = (): JSX.Element => {
    const customTheme = createMuiTheme({
        spacing: 0,
        palette: {},
    });

    const theme = useTheme();
    console.log(theme);
    const styles = makeStyles({
        root: {},
    });

    const classes = styles();

    return (
        <CssBaseline>
            <ThemeProvider theme={customTheme}>
                <Grid container className={classes.root}>
                    <Navbar />
                    <Filters />
                    <Grid container>
                        <div>This is app.tsx</div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </CssBaseline>
    );
};
export default App;
