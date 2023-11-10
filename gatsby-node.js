const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (["build-html", "develop-html"].includes(stage)) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth-sdk/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

// create pages dynamically using templates
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allFile(
        filter: {
          relativeDirectory: {
            in: [
              "home"
              "incubator"
              "team"
              "musicians"
              "presenters"
              "schedule"
              "resources"
              "archive"
              "news"
              "pastProgramming"
              "participants"
              "fourOhFour"
            ]
          }
        }
      ) {
        distinct(field: relativeDirectory)
        nodes {
          childMarkdownRemark {
            frontmatter {
              templateKey
            }
          }
          base
        }
      }
    }
  `);

  result.data.allFile.nodes.forEach((node) => {
    const slug = node.base.split(".")[0];
    const lang = node.base.split(".")[1];
    const templateFile = node.childMarkdownRemark.frontmatter.templateKey;

    createPage({
      path: slug === "home" ? `/${lang}` : `/${lang}/${slug}`,
      component: path.resolve(`./src/templates/${templateFile}`),
      context: { slug, lang, regx: `/.${lang}.md$/` },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};
