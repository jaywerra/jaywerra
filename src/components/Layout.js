import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby"
import { HeaderElm, HeaderSection, HeaderIntro, SpotifyPlayer } from "./Header/HeaderStyles"
import Nav from "../components/Nav"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/Themes"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import { motion } from "framer-motion"

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
            <Helmet>
                <html lang="en" />
                <title>Title</title>
                <meta name="description" content="site description"/>
            </Helmet>
            <div className="borderTop"></div>
            <div className="borderBottom"></div>
            <div className="borderLeft"></div>
            <div className="borderRight"></div>
            {/* <ThemeToggleButton onClick={toggleTheme}>
                    Theme
            </ThemeToggleButton> */}
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
                    <Nav />
                </HeaderSection>
                <HeaderSection className="desktoponly">
                    <HeaderIntro>
                        Accepting new projects this Summer.
                    </HeaderIntro>
                </HeaderSection>
                <HeaderSection className="desktoponly">
                    <SpotifyPlayer>
                        <HeaderIntro>
                            Listening to <a href={data.spotifyRecentTrack.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                            {data.spotifyRecentTrack.track.name}</a> by <a href={data.spotifyRecentTrack.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">{data.spotifyRecentTrack.track.artistString}</a>
                        </HeaderIntro>
                    </SpotifyPlayer>
                </HeaderSection>
            </HeaderElm>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0
                }}
            >
                {children}
            </motion.div>
        </ThemeProvider>
    )
}

export default Layout