import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Carousel} from 'react-bootstrap';
import BackgroundImage from './background.png';
import PlatformImage from './platform.png';
import './platform.scss';
import Platform from './platform';
const Platforms = () => {
	return (
		<section className="platformSection" >
			<HomePageTitle sectionTitle="旗下平台" sectionSubTitle="Platform" link="/platform" display="none"/>
			<Carousel>
				<Carousel.Item>
					<Platform backgroundImg={BackgroundImage} platformImage={PlatformImage} platformName="雍和甄品" platformDescription="This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information." path="/"/>
				</Carousel.Item>
				<Carousel.Item>
					<Platform backgroundImg={BackgroundImage} platformImage={PlatformImage} platformName="雍和平台2" platformDescription="This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information." path="/"/>
				</Carousel.Item>
				<Carousel.Item>
					<Platform backgroundImg={BackgroundImage} platformImage={PlatformImage} platformName="雍和平台3" platformDescription="This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information." path="/"/>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default Platforms;
