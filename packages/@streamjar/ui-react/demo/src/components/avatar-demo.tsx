import * as React from 'react';

import { Avatar } from '../../../src/lib';
import { Demo } from '../demo/demo';

export class AvatarDemo extends React.Component {
	public config = {
		name: 'Avatar',
	};

	public render() {
		return (
			<Demo config={this.config}>
				<Avatar data={{ email: 'luke@streamjar.tv'}}></Avatar>
				<Avatar data={{ avatar: 'https://surl.im/images/icon.ico'}}></Avatar>
				<Avatar size={50} data='https://surl.im/images/icon.ico'></Avatar>
			</Demo>
		);
	}
}
