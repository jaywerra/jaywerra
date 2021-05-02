import React from 'react'
import { graphql } from "gatsby"
// import Layout from "../components/Layout"
import PageNav from '../components/PageNav'
import {ContentColumn} from "../styles/LayoutStyles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ProjectDetails, ProjectCopy } from '../components/ProjectDetails/ProjectDetailsStyles'

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

const projectContainer = {
    hidden: { opacity: 0, y: 4 },
    show: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.5
        }
    },
}

const ProjectTemplate = ({ data: { mdx: project } }) => (
    <ContentColumn>
        {/* <PageNav title={`Projects / ${project.frontmatter.title}`} /> */}
        <ProjectDetails
                variants={projectContainer}
                initial="hidden"
                animate="show"
        >
            {/* <Link to="/">&larr; Back to projects</Link> */}
            <ProjectCopy>
                <MDXRenderer>
                    {project.body}
                </MDXRenderer>
            </ProjectCopy>
        </ProjectDetails>            
    </ContentColumn>
);

export default ProjectTemplate