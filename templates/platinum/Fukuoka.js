import Cover from '../../components/Wedding/Fukuoka/Cover'
import Head from 'next/head'
import Comment from '../../components/Wedding/Fukuoka/Comment'
import Countdown from '../../components/Wedding/Fukuoka/Countdown'
import Footer from '../../components/Wedding/Fukuoka/Footer'
import { useState } from 'react'
import Music from '../../components/Extra/Music'
import Intro from '../../components/Wedding/Fukuoka/Intro'
import Verse from '../../components/Wedding/Fukuoka/Verse'
import Storyboards from '../../components/Wedding/Fukuoka/Storyboards'
import Agenda from '../../components/Wedding/Fukuoka/Agenda'
import Album from '../../components/Wedding/Fukuoka/Album'
import Giving from '../../components/Wedding/Fukuoka/Giving'
import Outro from '../../components/Wedding/Fukuoka/Outro'
import RSVP from '../../components/Wedding/Fukuoka/RSVP'

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

const Fukuoka = ({contents}) => {


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

export default Fukuoka