import * as React from 'react';

import { toasts, Button } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class ToastsDemo extends React.Component {
	public config = {
		name: 'Toasts',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Button raised onClick={() => toasts.info('This is an informative toast', 5000)}> Info </Button>
				<Button colour='success' raised onClick={() => toasts.success('This is an successful toast')}> Success </Button>
				<Button colour='danger' raised onClick={() => toasts.error('This is a sad toast')}> Error </Button>
			</Demo>
		);
	}
}
