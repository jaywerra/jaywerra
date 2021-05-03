import React from 'react'
import { graphql } from "gatsby"
import {ContentColumn} from "../styles/LayoutStyles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ProjectDetails, ProjectCopy } from '../components/ProjectDetails/ProjectDetailsStyles'

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                agency
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

const ProjectTemplate = ({ data: { mdx: project } }) => (
    <ContentColumn>
        {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
        <ProjectDetails
                variants={projectContainer}
                initial="hidden"
                animate="show"
        >
            <ProjectCopy>
                <MDXRenderer>
                    {project.body}
                </MDXRenderer>

                {/* {project.frontmatter.images.map(image => (
                    <ImageContainer>
                        <Img
                            fluid={image.sharp.fluid}
                        />
                    </ImageContainer>
                ))} */}
            </ProjectCopy>
        </ProjectDetails>            
    </ContentColumn>
);

export default ProjectTemplate