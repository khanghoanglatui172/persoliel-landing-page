'use client'
import React, {useRef, useState} from "react";

type VideoBannerProps = {
    src: string,
    classes: string
}

function VideoBanner({src, classes}: VideoBannerProps) {

    const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement);
    const [play, setPlay] = useState<boolean>(false);
    const onVideoClick = () => {
        setPlay((prev) => !prev)
        if(videoRef) {
            play ? videoRef.current.play() : videoRef.current.pause();
        }
    }
    return (
        <video ref={videoRef} autoPlay muted loop onClick={onVideoClick} className={classes}>
            <source src={src} type='video/mp4'/>
        </video>
    )

}

export default VideoBanner