import React from 'react'
import { HeroElm, HeroCopy } from "./HeroStyles"

const Hero = () => {
    return (
        <HeroElm>
            <HeroCopy>
                <h1>
                    My name is <a href="https://www.instagram.com/jaywerra/" target="_blank" rel="noopener noreferrer">Jay Werra</a>, I'm a front end developer & designer living in Los Angeles. I work with brands large & small to build memorable digital experiences.
                </h1>
                <p>
                    Currently accepting projects for Q3
                </p>
            </HeroCopy>
        </HeroElm>
    )
}

export default Hero
