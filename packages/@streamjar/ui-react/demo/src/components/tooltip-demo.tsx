import * as React from 'react';

import { Button, Tooltip } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class TooltipDemo extends React.Component {
	public config = {
		name: 'Tooltips',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Tooltip position='top' message='Lots of tips'><Button>Tooltip Top!</Button></Tooltip>
				<Tooltip position='left' message='Lots of tips'><Button>Tooltip Left!</Button></Tooltip>
				<Tooltip position='right' message='Lots of tips'><Button>Tooltip Right!</Button></Tooltip>
				<Tooltip position='bottom' message='Lots of tips'><Button>Tooltip Bottom</Button></Tooltip>
			</Demo>
		);
	}
}
