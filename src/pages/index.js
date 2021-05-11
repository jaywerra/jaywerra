import * as React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import SEO from '../components/SEO'
import ProjectList from "../components/ProjectList"

const IndexPage = () => {
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
      <ProjectList />
    </main>
  )
}

export default IndexPage