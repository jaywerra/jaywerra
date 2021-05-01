exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('Failed to create project', result.error);
    }

    const projects = result.data.allMdx.nodes;

    projects.forEach(project => {
        actions.createPage({
            path: project.frontmatter.slug,
            component: require.resolve('./src/templates/project.js'),
            context: {
                slug: project.frontmatter.slug
            }
        })
    })
}