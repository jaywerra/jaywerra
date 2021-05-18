import React from "react"
import Resume from "../components/Resume"
import Seo from "../components/Seo"


const ResumePage = () => {
  return (
    <>
      <Seo title="Resume" description="Resume for developer & designer, Jay Werra" />
      <main>
          <Resume />
      </main>
   </>   
  )
}

export default ResumePage