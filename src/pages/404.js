import React from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { Link } from 'gatsby';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading
          color="primaryDark"
          fontSize={['9rem', '13rem', '16rem']}
          as="h1"
        >
          404
        </Heading>
        <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']} as="h2">
          {"There isn't anything here"}
          <br />
          <hr />
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
            Click for Home
          </Link>
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default NotFoundPage;