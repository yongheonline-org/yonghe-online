import React from "react";
import "./cooperators.scss";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  {
    allStrapiCooperator {
      nodes {
        id
        name {
          id
          name
        }
      }
    }
  }
`;
const Cooperators = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiCooperator: { nodes: cooperators },
  } = data;
  return (
    <section className="section">
      <div className="sectionTitle">
        <h2>Cooperators</h2>
      </div>
      <div className="gridContainer teamCenter">
        {cooperators.map((cooperator) => {
          return (
            <div className="gridItem" key={cooperator.id}>
              {cooperator.name.map((n) => {
                return <p key={n.id}>{n.name}</p>;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cooperators;
