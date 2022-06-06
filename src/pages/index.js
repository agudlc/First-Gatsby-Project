import React from "react"
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
const IndexPage = ({data}) => {
    const {allStrapiProject: {nodes: projects}} = data

  return (
    <>
      <Layout >
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={projects} title="featured projects" showLink/>
      </Layout>
    </>
  )
}


export const query = graphql`
  {
    allStrapiProject(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        title
        url
        stack {
          title
        }
        description {
          data {
            description
          }
        }
        image {
          url
        }
      }
    }
  }
`

export default IndexPage
