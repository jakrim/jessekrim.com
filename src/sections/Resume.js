import React from 'react';
import { Box, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
// import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
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
      invertX
    />
    <Triangle
      color="secondaryLight"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Resume = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="Resume" icon="💥" label="person" />
    <StaticQuery
      query={graphql`
        query Resume {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutMe } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default Resume;
