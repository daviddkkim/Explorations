import Image from 'next/image'
import { styled } from 'stitches.config'
import { animate, spring, timeline } from "motion"
import React, { useEffect, useRef, useState } from 'react'
import { BatteryIcon, WifiIcon, SpinnerIcon } from '@iconicicons/react'



const MainBlock = styled("div", {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
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
    border: '1px solid $mauveA4',
    padding: "$3",
    borderRadius: '6px',
    background: 'linear-gradient(transparent,$mauve1)',
    flexDirection: 'column',
    width: '100%',
    gap: '$2',

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
    border: '1px solid $mauve5',
    background: 'linear-gradient(transparent, $colors$mauve3)',
    backdropFilter:'blur(10px)',
    borderRadius: '6px',
    width: 'fit-content',
    padding: '$2',
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    overflow: 'hidden',
    transition: 'all 150ms ease-out'
})

const TableContainer = styled('div', {
    display: ' flex',
    flexDirection: ' column',
    gap: '$1'
})
const TableHeader = styled('div', {
    background: '$mauve8',
    display: 'flex',
    gap: '$1',
    width: '100%',
    height: '24px',
    borderRadius: '6px'
})
const TableRow = styled('div', {
    display: 'flex',
    gap: '$2',
    borderBottom: '1px solid $mauve5',
    padding: '$2',
    paddingBottom: 'calc($2 + $1)'
})

const Line = styled('div', {
    width: '100%',
    height: '1px',
    borderBottom: '1px solid $mauve6',
    transition: 'all 150ms ease-out'
})

const Button = styled('button', {
    background: "linear-gradient(180deg, $colors$mauve3 35.22%, $colors$mauve5 100%)",
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.03)',
    border: '1px solid $mauveA1',
    padding: "10px 20px",
    lineHeight: '12px',
    borderRadius: '6px',
    fontSize: '$3',
    display: 'flex',
    gap: '$2',
    alignItems: 'center',
    "&:hover:not(:disabled)": {
        background: '$colors$mauve5'
    }
})


