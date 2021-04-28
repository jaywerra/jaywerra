import React from "react"
import Header from "./Header";
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

const Layout = ({children}) => {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout