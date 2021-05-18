import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

const Seo = ({children, location, description, title, image}) => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    titleTemplate
                }
            }
        }
    `)
    return (
        <Helmet titleTemplate={`%s ${data.site.siteMetadata.titleTemplate}`}>
            <title>{ title }</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default Seo