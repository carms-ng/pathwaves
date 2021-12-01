import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Calendar from '../components/Calendar';
import FullSchedule from '../components/FullSchedule';

export default function SchedulePageTemplate({ pageContext: { lang, slug }, data }) {
  const [showFullSchedule, setShowFullSchedule] = useState(false);

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

  const { nav } = settings;

  return (
    isAuthenticated && (
      <Layout lang={lang} slug={slug} settings={settings}>
        <Seo title={`${title}`} lang={lang} />

        {/* Section One */}
        <Calendar
          page={sectionOne}
          courses={data.courses}
          user={user}
          lang={lang}
          nav={nav}
          slug={slug}
          showFullSchedule={showFullSchedule}
          setShowFullSchedule={setShowFullSchedule}
        />

        {/* Section Two */}
        {showFullSchedule
          && (
          <FullSchedule
            page={sectionTwo}
            courses={data.courses}
            lang={lang}
            labelPhases={nav.labelPhases}
          />
          )}
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
            buttonDiscord {
              linkText
              url
            }
            labelPhases {
              labelPhaseOne
              labelPhaseTwo
              labelPhaseThree
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
            labelScheduleShow
            labelScheduleHide
            labelZoom
            description
            noneText
          }
          sectionTwo {
            header
            description
            labelTime
            labelCourse
            labelCalendar
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
