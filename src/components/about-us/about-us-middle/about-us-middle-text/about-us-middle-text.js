import React from 'react';
import './about-us-middle-text.scss';
class AboutUsMiddleText extends React.Component{
	render(){
		return <div className='about-us-middle-text'>
			<div className='about-us-middle-text-title bx--type-semibold'>
				雍和在线
			</div>
			<div className='about-us-middle-text-space'>
			</div>
			<div className='about-us-middle-text-content'>
				在扁平化设计语言里边，去掉了很多拟物效果之后，为了将信息本身更好的呈现出来，注重字体排版成为非常重要的一点。而且在移动端阅读成为人们日常生活行为的今天，如何将文本排出既符合人们阅读习惯又美观的效果显得非常重要，对于平时的办公（比如制作文档和演示文稿等等）也大有裨益。
			</div>
		</div>;
	}
}
export default AboutUsMiddleText;