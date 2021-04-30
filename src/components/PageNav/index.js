import React from 'react'
import { PageNavElm } from "./PageNavStyles"

const PageNav = (props) => {
    return (
        <PageNavElm>
            <h2>{props.title}</h2>
        </PageNavElm>
    )
}

export default PageNav
