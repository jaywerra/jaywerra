import React from 'react'
import { PageNavElm } from "./PageNavStyles"

const PageNav = (props) => {
    return (
        <PageNavElm>
            <h2>{props.title}</h2>
        </PageNavElm>
        // if projects page make it a breadcrumb title Project > Bank of America
    )
}

export default PageNav
