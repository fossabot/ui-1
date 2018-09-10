import * as React from 'react';

import { Radio, RadioGroup } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class RadioDemo extends React.Component<{}, { value: number, valueB: number }> {
	public config = {
		name: 'Radio',
	};

	constructor(props) {
		super(props);

		this.state = { value: 1, valueB: 2 };
		this.onChange = this.onChange.bind(this);
		this.onChangeAgain = this.onChangeAgain.bind(this);
	}

	public onChange(value): void {
		this.setState({
			value,
		});
	}

	public onChangeAgain(value): void {
		this.setState({
			valueB: value,
		});
	}

	public render() {
		const { value, valueB } = this.state;

		return (
			<Demo config={this.config}>
				<RadioGroup name='group-1' value={value}  onChange={this.onChange}>
					<Radio value={1}>One</Radio>
					<Radio value={2}>Two</Radio>
				</RadioGroup>
				<RadioGroup name='group-2' value={valueB} onChange={this.onChangeAgain}>
					<Radio value={1}>One</Radio>
					<Radio value={2}>Two</Radio>
				</RadioGroup>
			</Demo>
		);
	}
}
