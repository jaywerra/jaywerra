import React from "react"
import { Link } from 'gatsby'
import Obfuscate from "react-obfuscate"
import { LinkList } from "../Header/HeaderStyles"
import ExternalLink from "../../images/icons/icon-externallink.svg"

const Nav = () => {
  return (
    <LinkList>
        <li>
            <Link
                to="/"
                activeStyle={{ color: "#0032BD" }}
            >
                Projects
            </Link>

        </li>
        <li>
            <Link
                to="/resume/"
                activeStyle={{ color: "#0032BD" }}
            >
                Resume
            </Link>
        </li>
        <li>
            <Obfuscate email="jay@jaywerra.com" aria-label="Email Me">
                Email
            </Obfuscate>
        </li>
            <li>
                <a href="https://werra.io" target="_blank" rel="noopener noreferrer">
                    Werra
                    <img src={ExternalLink} alt="" />
                </a>
            </li>
            <li>
                <a href="https://github.com/werradesign" target="_blank" rel="noopener noreferrer">
                    GitHub
                    <img src={ExternalLink} alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/jaywerra/" target="_blank" rel="noopener noreferrer">
                    Instagram
                    <img src={ExternalLink} alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jaywerra/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                    <img src={ExternalLink} alt="" />
                </a>
            </li>
    </LinkList>
  )
}

export default Nav