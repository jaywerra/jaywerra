import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageNav from '../components/PageNav'
import {ContentColumn} from "../styles/LayoutStyles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ProjectDetails } from '../components/ProjectDetails/ProjectDetailsStyles'

export const query = graphql`
  query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                agency
            }
            body
        }
    }
`;

const ProjectTemplate = ({ data: { mdx: project } }) => (
    <ContentColumn>
        <PageNav title={project.frontmatter.title} />
        <ProjectDetails>
            <MDXRenderer>
                {project.body}
            </MDXRenderer>
        </ProjectDetails>            
    </ContentColumn>
);

export default ProjectTemplate