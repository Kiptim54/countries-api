import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//components
import Navbar from 'src/components/navbar';

const theme = createMuiTheme({
    palette: {},
});

const App = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <div>This is app.tsx</div>
        </>
    );
};
export default App;
