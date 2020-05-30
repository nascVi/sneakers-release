import React from 'react'
import video from './video/PexelsVideos.mp4'

const BackgroundVideo = () => {
    return (
        <>
            <video
                autoPlay="autoplay"
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: 0,
                }}
            >
                <source src={video} type="video/mp4" />

            </video >
        </>
    )
}

export default BackgroundVideo
