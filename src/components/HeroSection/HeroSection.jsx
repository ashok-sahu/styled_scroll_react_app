import React from 'react'
import {HeroContainer,HeroBg,VideoBg} from './HeroStyle'
import Video from '../../assets/videos/Network.mp4'
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg muted autoPlay loop type='video/mp4' src={Video}/>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
