import { useImperativeHandle, useRef } from "react";
import { forwardRef } from "react";
import video1 from './Video/video-1.mp4'

function Video (props, ref){
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play (){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    return (
        <video 
        ref={videoRef}
        width={280}
        src={video1}
        />
    )
    }
    export default forwardRef(Video)