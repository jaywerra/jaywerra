import * as React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import Seo from '../components/Seo'
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
      <Seo title="Developer + Designer" description={data.site.siteMetadata.description} />
      <ProjectList />
    </main>
  )
}

export default IndexPage