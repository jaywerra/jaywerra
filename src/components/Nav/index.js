import React from "react"
// import { Link } from "gatsby"
import Obfuscate from "react-obfuscate"

const Nav = () => {
  return (
    <main>
        <ul>
            <li>
              <Obfuscate email="jay@jaywerra.com" aria-label="Email Me">
                Contact
              </Obfuscate>
            </li>
        </ul>
    </main>
  )
}

export default Nav