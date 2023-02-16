import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { styled } from 'stitches.config'
import { Table } from '@geist-ui/core'
import { animate, spring, timeline } from "motion"
import React, { useEffect, useLayoutEffect } from 'react'
import { BatteryIcon, WifiIcon } from '@iconicicons/react'


const inter = Inter({ subsets: ['latin'] })

const MainBlock = styled("div", {
  height: '100vh',
  width: '100vw',
  backgroundColor: '$mauve1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
})

const Box = styled("div", {
  display: 'flex'
})

const Card = styled("div", {
  display: "flex",
  border: '1px solid $mauveA5',
  padding: "$3",
  borderRadius: '6px',
  backgroundColor: '$mauveA2',
  flexDirection: 'column',
  width: '100%',
  gap: '$2'
})
const CardTitle = styled("h3", {
  fontSize: '$4',
  lineHeight: '130%',
  fontWeight: '500',
  color: '$mauve12',
  margin: 0,
})
const CardDescription = styled("p", {
  margin: 0,
  fontSize: '$3',
  lineHeight: '130%',
  color: '$mauve11',
})

const GlossyCard = styled('div', {
  boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.03), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.01);',
  border: '1px solid $mauveA3',
  background: 'linear-gradient(180deg, #FFFFFF 35.22%, #F3F4F6 100%)',
  borderRadius: '6px',
  width: 'fit-content',
  padding: '$3',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  overflow: 'hidden'
})

const TableContainer = styled('div', {
  display: ' flex',
  flexDirection: ' column',
  gap: '$1'
})
const TableHeader = styled('div', {
  background: '$mauve2',
  border: '1px solid $mauve5',
  display: 'flex',
  gap: '$1',
  width: '100%',
  height: '36px',
  borderRadius: '6px'
})
const TableRow = styled('div', {
  display: 'flex',
  gap: '$2',
  borderBottom: '1px solid $mauve5',
  padding: '$2'
})

const Line = styled('div', {
  width: '100%',
  height: '1px',
  borderBottom: '1px solid $mauve6',
  transition: 'all 150ms ease-out'
})

export default function Home() {

  useEffect(() => {

    timeline(
      [
        /*   ["#tableCell1", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell2", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell3", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell4", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell5", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell6", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell7", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell8", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell9", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell10", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell11", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell12", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
          ["#tableCell13", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }], */
        ["#tableCell14", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell15", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell16", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell17", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell18", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell19", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell20", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell21", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell22", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell23", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell24", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell25", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell26", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell27", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell28", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell29", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }],
        ["#tableCell30", { backgroundColor: ["dark-gray", "white", 'hsl(283, 4.4%, 91.3%)'] }, { easing: 'ease-out', duration: .07 }]
      ], {
      repeat: 1
    }
    );

      animate('#line2',
      { borderBottom: ['2px dashed hsl(278, 4.1%, 89.1%)', '1px dashed black','2px dashed hsl(278, 4.1%, 89.1%)','1px dashed black','2px dashed hsl(278, 4.1%, 89.1%)','1px solid hsl(278, 4.1%, 89.1%)'] }
      , { easing: "ease-in", duration: 2.75 },)

    animate("#rtable", {
      maxHeight: ['66px', '300px'],
      backgroundColor: ['black', 'inherit']
    },
      { easing: spring(), duration: 3, delay: 2.75 })


  }, [])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBlock>
        <Box css={{
          maxWidth: '1280px',
          width: '100%'
        }}>
          <Box css={{
            height: '100%',
            width: '100%',
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center'
          }}
          >
            <Box css={{
              borderRadius: '20px',
              flexDirection: 'column',
              gap: '$3',
              padding: '0 $4 $3 $4',
              border: '1px solid $mauve5',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.03), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.01)',
            }}>
              <Box css={{
                gap: '$2',
                width: '100%',
                justifyContent: ' flex-end',
                marginTop: '$1'
              }}>
                <Image src={"5g.svg"} height={20} width={20} alt={'5g icon'}></Image>
                <BatteryIcon width={20} height={20} />
                <WifiIcon width={20} height={20} />
              </Box>
              <Card>
                <div>
                  <CardTitle>
                    Lightning fast look up
                  </CardTitle>
                  <CardDescription>
                    Near-instant latency on cache hits.
                  </CardDescription>
                </div>
                <button style={{
                  width: 'fit-content',
                  marginTop: '16px'
                }}
                  onClick={() => {
                    animate('#line1',
                      { backgroundColor: ["red", "green", "blue", "yellow", "gray"], height: ['10px', '2px', '6px', '3px', '1px'] }
                      , { easing: "ease-out", duration: 2 },)
                  }}
                >
                  Try me
                </button>
              </Card>
              <Card>
                <div>
                  <CardTitle>
                    Self-updating cache
                  </CardTitle>
                  <CardDescription>
                    Don’t worry about stale reads or implementing cache invalidation.
                  </CardDescription>
                </div>
                <button style={{
                  width: 'fit-content',
                  marginTop: '16px'
                }} >
                  Show me
                </button>
              </Card>
              <Card>
                <div>
                  <CardTitle>
                    Scale your reads
                  </CardTitle>
                  <CardDescription>
                    Protect your database from traffic and horizontally scale.
                  </CardDescription>
                </div>
                <button style={{
                  width: 'fit-content',
                  marginTop: '16px'
                }}>
                  Try me
                </button>
              </Card>
            </Box>
            <Line
              id='line1' />
            <Box css={{
              flexDirection: 'column',
              gap: '$3',

            }}>
              <GlossyCard css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image src={"Logo.svg"} height={36} width={36} alt={'ReadySet Logo'}></Image>
              </GlossyCard>
              <GlossyCard id="rtable" css={{
                marginBottom: '86px'
              }}>
                <TableContainer css={{ flexDirection: 'column' }}>
                  <TableHeader></TableHeader>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell1"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell2"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell3"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell4"} />
                  </TableRow>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell5"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell6"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell7"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell8"} />

                  </TableRow>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell9"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell10"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell11"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell12"} />

                  </TableRow>


                </TableContainer>
              </GlossyCard>
            </Box>
            <Line id="line2" />
            <Box css={{
              flexDirection: 'column',
              gap: '$3',
              position: 'relative',
              minWidth: '320px'

            }}> <GlossyCard css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <Image src={"database.svg"} height={36} width={36} alt={'Database Icon'}></Image>
              </GlossyCard>
              <GlossyCard
                id="table1"
                css={{
                  marginBottom: '86px'
                }}>
                <TableContainer css={{ flexDirection: 'column' }}>
                  <TableHeader></TableHeader>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell13"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell14"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell15"} />
                  </TableRow>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell16"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell17"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell18"} />
                  </TableRow>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell19"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell20"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell21"} />
                  </TableRow>


                </TableContainer>
              </GlossyCard>
              <GlossyCard css={{
                position: 'absolute',
                right: -20,
                bottom: -108,
              }}
                id="table2"
              >
                <TableContainer css={{ flexDirection: 'column' }}>
                  <TableHeader></TableHeader>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell22"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell23"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell24"} />
                  </TableRow>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell25"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell26"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell27"} />
                  </TableRow>
                  <TableRow>
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell28"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell29"} />
                    <Box css={{ backgroundColor: '$mauve5', width: '40px', height: '20px', borderRadius: '6px' }} id={"tableCell30"} />
                  </TableRow>


                </TableContainer>
              </GlossyCard>
            </Box>
          </Box>
        </Box>
      </MainBlock>
    </>
  )
}
