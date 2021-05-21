import React from 'react'
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ProjectDetails, ProjectCopy, ProjectNavigation } from '../components/ProjectDetails/ProjectDetailsStyles'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                agency
                metaDescription
                images {
                    sharp: childImageSharp {
                        fluid(quality: 100, maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            body
        }
    }
`;

const ProjectTemplate = ({ pageContext, data: { mdx: project }}) => {
   

    const next = pageContext.next
    ? {
        url: `/${pageContext.next.frontmatter.slug}/`,
        title: pageContext.next.frontmatter.title
      }
    : null
       
    return (
        <>
            <SEO title={project.frontmatter.title} description={project.frontmatter.metaDescription} />
            <Layout>
                <ProjectDetails>
                    <ProjectCopy>
                        <MDXRenderer>
                            {project.body}
                        </MDXRenderer>
                    </ProjectCopy>

                    <ProjectNavigation>
                        {next && (
                            <Link to={next.url}>
                                <h4>Next Project // {next.title}</h4>
                            </Link>
                        )}
                    </ProjectNavigation>
                </ProjectDetails>     
            </Layout>     
        </>
    );
}

export default ProjectTemplate