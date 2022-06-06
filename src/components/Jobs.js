import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob(sort: {fields: strapi_id, order: DESC}) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
        strapi_id
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query);
  const { allStrapiJob: { nodes: jobs}} = data;
  const [ value, setValue ] = useState(0);
  const { company, date, position, desc } = jobs[value];
  
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return <button key={item.strapi_id}
            onClick={() => setValue(index)} 
            className={`job-btn ${index === value && "active-btn"}`}>
              {item.company}
              </button>
          })
          }
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            desc.map((item) => {
              return <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            })
          }
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs