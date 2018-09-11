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
	onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export class Button extends React.PureComponent<IButtonProps> {
	public static defaultProps: Partial<IButtonProps> = {
		colour: 'primary',
		disabled: false,
		iconRight: false,
		onClick: () => { /* */ },
		raised: false,
		round: false,
	};

	public render(): JSX.Element {
		const { colour, children, disabled, iconRight, icon, onClick, raised, round } = this.props;

		const parent: string = classnames({
			'jar-button': true,
			'jar-button-disabled': disabled,
			'jar-button-icon': !!icon && round,
			'jar-button-raised': raised,
			'layout-align-center-center': true,
			'layout-row': true,
		});

		const child: string = classnames({
			'jar-button__content': true,
			'layout-align-center-center': true,
			'layout-row': !iconRight,
			'layout-row-reverse': iconRight,
			'right': iconRight,
		});

		const content: string = classnames({ 'jar-button__text': true, 'jar-button__text-hasIcon': !!icon });

		return (
			<button className='jarBtn' onClick={this.props.onClick} disabled={disabled}>
				<div className={parent} data-colour={colour}>
					{ !disabled && <Ripple /> }

					<div className={child}>
						{ icon && (<Icon icon={icon}></Icon>) }
						<div className={content} >{ children }</div>
					</div>
				</div>
			</button>
		);
	}
}
