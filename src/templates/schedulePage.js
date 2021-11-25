import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Calendar from '../components/Calendar';
import FullSchedule from '../components/FullSchedule';

// markup
export default function SchedulePageTemplate({ pageContext: { lang, slug }, data }) {
  const {
    user, isAuthenticated, isLoading, loginWithRedirect,
  } = useAuth0();

  if (isLoading) {
    return <div>Authenticating...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect({ ui_locales: (lang === 'en' ? 'en' : 'fr-CA') });
  }

  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  const navItems = settings.nav.navItemsAuth;

  return (
    isAuthenticated && (
      <Layout lang={lang} slug={slug} settings={settings}>
        <Seo title={`${title}`} lang={lang} />

        <Calendar
          page={sectionOne}
          courses={data.courses}
          user={user}
          lang={lang}
          navItems={navItems}
          slug={slug}
        />
        <FullSchedule page={sectionTwo} courses={data.courses} lang={lang} />
      </Layout>
    )
  );
}

export const query = graphql`
  query($regx: String) {
    settings: file(relativeDirectory: {eq: "siteSetting"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          logo {
            image {
              childImageSharp {
                gatsbyImageData(width: 180, placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
            alt
          }
          nav {
            navItems {
              linkAddress
              linkText
              show
              childNavItems {
                linkAddress
                linkText
              }
            }
            navItemsAuth {
              linkAddress
              linkText
            }
          }
        }
      }
    }
    page: file(relativeDirectory: {eq: "schedule"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            labelCalendar
            labelSchedule
            labelZoom
            description
            noneText
            button {
              linkText
              url
            }
          }
          sectionTwo {
            header
            description
            labelPhaseOne
            labelPhaseTwo
            labelPhaseThree
            labelTime
            labelCourse
            labelViewMore
          }
        }
      }
    }
    courses: allFile(
      filter: {relativeDirectory: {eq: "courses"}, base: {regex: $regx}}
      sort: {fields: childMarkdownRemark___frontmatter___start}
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            description
            presenter
            start
            end
            linkCalendar
            linkZoom
            phaseNumber
          }
        }
      }
    }
  }
`;
