import React from "react"
import { Link } from "gatsby"
import { HeaderElm, HeaderLogo } from "./HeaderStyles"
import Nav from "../Nav"
import JayLogo from "../../images/logo.svg"

const Header = () => {
    return (
        <HeaderElm>
            <Nav />
        </HeaderElm>
    )
}

export default Header
