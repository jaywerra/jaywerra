import React from "react"
import Resume from "../components/Resume"
import SEO from "../components/SEO"
import Layout from "../components/Layout"

const ResumePage = () => {
  return (
    <>
      <SEO title="Resume" description="Resume for developer & designer, Jay Werra" />
      <Layout>
          <Resume />
      </Layout>
   </>   
  )
}

export default ResumePage