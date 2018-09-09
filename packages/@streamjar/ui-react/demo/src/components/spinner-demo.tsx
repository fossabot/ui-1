import * as React from 'react';

import { Spinner } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class SpinnerDemo extends React.Component {
	public config = {
		name: 'Spinner',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Spinner />
				<Spinner size={10}/>
			</Demo>
		);
	}
}
