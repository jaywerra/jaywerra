import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import SEO from '../components/SEO'
import ProjectList from "../components/ProjectList"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`)
  return (
    <main>
      <SEO title="Developer + Designer" description={data.site.siteMetadata.description} />
      <Layout>
        Page Not Found
      </Layout>
    </main>
  )
}

export default NotFoundPage
