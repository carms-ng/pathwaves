const { graphql } = require('gatsby');
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (['build-html', 'develop-html'].includes(stage)) {
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
      allFile(filter: {
        relativeDirectory: {in: [
          "home",
          "survey",
          "incubator",
          "team",
          "musicians",
          "presenters",
          "schedule",
          "resources",
          "archive",
          "fourOhFour"
        ]}
      }) {
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
    const slug = node.base.split('.')[0];
    const lang = node.base.split('.')[1];
    const templateFile = node.childMarkdownRemark.frontmatter.templateKey;

    createPage({
      path: slug === 'home' ? `/${lang}` : `/${lang}/${slug}`,
      component: path.resolve(`./src/templates/${templateFile}`),
      context: { slug, lang, regx: `/.${lang}.md$/` },
    });
  });
};
