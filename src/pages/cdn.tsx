import Head from 'next/head'
import { Inter } from '@next/font/google'
import { styled } from 'stitches.config'
import React, { useEffect, useRef } from 'react'
import createGlobe from "cobe";



const MainBlock = styled("div", {
    height: '100vh',
    width: '100vw',
    backgroundColor: '$mauve1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',
})


export default function Home() {




    const canvasRef = useRef(null);

    useEffect(() => {
        let phi = 0;
        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 }
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);




    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainBlock css={{
                flexDirection: 'column'
            }}>
                <h1>
                    Global CDN for your database
                </h1>
                <canvas
                    ref={canvasRef}
                    style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                />
            </MainBlock>
        </>
    )
}
