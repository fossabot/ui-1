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
				<div className='layout-row'>
					<div className='flex-20'></div>
					<div className='flex-20'><Tooltip position='top' pull='start' message='Lots of tips'><Button>top - start</Button></Tooltip></div>
					<div className='flex-20'><Tooltip position='top' pull='center' message='Lots of tips'><Button>top - center</Button></Tooltip></div>
					<div className='flex-20'><Tooltip position='top' pull='end' message='Lots of tips'><Button>top - end</Button></Tooltip></div>
					<div className='flex-20'></div>
				</div>
				<div className='layout-row'>
					<div className='flex-20'><Tooltip position='left' pull='start' message='Lots of tips'><Button>left - start</Button></Tooltip></div>
					<div className='flex-20'></div>
					<div className='flex-20'></div>
					<div className='flex-20'></div>
					<div className='flex-20'><Tooltip position='right' pull='start' message='Lots of tips'><Button>right - start</Button></Tooltip></div>
				</div>
				<div className='layout-row'>
					<div className='flex-20'><Tooltip position='left' pull='center' message='Lots of tips'><Button>left - center</Button></Tooltip></div>
					<div className='flex-20'></div>
					<div className='flex-20'></div>
					<div className='flex-20'></div>
					<div className='flex-20'><Tooltip position='right' pull='center' message='Lots of tips'><Button>right - center</Button></Tooltip></div>
				</div>
				<div className='layout-row'>
					<div className='flex-20'><Tooltip position='left' pull='end' message='Lots of tips'><Button>left - end</Button></Tooltip></div>
					<div className='flex-20'></div>
					<div className='flex-20'></div>
					<div className='flex-20'></div>
					<div className='flex-20'><Tooltip position='right' pull='end' message='Lots of tips'><Button>right - end</Button></Tooltip></div>
				</div>
				<div className='layout-row'>
					<div className='flex-20'></div>
					<div className='flex-20'><Tooltip position='bottom' pull='start' message='Lots of tips'><Button>bottom - start</Button></Tooltip></div>
					<div className='flex-20'><Tooltip position='bottom' pull='center' message='Lots of tips'><Button>bottom - center</Button></Tooltip></div>
					<div className='flex-20'><Tooltip position='bottom' pull='end' message='Lots of tips'><Button>bottom - end</Button></Tooltip></div>
					<div className='flex-20'></div>
				</div>
			</Demo>
		);
	}
}
