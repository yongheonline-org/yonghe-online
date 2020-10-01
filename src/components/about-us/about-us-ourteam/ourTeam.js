// import React from 'react';
// import OurTeamLayoutStyle from './ourTeam.module.scss';
// import { graphql, useStaticQuery } from 'gatsby';
// import Image from 'gatsby-image';

// const query = graphql`
//   {
//     allStrapiOurTeam {
//       nodes {
//         id
//         name
//         description
//         avatar {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// const OurTeam = () => {
// 	const data = useStaticQuery(query);
// 	const {
// 		allStrapiOurTeam: { nodes: teams },
// 	} = data;
// 	return (
// 		<section className={OurTeamLayoutStyle.section}>
// 			<div className={OurTeamLayoutStyle.sectionTitle}>
// 				<h2>Our Team</h2>
// 			</div>
// 			<div
// 				className={
// 					(OurTeamLayoutStyle.sectionCenter, OurTeamLayoutStyle.teamCenter)
// 				}
// 			>
// 				{teams.map((teamMember) => {
// 					return (
// 						<article key={teamMember.id} className={OurTeamLayoutStyle.team}>
// 							<Image
// 								fluid={teamMember.avatar.childImageSharp.fluid}
// 								className={OurTeamLayoutStyle.avatar}
// 							/>
// 							<h4>{teamMember.name}</h4>
// 							<p className={OurTeamLayoutStyle.teamDescription}>
// 								{teamMember.description}
// 							</p>
// 							<div className={OurTeamLayoutStyle.underline} />
// 						</article>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// };

// export default OurTeam;
