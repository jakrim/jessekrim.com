import React from 'react';
// import { Box, Flex } from 'rebass';
// import { StaticQuery, graphql } from 'gatsby';
// import styled from 'styled-components';
// import ReactMarkdown from 'react-markdown';
// import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import '../responsive.css';
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
    <Triangle
      color="secondaryLight"
      height={['80vh', '40vh']}
      width={['20vw', '106vw']}
      invertX
    />
    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      // invertY
      invertX
    />

    {/* <Triangle
      color="backgroundDark"
      height={['50vh', '60vh']}
      width={['50vw', '63vw']}
      invertX
    /> */}
    {/* <Triangle
      color="primaryDark"
      height={['20vh', '5vh']}
      width={['50vw', '100vw']}
    /> */}
    <Triangle
      color="backgroundDark"
      height={['25vh', '25vh']}
      width={['100vw', '125vw']}
      invertY
      invertX
    />
    <Triangle
      color="secondaryLight"
      height={['25vh', '8vh']}
      width={['100vw', '10vw']}
      invertY
      invertX
    />
  </div>
);

const Resume = () => (
  <Section.Container
    id="resume"
    Background={Background}
    style={{
      paddingTop: '56.25%',
      // paddingBottom: '56.25%',
      overflow: 'hidden',
      position: 'relative',
      display: 'block',
      width: '100%',
    }}
  >
    <Section.Header name="Resume" icon="💥" label="boom" />

    {/* <iframe
      title="resume"
      // src="https://resume.creddle.io/resume/b27prs0clh6"
      width="device-width"
      height="1100"
      frameBorder="0"
      seamless
      // border: 0,
      float: 'right',
      minWidth: '320px',
      maxWidth: '1366px',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 'auto',
    /> */}
    <iframe
      title="resume"
      src="https://drive.google.com/file/d/16lOvmbS8ekNQib78OsUOjjgsEAX12RKF/preview"
      // src="https://resume.creddle.io/resume/b27prs0clh6"
      frameBorder="0"
      width="device-width"
      height="1060px"
      seamless
      overflow="hidden"
      // scrolling="no"
      style={{
        // scrolling: 'no',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    />
  </Section.Container>
);

export default Resume;
