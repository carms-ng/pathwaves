import React from 'react';
import { Router } from '@reach/router';
import { graphql, Link } from 'gatsby';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Calendar from '../components/Calendar';

export default function Account({ data }) {
  const {
    user, isAuthenticated, isLoading, loginWithRedirect,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return (
    isAuthenticated && (
      <Layout>
        {/* Sub Nav */}
        <nav style={{ marginTop: '10vh' }}>
          <Link to="/account">Calendar</Link>
          <Link to="/account/profile">Profile</Link>
        </nav>
        <Router basepath="/account">
          <Profile path="/profile" user={user} />
          <Calendar path="/" data={data} />
        </Router>
      </Layout>
    )
  );
}

export const query = graphql`
  {
    allFile(
      filter: {relativeDirectory: {eq: "activity"}, base: {regex: "/^.*en\\.md$/"}}
      sort: {fields: childMarkdownRemark___frontmatter___start}
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            activity_link
            start
          }
        }
      }
    }
  }
`;
