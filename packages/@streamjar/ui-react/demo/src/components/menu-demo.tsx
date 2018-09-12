import * as React from 'react';

import { Button, Menu } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class MenuDemo extends React.Component<{}, { anchor: HTMLButtonElement | null }> {
	public config = {
		name: 'Menu',
	};

	constructor(props: {}) {
		super(props);

		this.onChange = this.onChange.bind(this);

		this.state = { anchor: null };
	}

	public onChange(e?: React.SyntheticEvent<HTMLButtonElement>): void {
		if (e) {
			const target = e.currentTarget;

			this.setState((state) => ({
				anchor: state.anchor ? null : target,
			}));
		} else {
			this.setState({
				anchor: null,
			});
		}
	}

	public render() {
		const { anchor } = this.state;

		return (
			<Demo config={this.config}>
				<Button raised onClick={this.onChange}> Menu </Button>

				<Menu width={600} anchor={anchor} onClose={this.onChange}>
					<p style={{ color: '#FFF', padding: 10, textAlign: 'center' }}> I'm a menu!</p>
				</Menu>
			</Demo>
		);
	}
}
