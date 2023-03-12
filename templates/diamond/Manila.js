import Cover from '../../components/Wedding/Manila/Cover'
import Head from 'next/head'
import Comment from '../../components/Wedding/Manila/Comment'
import Countdown from '../../components/Wedding/Manila/Countdown'
import Footer from '../../components/Wedding/Manila/Footer'
import { useState } from 'react'
import Music from '../../components/Extra/Music'
import Intro from '../../components/Wedding/Manila/Intro'
import Verse from '../../components/Wedding/Manila/Verse'
import Storyboards from '../../components/Wedding/Manila/Storyboards'
import Agenda from '../../components/Wedding/Manila/Agenda'
import Album from '../../components/Wedding/Manila/Album'
import Giving from '../../components/Wedding/Manila/Giving'
import Outro from '../../components/Wedding/Manila/Outro'
import RSVP from '../../components/Wedding/Manila/RSVP'

const CoverAndMusic = ({contents}) => {

    const [playMusic, setPlayMusic] = useState(false)
    const [isPlayerReady, setPlayerReady] = useState(false)

    return (
        <>
            <Cover isPlayerReady={isPlayerReady} playMusicCallback={setPlayMusic} contents={contents.cover}/>
            <Music playerReadyCallback={setPlayerReady} musicUrl={contents.musicUrl} isMusicPlaying={playMusic} playMusicCallback={setPlayMusic}/>
        </>
    )

}

const MainContent = ({contents}) => {

    return (
        <>
                <Countdown contents={contents.countdown} />
                <Intro contents={contents.intro}/>
                <Verse contents={contents.verse}/>
                <Storyboards contents={contents.storyboards}/>
                <Agenda contents={contents.agenda}/>
                <Album contents={contents.album}/>
                <RSVP contents={contents.rsvp}/>
                <Giving contents={contents.giving}/>
                <Comment contents={contents.comment}/>
                <Outro contents={contents.outro}/>
        </>
    )
}

const Manila = ({contents}) => {


    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-[400px] xl:max-w-[500px] outline outline-offset-[10px] outline-[6px] outline-[#2d2e34]">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Website Undangan Pernikahan" />
                    <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                    <meta name="author" content="Radifan Fariz" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>BridesVow - Template</title>
                </Head>
                <CoverAndMusic contents={contents}></CoverAndMusic>
                <MainContent contents={contents}></MainContent>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Manila