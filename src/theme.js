import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#fff8e6",
          200: "#fff1cd",
          300: "#ffebb5",
          400: "#ffe49c",
          500: "#ffdd83",
          600: "#ccb169",
          700: "#99854f",
          800: "#665834",
          900: "#332c1a",
        },
        secondary: {
          100: "#fbdecc",
          200: "#f6bd99",
          300: "#f29b66",
          400: "#ed7a33",
          500: "#e95900",
          600: "#ba4700",
          700: "#8c3500",
          800: "#5d2400",
          900: "#2f1200",
        },
        black: {
          100: "#d0d4d9",
          200: "#a0aab3",
          300: "#717f8e",
          400: "#415568",
          500: "#122a42",
          600: "#0e2235",
          700: "#0b1928",
          800: "#07111a",
          900: "#04080d",
        },
      }
    : {
        primary: {
          100: "#fff8e6",
          200: "#fff1cd",
          300: "#ffebb5",
          400: "#ffe49c",
          500: "#ffdd83",
          600: "#ccb169",
          700: "#99854f",
          800: "#665834",
          900: "#332c1a",
        },
        secondary: {
          100: "#fbdecc",
          200: "#f6bd99",
          300: "#f29b66",
          400: "#ed7a33",
          500: "#e95900",
          600: "#ba4700",
          700: "#8c3500",
          800: "#5d2400",
          900: "#2f1200",
        },
        black: {
          100: "#d0d4d9",
          200: "#a0aab3",
          300: "#717f8e",
          400: "#415568",
          500: "#122a42",
          600: "#0e2235",
          700: "#0b1928",
          800: "#07111a",
          900: "#04080d",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.secondary[700],
              main: colors.secondary[500],
              light: colors.secondary[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.secondary[700],
              main: colors.secondary[500],
              light: colors.secondary[100],
            },
            background: {
              default: "#fffefb",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
