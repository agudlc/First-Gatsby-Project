import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const About = ({ data}) => {
  console.log(data);
  const {title, stack, image, info} = data.allStrapiAbout.nodes[0];

  return (
    <>
      <Layout>
        <section className="about-page">
          <div className="section-center about-center">
            <img src={image.localFile.publicURL} alt={title} className="about-img-svg" />
            <article className="about-text">
              <Title title={title} />
              <p>{info}</p>
              <div className="about-stack">
                {stack.map(item => {
                  return <span key={item.id}>{item.title}</span>
                })}
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}


export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        stack {
          id
          title
        }
        info
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`


export default About