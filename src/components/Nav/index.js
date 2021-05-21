import React from "react"
import { Link } from 'gatsby'
import Obfuscate from "react-obfuscate"
import { LinkList } from "../Header/HeaderStyles"

const Nav = () => {

    const Links = [
        {
            label: "Projects",
            linkUrl : "/"
        },
        {
            label: "Resume",
            linkUrl : "/resume/"
        },
        {
            label: "Email",
            linkUrl : "jay@jaywerra.com"
        },
        {
            label : "Werra",
            linkUrl : "https://werra.io"
        },
        {
            label: "GitHub",
            linkUrl : "https://github.com/werradesign"
        },
        {
            label: "Instagram",
            linkUrl : "https://www.instagram.com/jaywerra/"
        },
        {
            label: "Linkedin",
            linkUrl : "https://www.linkedin.com/in/jaywerra/"
        }
    ]

    return (
        <LinkList>
            {Links.map(navLink => {
                if (navLink.linkUrl.startsWith('http')) {
                    return <li key={navLink.label}>
                        <a href={navLink.linkUrl} target="_blank" rel="noopener noreferrer">
                            {navLink.label}
                        </a>
                    </li>
                }
                else if (navLink.linkUrl.startsWith('jay@')) {
                    return <li key={navLink.label}>
                        <Obfuscate email={navLink.linkUrl} aria-label="Email Me">
                            {navLink.label}
                        </Obfuscate>
                    </li>
                } else {
                    return <li key={navLink.label}>
                        <Link to={navLink.linkUrl} activeStyle={{color: "#003bff"}}>
                            {navLink.label}
                        </Link></li>
                }
            })}
        </LinkList>
    )
}

export default Nav