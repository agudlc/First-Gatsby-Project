import React from "react";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const ProjectsPage = ({ data: { allStrapiProject: {nodes: projects} }}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProject {
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
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage