import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: {fields: frontmatter___order}) {
        nodes {
          frontmatter {
            slug
            title
            agency
            order
            tasks
            metaDescription
          }
        }
      }
    }
  `);
  
  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    slug: project.frontmatter.slug,
    agency: project.frontmatter.agency,
    tasks: project.frontmatter.tasks,
    order: project.frontmatter.order,
    metaDescription: project.frontmatter.metaDescription,
  }))
}

export default useProjects