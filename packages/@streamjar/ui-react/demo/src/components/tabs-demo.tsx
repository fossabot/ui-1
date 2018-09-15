import * as React from 'react';

import { Tab, Tabs } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class TabsDemo extends React.Component {
	public config = {
		name: 'Tabs',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Tabs value={true}>
					<Tab value={true}>yes</Tab>
					<Tab value={false}>no</Tab>
				</Tabs>
			</Demo>
		);
	}
}
