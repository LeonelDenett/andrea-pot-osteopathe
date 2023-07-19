"use client";
// Mui Components
import { createTheme, ThemeOptions, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Font
import '@fontsource-variable/rubik';
// Cache Provider
import { NextAppDirEmotionCacheProvider } from './createEmotionCache';

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'Rubik Variable, sans-serif',
    },
};

let theme = createTheme(themeOptions);

theme = responsiveFontSizes(theme)

export default function ThemeRegistry({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <NextAppDirEmotionCacheProvider options={{key: "mui"}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}