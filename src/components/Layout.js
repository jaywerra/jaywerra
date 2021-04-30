import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { HeaderElm, HeaderSection, HeaderIntro, LinkList, SpotifyPlayer } from "./Header/HeaderStyles"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/Themes"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Obfuscate from "react-obfuscate"

const Layout = ({children}) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const data = useStaticQuery(graphql`
        {
            spotifyRecentTrack {
                track {
                    artistString
                    name
                    external_urls {
                        spotify
                    }
                }
            }
        }
    `)
    return (
        <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme }>
            <GlobalStyles />
            <Typography />
            <div class="borderTop"></div>
            <div class="borderBottom"></div>
            <div class="borderLeft"></div>
            <div class="borderRight"></div>
            <HeaderElm>
                <HeaderSection>
                    <h1>
                        <Link to="/">Jay Werra</Link>
                    </h1>
                    <HeaderIntro>
                        I'm a front end developer & designer living in Los Angeles. I work with brands large & small to build memorable digital experiences.
                    </HeaderIntro>
                </HeaderSection>
                <HeaderSection>
                    <LinkList>
                        <li>
                            <a href="https://werra.io" target="_blank" rel="noopener noreferrer">
                                Werra
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/werradesign" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jaywerra/" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jaywerra/" target="_blank" rel="noopener noreferrer">
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <Obfuscate email="jay@jaywerra.com" aria-label="Email Me">
                                Email
                            </Obfuscate>
                        </li>
                    </LinkList>
                </HeaderSection>
                <HeaderSection>
                    <HeaderIntro>
                        Accepting new projects this Summer.
                    </HeaderIntro>
                </HeaderSection>
                <HeaderSection>
                    <SpotifyPlayer>
                        <HeaderIntro>
                            Listening to <a href={data.spotifyRecentTrack.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                             {data.spotifyRecentTrack.track.name}</a> by <a href={data.spotifyRecentTrack.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">{data.spotifyRecentTrack.track.artistString}</a>
                        </HeaderIntro>
                    </SpotifyPlayer>
                </HeaderSection>

                {/* <Nav /> */}
                {/* <button onClick={toggleTheme}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.9 63.5" className="toggleFill">
                        <g>
                            <path d="M11.5,32.6c-1.6,0-2.8,1.3-2.8,2.8V56c0,1.6,1.3,2.8,2.8,2.8h38.6c1.6,0,2.8-1.3,2.8-2.8V35.4 c0-1.6-1.3-2.8-2.8-2.8H11.5z M51,35.4V56c0,0.5-0.4,0.8-0.8,0.8H11.5c-0.5,0-0.8-0.4-0.8-0.8V35.4c0-0.5,0.4-0.8,0.8-0.8h38.6 C50.6,34.6,51,35,51,35.4z"/>
                            <path d="M61.6,8.6L52,0.2C51.8,0.1,51.6,0,51.4,0H1C0.4,0,0,0.4,0,1v61.5c0,0.6,0.4,1,1,1h59.9c0.6,0,1-0.4,1-1V9.4 C61.9,9.1,61.8,8.8,61.6,8.6z M11.8,2h36.5v20.5c0,1-0.8,1.8-1.8,1.8H13.7c-1,0-1.8-0.8-1.8-1.8C11.8,22.5,11.8,2,11.8,2z M59.9,61.5H2V2h7.8v20.5c0,2.1,1.7,3.8,3.8,3.8h32.8c2.1,0,3.8-1.7,3.8-3.8V2H51l8.9,7.8V61.5z"/>
                            <path d="M16.1,22.2h6c0.6,0,1-0.4,1-1V4.4c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v16.9C15.1,21.8,15.5,22.2,16.1,22.2 z M17.1,5.4h4v14.9h-4V5.4z"/>
                            <path d="M47.1,40.8H15c-0.6,0-1,0.4-1,1s0.4,1,1,1h32.1c0.6,0,1-0.4,1-1S47.6,40.8,47.1,40.8z"/>
                            <path d="M47.1,48.6H15c-0.6,0-1,0.4-1,1s0.4,1,1,1h32.1c0.6,0,1-0.4,1-1S47.6,48.6,47.1,48.6z"/>
                        </g>
                    </svg>
                </button> */}
            </HeaderElm>
                {children}
            {/* <Footer /> */}
        </ThemeProvider>
    )
}

export default Layout