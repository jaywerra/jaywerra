import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            agency
            tasks
          }
          excerpt
        }
      }
    }
  `);
  
  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    slug: project.frontmatter.slug,
    agency: project.frontmatter.agency,
    tasks: project.frontmatter.tasks,
    excerpt: project.excerpt
  }))
}

export default useProjects