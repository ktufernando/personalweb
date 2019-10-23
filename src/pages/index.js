import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.55rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.40rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`
const SocialDiv = styled.div`
  margin: 20px 0 20px 0;
`
const SocialIcon = styled.a`
  padding: 0 3px 0 0;
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>Hola hola!</h1>
        <p>
          Soy Fernando Valdes, desarrollador java y node desde hace 13 años. Hoy me contratan como consultor y arquitecto de soluciones.
        </p>
        <p>
          Acá vas a encontrar artículos que seguro te ayudarán en tú desarrollo profesional como developer, arquitecto y lider.
        </p>
        <p>
          Suelo dar worshops GRATIS de desarrollo, DevOps y AWS. Enviame whatsapp o mail si te gustaría participar.
        </p>
        <ul>
          <li>
            <i className="material-icons">phone</i>&nbsp;~&nbsp;
            <a href="mailto:fervaldes11@gmail.com">
              <em>+54 9 11 68275264</em>
            </a>
          </li>
          <li>
            <i className="material-icons">mail_outline</i>&nbsp;~&nbsp;
            <a href="mailto:fervaldes11@gmail.com">
              <em>fervaldes11@gmail.com</em>
            </a>
          </li>
        </ul>
        <SocialDiv>
          <SocialIcon>
            <a href="https://www.linkedin.com/in/fervaldes/">
              <img src="social/linkedin.svg" alt="Linkedin" width="45px" height="45px" />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://github.com/ktufernando">
              <img src="social/github.svg" alt="Github" width="45px" height="45px" />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://www.instagram.com/ktufernando/">
              <img src="social/instagram.svg" alt="Instagram" width="45px" height="45px" />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://medium.com/@ktufernando/">
              <img src="social/medium.svg" alt="Medium" width="45px" height="45px" />
            </a>
          </SocialIcon>
        </SocialDiv>
      </Hero>
      <Content>
        <SectionTitle>Últimas historias</SectionTitle>
        {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            categories={post.frontmatter.categories}
            key={post.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
