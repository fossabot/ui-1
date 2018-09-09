import * as React from 'react';

import { Slider } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class SliderDemo extends React.Component {
	public config = {
		name: 'Slider',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Slider min={0} max={50} step={5}></Slider>
				<Slider disabled min={0} max={50} step={5}></Slider>
			</Demo>
		);
	}
}
