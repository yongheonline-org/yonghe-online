import React from "react";
import "./newscenter.scss";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allStrapiNewsCollection(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        author
        title
        strapiId
        source
        slug
        shortDescription
        description
        date
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
const NewsCenter = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiNewsCollection: { nodes: allNews },
  } = data;
  console.log(allNews);
  return (
    <section className="section">
      <div className="sectionTitleLeft">
        <h2>News Center</h2>
      </div>
      <div className="bx--grid bx--grid--narrow">
        <div className="bx--row">
          <div className="sectionCenter teamCenter">
            {allNews.map((news) => {
              console.log(typeof news.date);
              const day = news.date.split("-")[2];
              //   const yearMonth = news.date.getFullYear() + "-" + date.getMonth();
              //   console.log(day);
              //   console.log(yearMonth);
              return (
                <article key={news.strapiId} className="team">
                  <Image fluid={news.image.childImageSharp.fluid} />
                  <div>
                    {/* {day} */}
                    <h5>{news.title}</h5>
                  </div>
                  {/* <div>{yearMonth}</div> */}
                  <p className="teamDescription">{news.shortDescription}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCenter;
