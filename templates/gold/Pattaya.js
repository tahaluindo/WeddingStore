import Cover from '../../components/Wedding/Pattaya/Cover'
import Head from 'next/head'
import Comment from '../../components/Wedding/Pattaya/Comment'
import Countdown from '../../components/Wedding/Pattaya/Countdown'
import Footer from '../../components/Wedding/Pattaya/Footer'
import { useState } from 'react'
import Music from '../../components/Extra/Music'
import Intro from '../../components/Wedding/Pattaya/Intro'
import Verse from '../../components/Wedding/Pattaya/Verse'
import Storyboards from '../../components/Wedding/Pattaya/Storyboards'
import Agenda from '../../components/Wedding/Pattaya/Agenda'
import Album from '../../components/Wedding/Pattaya/Album'
import Giving from '../../components/Wedding/Pattaya/Giving'
import Outro from '../../components/Wedding/Pattaya/Outro'

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

const Pattaya = ({contents}) => {


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

export default Pattaya