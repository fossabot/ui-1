import * as React from 'react';

import { Checkbox } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class CheckboxDemo extends React.Component {
	public config = {
		name: 'Card',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Checkbox label='a'> Checkbox </Checkbox>
				<Checkbox colour='success' label='a'> Success </Checkbox>
				<Checkbox colour='danger' label='a'> Dangerous </Checkbox>
				<Checkbox noRipple label='a'> No Ripple </Checkbox>
				<Checkbox disabled label='a'> Disabled </Checkbox>
			</Demo>
		);
	}
}
