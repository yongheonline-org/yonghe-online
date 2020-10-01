// import React from 'react';
// import './cooperators.scss';
// import { graphql, useStaticQuery } from 'gatsby';

// const query = graphql`
//   {
//     allStrapiCooperator {
//       nodes {
//         id
//         name {
//           id
//           name
//         }
//       }
//     }
//   }
// `;
// const Cooperators = () => {
// 	const data = useStaticQuery(query);
// 	const {
// 		allStrapiCooperator: { nodes: cooperators },
// 	} = data;
// 	return (
// 		<section className="cooperatorSection">
// 			<div className="cooperatorSectionTitle">
// 				<h2>Cooperators</h2>
// 			</div>
// 			<div className="gridContainer">
// 				<div className="gridCenter">
// 					{cooperators.map((cooperator) => {
// 						return (
// 							<div className="gridItem" key={cooperator.id}>
// 								{cooperator.name.map((n) => {
// 									return <p key={n.id}>{n.name}</p>;
// 								})}
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Cooperators;
