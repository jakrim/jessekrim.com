import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import '../responsive.css';

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
      height={['80vh', '35vh']}
      width={['20vw', '110vw']}
      invertX
    />
    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
    />
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
      overflow: 'hidden',
      position: 'relative',
      display: 'block',
      width: '100%',
    }}
  >
    <Section.Header name="Resume" icon="💥" label="boom" />
    <p
      style={{
        color: '#888',
        margin: 2,
      }}
    >
      (Project Titles and Descriptions are Clickable)
    </p>
    <iframe
      title="resume"
      src="https://resume.creddle.io/embed/b27prs0clh6"
      frameBorder="0"
      height="1090px"
      width="device-width"
      seamless
      overflow="hidden"
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    />
  </Section.Container>
);

export default Resume;
