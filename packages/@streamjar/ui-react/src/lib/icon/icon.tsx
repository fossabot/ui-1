import * as React from 'react';

export interface IIconProps {
	icon: string;
}

export class Icon extends React.PureComponent<IIconProps> {
	public render() {
		let { icon } = this.props;

		let container;
		let family = 'material';

		if (icon.startsWith('jar_')) {
			family = 'jar';
			icon = family.replace('jar_', '');
		}

		if (family === 'material') {
			container = <i className='material-icons'>{icon}</i>;
		} else {
			// todo(LukeT): Implement custom icon support
			container = <i className='material-icons'>delete</i>;
		}

		return <div className='jar-icon'>{container}</div>;
	}
}
