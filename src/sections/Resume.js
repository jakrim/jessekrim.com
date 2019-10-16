import React from 'react';
// import { Box, Flex } from 'rebass';
// import { StaticQuery, graphql } from 'gatsby';
// import styled from 'styled-components';
// import ReactMarkdown from 'react-markdown';
// import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
// import markdownRenderer from '../components/MarkdownRenderer';

// import { Container } from '../components/Section';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '8vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
    {/* <Triangle
      color="secondaryLight"
      height={['80vh', '90vh']}
      width={['20vw', '100vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['50vh', '60vh']}
      width={['50vw', '63vw']}
      invertX
    />
    <Triangle
      color="primaryDark"
      height={['20vh', '5vh']}
      width={['50vw', '100vw']}
    />
    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    />
    <Triangle
      color="secondaryLight"
      height={['25vh', '8vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    /> */}
  </div>
);

const Resume = () => (
  <Section.Container id="resume" Background={Background}>
    <Section.Header name="Resume" icon="💥" label="boom" />
    <iframe
      title="resume"
      src="https://resume.creddle.io/resume/b27prs0clh6"
      width="850"
      height="1100"
      seamless
      style={{
        alignContent: 'center',
        float: 'right',
        overflow: 'auto',
        minWidth: '320px',
        maxWidth: '1366px',
        display: 'flex',
        flex: '0 1 auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',
      }}
    />
  </Section.Container>
);

export default Resume;
