import React from 'react'
import { graphql } from "gatsby"
import {ContentColumn} from "../styles/LayoutStyles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ProjectDetails, ProjectCopy } from '../components/ProjectDetails/ProjectDetailsStyles'
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

const projectContainer = {
    hidden: { opacity: 0, y: 4 },
    show: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.5
        }
    },
}

const ProjectTemplate = ({ data: { mdx: project }}) => {
    
    return (
        <ContentColumn>
            <SEO title={project.frontmatter.title} description={project.frontmatter.metaDescription} />
            <Layout>
                <ProjectDetails>
                    <ProjectCopy>
                        <MDXRenderer>
                            {project.body}
                        </MDXRenderer>
                    </ProjectCopy>
                </ProjectDetails>       
            </Layout>     
        </ContentColumn>
    );
}

export default ProjectTemplate