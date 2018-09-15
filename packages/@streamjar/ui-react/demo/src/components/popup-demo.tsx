import * as React from 'react';

import { Button, Menu, Popup } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class PopupDemo extends React.Component<{}, { anchor: HTMLButtonElement | null }> {
	public config = {
		name: 'Popup',
	};

	constructor(props: {}) {
		super(props);
	}

	public render() {
		return (
			<Demo config={this.config}>
				<div style={{ overflow: 'scroll', width: '100%', height: '100%'}}>
					<Popup title='Title!' tag='this is a tagline'>
							<p> welcome to my box! It's a nice box. </p>
					</Popup>
				</div>
			</Demo>
		);
	}
}
