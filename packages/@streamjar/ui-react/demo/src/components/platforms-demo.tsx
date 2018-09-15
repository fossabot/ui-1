import * as React from 'react';

import { Platforms } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class PlatformsDemo extends React.Component<{}, { anchor: HTMLButtonElement | null }> {
	public config = {
		name: 'Platforms',
	};

	constructor(props: {}) {
		super(props);
	}

	public render() {
		return (
			<Demo config={this.config}>
				<Platforms></Platforms>
				<hr />
				<Platforms supported={['mixer', 'twitch']}></Platforms>
			</Demo>
		);
	}
}
