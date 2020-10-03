import React from 'react';
import OurTeamLayoutStyle from './ourTeam.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const OurTeam = () => {
	const data = useStaticQuery(graphql`
    {
      allAboutUsOurTeamJson {
        edges {
          node {
            name
            avatar
            id
          }
        }
      }
      allFile(filter: {}) {
        edges {
          node {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  `);
	const teamMembers = data.allAboutUsOurTeamJson.edges;
	const teamAvatars = data.allFile.edges;
	return (
		<section className={OurTeamLayoutStyle.section}>
			<div className={OurTeamLayoutStyle.sectionTitle}>
				<h2>Our Team</h2>
			</div>
			<div
				className={
					(OurTeamLayoutStyle.sectionCenter, OurTeamLayoutStyle.teamCenter)
				}
			>
				{teamMembers.map((teamMember) => {
					return (
						<article key={teamMember.node.id} className={OurTeamLayoutStyle.team}>
							<Image
								fluid={teamAvatars.find((avatar) => {
									return avatar.node.childImageSharp &&
									avatar.node.childImageSharp.fluid.originalName === teamMember.node.avatar;
								}).node.childImageSharp.fluid}
								className={OurTeamLayoutStyle.avatar}
							/>
							<h4>{teamMember.node.name}</h4>
							<p className={OurTeamLayoutStyle.teamDescription}>
								{teamMember.node.description}
							</p>
							<div className={OurTeamLayoutStyle.underline} />
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default OurTeam;
