import React from "react"
import { Link } from "gatsby"
import Obfuscate from "react-obfuscate"
import { LinkList } from "../Header/HeaderStyles"

const Nav = () => {
  return (
    <LinkList>
      <li>
          <Link to="/">
              Projects
          </Link>
      </li>
      <li>
          <Link to="/resume/">
              Resúme
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
    </LinkList>
  )
}

export default Nav