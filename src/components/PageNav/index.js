import React from 'react'
import { Link } from "gatsby"
import { PageNavElm } from "./PageNavStyles"

const PageNav = (props) => {
    return (
        <PageNavElm id="projects">
            <h2><Link to="/">{props.title}</Link></h2>
        </PageNavElm>
        // if projects page make it a breadcrumb title Project > Bank of America
    )
}

export default PageNav