export default function AnimatedThing() {





    const [additionalReadySetRow, setadditionalReadySetRow] = useState(0)
    /*   const [reads, setReads] = useState(0);
     */

    const animateFirstTable = () => {
        timeline(
            [
                ["#tableCell1", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell2", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell3", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell4", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell5", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell6", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell7", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell8", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell9", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell10", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell11", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell12", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell13", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
            ], {
            repeat: 1
        }
        );
    }

    const animateNewCell = () => {
        animate('.newcell', {
            backgroundColor: 'red'
        },
            { easing: "ease-out", duration: 1 })
    }

    const animateSecondTable = () => {
        timeline(
            [
                ["#tableCell14", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell15", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell16", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell17", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell18", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell19", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell20", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell21", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell22", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell23", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell24", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell25", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell26", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell27", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell28", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell29", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }],
                ["#tableCell30", { backgroundColor: ["'hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)'] }, { easing: 'ease-out', duration: .07 }]
            ], {
            repeat: 1
        }
        );
    }
    /*
    
    hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)
    hsl(245, 4.9%, 25.4%)'", "hsl(247, 3.4%, 50.7%)", 'hsl(245, 4.9%, 25.4%)
    const mauveDark = {
      mauve1: 'hsl(246, 6.0%, 9.0%)',
      mauve2: 'hsl(240, 5.1%, 11.6%)',
      mauve3: 'hsl(241, 5.0%, 14.3%)',
      mauve4: 'hsl(242, 4.9%, 16.5%)',
      mauve5: 'hsl(245, 4.9%, 25.4%)',
      mauve6: 'hsl(244, 4.9%, 21.5%)',
      mauve7: 'hsl(245, 4.9%, 25.4%)',
      mauve8: 'hsl(247, 3.4%, 50.7%)',
      mauve9: 'hsl(252, 4.0%, 45.2%)',
      mauve10: 'hsl(247, 3.4%, 50.7%)',
      mauve11: 'hsl(253, 4.0%, 63.7%)',
      mauve12: 'hsl(256, 6.0%, 93.2%)',
    }
    
    const mauve = {
      mauve1: 'hsl(300, 20.0%, 99.0%)',
      mauve2: 'hsl(300, 7.7%, 97.5%)',
      mauve3: 'hsl(294, 5.5%, 95.3%)',
      mauve4: 'hsl(289, 4.7%, 93.3%)',
      mauve5: 'hsl(283, 4.4%, 91.3%)',
      mauve6: 'hsl(247, 3.4%, 50.7%)',
      mauve7: 'hsl(271, 3.9%, 86.3%)',
      mauve8: 'hsl(255, 3.7%, 78.8%)',
      mauve9: 'hsl(252, 4.0%, 57.3%)',
      mauve10: 'hsl(247, 3.4%, 50.7%)',
      mauve11: 'hsl(252, 4.0%, 44.8%)',
      mauve12: 'hsl(260, 25.0%, 11.0%)',
    }
    
    */
    const animateLineTransfer = (line: string, fast?: boolean) => {

        if (line.includes('hidden')) {
            timeline([
                [line,
                    { visibility: 'visible' }, { easing: "ease-in", duration: 0.1 }],
                [line,
                    {
                        borderBottom: ['2px dashed hsl(244, 4.9%, 21.5%)', '2px dashed hsl(247, 3.4%, 50.7%)', '2px dashed hsl(247, 3.4%, 50.7%)', '2px dashed hsl(247, 3.4%, 50.7%)', '2px dashed hsl(247, 3.4%, 50.7%)', '1px solid hsl(244, 4.9%, 21.5%)'],

                    }
                    , { easing: "ease-in", duration: 2 },],
                [line,
                    { visibility: 'hidden' }, { easing: "ease-in", duration: 0.1 }]
            ])
            animate('#rtable', {
                scale: [1.15, 1]
            }, { easing: spring(), duration: 0.5, repeat: 2 })
        } else {

            animate(line,
                { borderBottom: ['2px dashed hsl(244, 4.9%, 21.5%)', '2px dashed hsl(247, 3.4%, 50.7%)', '2px dashed hsl(247, 3.4%, 50.7%)', '2px dashed hsl(247, 3.4%, 50.7%)', '2px dashed hsl(247, 3.4%, 50.7%)', '1px solid hsl(244, 4.9%, 21.5%)'] }
                , { easing: "ease-in", duration: fast ? 0.1 : 2.75 },)
        }
    }

    const animateReadysetTableinit = () => {
        animate("#rtable", {
            maxHeight: ['66px', '193px'],
        },
            { easing: spring(), duration: 3, delay: 2.75 })

    }




    useEffect(() => {
        animateSecondTable();
        animateLineTransfer('#line2');
        animateReadysetTableinit();
    }, [])

    useEffect(() => {
        if (additionalReadySetRow < 1) return;
        console.log('here')
        animate(('#table2'), {
            maxHeight: [`${190 + (37 * (additionalReadySetRow - 1))}}px`, `${193 + (37 * additionalReadySetRow)}px`]
        }, { easing: spring(), duration: 1, delay: 0.25 })

        timeline([
            [('#table2'), {
                maxHeight: [`${190 + (45 * (additionalReadySetRow - 1))}}px`, `${193 + (45 * additionalReadySetRow)}px`]
            }, { easing: spring(), duration: 0.5, delay: 0.1 }],
            [('#rtable'), {
                maxHeight: [`${190 + (45 * (additionalReadySetRow - 1))}}px`, `${193 + (45 * additionalReadySetRow)}px`]
            }, { easing: spring(), duration: 0.5, delay: 0.1 }],
        ],)
    }, [additionalReadySetRow])

    const renderAdditionalRow = (readySet?: boolean) => {
        let additionalrows = []
        for (let i = 0; i < additionalReadySetRow; i++) {

            readySet ? additionalrows.push(
                <TableRow key={i} id={"newRow" + (i + 1)}>
                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} className='newcell' />
                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} className='newcell' />
                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} className='newcell' />
                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} className='newcell' />

                </TableRow>)

                :
                additionalrows.push(
                    <TableRow key={i} id={"newRow" + (i + 1)}>
                        <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} className='newcell' />
                        <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} className='newcell' />
                        <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} className='newcell' />
                    </TableRow>)
        }
        return additionalrows;
    }

    const transferReadTable = () => {
        animate('#rtable', {
            scale: [1.05, 1]
        }, { easing: spring(), duration: 0.5 })
        animate('#readTable',
            {
                scale: 0.4,
                right: ['50%', '80%'],
                opacity: [0, 1],
                visibility: ['hidden', 'visible', 'hidden']
            }, { easing: spring(), duration: 0.5 })
    }


    return (
        <MainBlock>
            <Box css={{
                maxWidth: '600px',
                width: '100%'
            }}>
                <Button css={{
                    position: 'absolute',
                    bottom: 24,
                    zIndex: 9999
                }}
                    onClick={() => {
                        animateLineTransfer('#line1')
                        animateLineTransfer('.hiddenLine')
                    }}>
                    Show me
                </Button>
                <Box css={{
                    height: '100%',
                    width: '100%',
                    justifyContent: 'space-between',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }}
                >
                    <Box css={{
                        position: 'absolute',
                        right: '50%',
                        top: '50%',
                        transform: 'translate(50%,-50%)',
                        visibility: 'hidden',
                    }}
                        id="readTable">
                        <GlossyCard css={{
                        }}>
                            <TableContainer css={{ flexDirection: 'column' }}>
                                <TableHeader></TableHeader>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell1"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell2"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell3"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell4"} />
                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell5"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell6"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell7"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell8"} />

                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell9"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell10"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell11"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell12"} />
                                </TableRow>
                                {
                                    additionalReadySetRow > 0 && renderAdditionalRow(true).map((row) => { return row })
                                }
                            </TableContainer>
                        </GlossyCard>
                    </Box>
                    <Box css={{
                        width: '100%',
                        gap: '$2',
                        flexDirection: 'column'
                    }}>
                        <Line className='hiddenLine' css={{
                            visibility: 'hidden'
                        }} />
                        <Line className='hiddenLine' css={{
                            visibility: 'hidden'
                        }} />
                        <Line className='hiddenLine' css={{
                            visibility: 'hidden'
                        }} />
                        <Line id="line1" />
                        <Line className='hiddenLine' css={{
                            visibility: 'hidden'
                        }} />
                        <Line className='hiddenLine' css={{
                            visibility: 'hidden'
                        }} />
                        <Line className='hiddenLine' css={{
                            visibility: 'hidden'
                        }} />
                    </Box>
                    <Box css={{
                        flexDirection: 'column',
                        gap: '$3',

                    }}>
                        <GlossyCard css={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid $mauve5'
                        }}>
                            <Image src={"Logo.svg"} height={24} width={24} alt={'ReadySet Logo'}></Image>
                        </GlossyCard>
                        <GlossyCard id="rtable" css={{
                            marginBottom: '86px'
                        }}>
                            <TableContainer css={{ flexDirection: 'column' }}>
                                <TableHeader></TableHeader>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell1"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell2"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell3"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell4"} />
                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell5"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell6"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell7"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell8"} />

                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell9"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell10"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell11"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell12"} />
                                </TableRow>
                                {
                                    additionalReadySetRow > 0 && renderAdditionalRow(true).map((row) => { return row })
                                }
                            </TableContainer>
                        </GlossyCard>
                    </Box>
                    <Box css={{
                        width: '100%'
                    }}>
                        <Line id="line2" />
                    </Box>
                    <Box css={{
                        flexDirection: 'column',
                        gap: '$3',
                        position: 'relative',
                        minWidth: '160px'

                    }}> <GlossyCard css={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid $mauve5'

                    }}>
                            <Image src={"database.svg"} height={24} width={24} alt={'Database Icon'}></Image>
                        </GlossyCard>
                        <GlossyCard
                            id="table1"
                            css={{
                                marginBottom: '86px'
                            }}>
                            <TableContainer css={{ flexDirection: 'column' }}>
                                <TableHeader></TableHeader>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell13"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell14"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell15"} />
                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell16"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell17"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell18"} />
                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell19"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell20"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell21"} />
                                </TableRow>

                            </TableContainer>
                        </GlossyCard>
                        <GlossyCard css={{
                            position: 'absolute',
                            right: 0,
                            bottom: -38,
                        }}
                            id="table2"
                        >
                            <TableContainer css={{ flexDirection: 'column' }}>
                                <TableHeader></TableHeader>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell22"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell23"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell24"} />
                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell25"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell26"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell27"} />
                                </TableRow>
                                <TableRow>
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell28"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell29"} />
                                    <Box css={{ backgroundColor: '$mauve7', width: '24px', height: '12px', borderRadius: '6px' }} id={"tableCell30"} />
                                </TableRow>
                                {
                                    additionalReadySetRow > 0 && renderAdditionalRow().map((row) => { return row })
                                }
                            </TableContainer>
                        </GlossyCard>
                    </Box>
                </Box>
            </Box>
        </MainBlock>
    )
}
