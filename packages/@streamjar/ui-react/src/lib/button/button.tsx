import * as classnames from 'classnames';
import * as React from 'react';

import { Icon } from '../icon';
import { Ripple } from '../ripple';

export interface IButtonProps {
	raised?: boolean;
	disabled?: boolean;
	round?: boolean;
	icon?: string;
	colour?: string;
	iconRight?: boolean;
}

export class Button extends React.PureComponent<IButtonProps> {
	public static defaultProps: Partial<IButtonProps> = {
		colour: 'primary',
		disabled: false,
		iconRight: false,
		raised: false,
		round: false,
	};

	public render() {
		const { colour, children, disabled, iconRight, icon, raised, round } = this.props;

		const parent = classnames({
			'jar-button': true,
			'jar-button-disabled': disabled,
			'jar-button-icon': !!icon && round,
			'jar-button-raised': raised,
			'layout-align-center-center': true,
			'layout-row': true,
		});

		const child = classnames({
			'jar-button__content': true,
			'layout-align-center-center': true,
			'layout-row': !iconRight,
			'layout-row-reverse': iconRight,
			'right': iconRight,
		});

		const content = classnames({ 'jar-button__text': true, 'jar-button__text-hasIcon': !!icon });

		return (
			<button className='jarBtn'>
				<div className={parent} data-colour={colour}>
					<Ripple />

					<div className={child}>
						{ icon && (<Icon icon={icon}></Icon>) }
						<div className={content} >{ children }</div>
					</div>
				</div>
			</button>
		);
	}
}
