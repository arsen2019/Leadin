import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import myVideo from '../../../public/videos/001-v3.mp4'

export default function VideoComponent() {
    const [loadData, setLoadData] = useState(false);
    const onLoadedData = () => {
        setLoadData(true);
    }
    return (
        <ReactPlayer
            url={myVideo}
            playing={true}
            controls={true}
            loop={true}
            muted={true}
            playsinline={true}
            onReady={onLoadedData}
            width='500px'

        />
    )
}
