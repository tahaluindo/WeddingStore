import Cover from '../../components/Wedding/Songkhla/Cover'
import Head from 'next/head'
import Comment from '../../components/Wedding/Songkhla/Comment'
import Countdown from '../../components/Wedding/Songkhla/Countdown'
import Footer from '../../components/Wedding/Songkhla/Footer'
import { useState } from 'react'
import Music from '../../components/Extra/Music'
import Intro from '../../components/Wedding/Songkhla/Intro'
import Verse from '../../components/Wedding/Songkhla/Verse'
import Storyboards from '../../components/Wedding/Songkhla/Storyboards'
import Agenda from '../../components/Wedding/Songkhla/Agenda'
import Album from '../../components/Wedding/Songkhla/Album'
import Giving from '../../components/Wedding/Songkhla/Giving'
import Outro from '../../components/Wedding/Songkhla/Outro'

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
                <Comment contents={contents.comment}/>
                <Giving contents={contents.giving}/>
                <Outro contents={contents.outro}/>
        </>
    )
}

const Songkhla = ({contents}) => {


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

export default Songkhla