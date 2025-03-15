import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import myVideo from '../../../public/videos/leadin.mp4'

export default function VideoComponent() {
    const [loadData, setLoadData] = useState(false);
    const onLoadedData = () => {
        setLoadData(true);
    }
    return (
        <ReactPlayer
            url={myVideo}
            playing={true}
            controls={false}
            loop={true}
            muted={true}
            playsinline={true}
            onReady={onLoadedData}
            width='100%'
            height='100%'
            style={{ objectFit: 'contain' }}


        />
    )
}
