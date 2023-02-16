import { ThemeProvider } from "next-themes";
import { darkTheme, globalCss } from "stitches.config";
import type { AppProps } from "next/app";

import { useEffect, useState } from "react";
import React from "react";

const globalStyles = globalCss({
  html: {
    overflowX: "hidden",
  },

  body: {
    margin: 0,
    backgroundColor: "$mauve1",
    color: "$mauve12",
  },

  "body, button": {
    fontFamily: "$untitled",
  },

  svg: { display: "block" },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$mint11",
    color: "$sage1",
  },
  "*": {
    boxSizing: "border-box",
  },
  h1: {
    fontSize: "$6",
    fontWeight: 500,
  },
  "h2, h3": {
    fontSize: "$5",
    fontWeight: 500,
  },
});


export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="light"
    >
        {mounted ? (
          (<Component {...pageProps} />)
        ) : (
          <div style={{ visibility: "hidden" }}>
            <Component {...pageProps} />
          </div>
        )}
    </ThemeProvider>
  );
}