import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import ColorModeContext from './store/ColorModeContext'
import {useMemo, useState} from "react";
import CartContextProvider from "./store/CartContextProvider";

function App (){
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline >
                    <CartContextProvider>
                        <Header/>
                        <Main/>
                        <Footer/>
                    </CartContextProvider>
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    ) ;
}

export default App;