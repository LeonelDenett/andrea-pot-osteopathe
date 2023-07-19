"use client";
// Mui Components
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Font
import '@fontsource-variable/rubik';
// Cache Provider
import { NextAppDirEmotionCacheProvider } from './createEmotionCache';

const themeOptions: ThemeOptions = {
    typography: {
        fontSize: 16,
        fontFamily: 'Rubik Variable, sans-serif',
    }
};

const theme = createTheme(themeOptions);

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