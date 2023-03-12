import dynamic from 'next/dynamic'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const playerStyle = {
    'visibility': 'hidden',
    'zIndex': '-10',
    'position': 'fixed',
}

const Music = ({ playerReadyCallback, musicUrl, isMusicPlaying, playMusicCallback }) => {

    const handlePlayMusic = () => {
        playMusicCallback(!isMusicPlaying)
    }

    const handleOnReady = () => {
        playerReadyCallback(true)
    }


    return (
        <>
            <div className="fixed z-40 bottom-10 pl-2">
                <div className="relative flex items-end text-[2.50rem] rounded-full text-gray-400">
                    <label className="swap">

                        <input type="checkbox" className="hidden" onChange={handlePlayMusic} />

                        <div className="swap-on">
                            <AiFillPlayCircle />
                        </div>

                        <div className="swap-off">
                            <AiFillPauseCircle />
                        </div>

                    </label>
                </div>
            </div>
            <ReactPlayer onReady={handleOnReady} playing={isMusicPlaying} style={playerStyle} url={musicUrl} />
        </>
    )
}


export default Music