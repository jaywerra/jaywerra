import * as React from "react"
import { Helmet } from "react-helmet"
import ProjectList from "../components/ProjectList"

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Jay Werra | Developer & Designer</title>
        <meta name="description" content="Los Angeles based front developer and designer. Founder of Werra Design." />
      </Helmet>
      <ProjectList />
    </main>
  )
}

export default IndexPage