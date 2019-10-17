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
      height={['80vh', '40vh']}
      width={['20vw', '106vw']}
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
    <iframe
      title="resume"
      src="https://drive.google.com/file/d/1rbbpyg2aoULCyaItBe7uvB9hR-3ez-_P/preview"
      frameBorder="0"
      width="device-width"
      height="1080px"
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
