import React from 'react'
import { navigate } from "gatsby"
import { PageNavElm } from "./PageNavStyles"

const PageNav = () => {
    return (
        <PageNavElm>
            <h2>Resúme</h2>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </PageNavElm>
    )
}

export default PageNav
