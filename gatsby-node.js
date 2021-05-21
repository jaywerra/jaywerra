exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx(sort: {fields: frontmatter___order}) {
                edges {
                    node {
                        frontmatter {
                            slug
                            title
                        }
                    }
                    next {
                        slug
                        frontmatter {
                            title
                        }
                    }
                    previous {
                        slug
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('Failed to create project', result.error);
    }

    const projects = result.data.allMdx.edges;

    projects.forEach(({ node }, index) => {
        actions.createPage({
            path: node.frontmatter.slug,
            component: require.resolve('./src/templates/project.js'),
            context: {
                slug: node.frontmatter.slug,
                prev: index === 0 ? null : projects[index - 1].node,
                next: index === projects.length - 1 ? null : projects[index + 1].node
            }
        })
    })
}