import * as React from 'react';

import { Button, Section, Tab, Tabs } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class SectionDemo extends React.Component {
	public config = {
		name: 'Section',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Section header={<React.Fragment>Header</React.Fragment>} action={<Button raised>Hi!</Button>}>
					Content!
				</Section>

				<Section tabs onlyTabs header={<Button icon='add' raised disabled> Create Goal </Button>} action={
					<Tabs>
						<Tab value={0}>Tips</Tab>
						<Tab value={1}>Subscribers</Tab>
						<Tab value={2}>Charity Donations</Tab>
					</Tabs>
				}>
					<h2> hello </h2>
				</Section>
			</Demo>
		);
	}
}
