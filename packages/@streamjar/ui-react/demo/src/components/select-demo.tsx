import * as React from 'react';

import { Select, SelectItem } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class SelectDemo extends React.PureComponent {
	public config = {
		name: 'Select',
	};

	public render() {
		return <Demo config={this.config}>
			<Select value='b' onChange={console.log} title='a'>
				<SelectItem name='b' value='b'></SelectItem>
				<SelectItem name='c' value='c'></SelectItem>
				<SelectItem name='d' value='d'></SelectItem>
			</Select>

			<Select multiple onChange={console.log}>
				<SelectItem name='b' value='b'></SelectItem>
				<SelectItem name='c' value='c'></SelectItem>
				<SelectItem name='d' value='d'></SelectItem>
			</Select>
		</Demo>;
	}

}
