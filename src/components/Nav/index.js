import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <main>
        <ul>
            <li>
                <Link to="/">Höme</Link>
            </li>
            <li>
                <Link to="/resume">Resúme</Link>
            </li>
        </ul>
    </main>
  )
}

export default Nav