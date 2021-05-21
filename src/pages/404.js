import React from "react"
import {graphql, useStaticQuery, Link} from 'gatsby'
import SEO from '../components/SEO'
import ProjectList from "../components/ProjectList"
import Layout from "../components/Layout"
import { FourOhFour, GifWrap } from "../styles/LayoutStyles"
import HackThePlanet from "../images/404.gif"
import Image from 'gatsby-image'

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
        <FourOhFour>
          <GifWrap>
            <img src={HackThePlanet} alt="404" />
          </GifWrap>
          <h2>
            Nothing to be found here.
          </h2>
          <Link to="/">Head back home?</Link>
        </FourOhFour>
      </Layout>
    </main>
  )
}

export default NotFoundPage
