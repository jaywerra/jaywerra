import * as React from "react"
import Resume from "../components/Resume"
import SEO from "../components/SEO"

const ResumePage = () => {
  return (
    <>
      <SEO title="Resume" description="Resume for developer & designer, Jay Werra" />
      <main>
          <Resume />
      </main>
   </>   
  )
}

export default ResumePage