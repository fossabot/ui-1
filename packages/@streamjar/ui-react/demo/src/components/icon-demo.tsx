import * as React from 'react';

import { Button, Icon } from '../../../src/lib';
import { Demo } from '../demo/demo';
import { icons } from '../icons.generated';

export class IconDemo extends React.Component {
	public config = {
		name: 'Icons',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<p> We support two families of fonts. You can use any <a href='https://design.google.com/icons/'> material icon </a>
					or you can use one of the below icons (prefixed with jar_). You can add new icons in <code>@streamjar/ui-shared</code>.
				</p>

				<p> Custom Icons</p>

				<div className='layout-row layout-wrap'>
					{icons.map(i => <div key={i} className='icon layout-column flex-20 layout-align-center-center'>
						<div style={{ padding: '10px' }}><Icon icon={`jar_${i}`} /> </div>

						<div>
							<code style={{ color: '#FFF' }}>jar_{i}</code>
						</div>
					</div>)}
				</div>
			</Demo>
		);
	}
}
